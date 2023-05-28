<script>
export let open;
export let anchor = undefined;
export let position = 'center';
export let nudgeHorizontal = 0;
export let nudgeVertical = 0;
export let closeOnClick = false;

import { onMount, createEventDispatcher, tick } from 'svelte';

import dom from '$utils/dom.js';

import Portal from '$components/portal.svelte';

onMount(() => {
	window.addEventListener('scroll', handleShouldUpdate, true);
	window.addEventListener('resize', handleShouldUpdate, true);
	observer = new MutationObserver(handleShouldUpdate);

	return () => {
		window.removeEventListener('scroll', handleShouldUpdate, true);
		window.removeEventListener('resize', handleShouldUpdate, true);
		if (observer) {
			observer.disconnect();
		}
	};
});

let elem;
let decoration;
let observer;
let top;
let left;
let displayPosition = position;
let limits = {
	horizontal: {},
	vertical: {}
};
let offset = {
	horizontal: 50,
	vertical: 50,
	decoration: 50
};
let adjusting = false;
let opened = false;

const dispatch = createEventDispatcher();

$: position = position ?? 'center';
$: vertical = ['top', 'bottom'].includes(position);
$: horizontal = ['left', 'right'].includes(position);
$: centered = position === 'center';
$: setupObserver(elem, open);
$: close(open);
$: adjust(elem, position, anchor, nudgeHorizontal, nudgeVertical);
$: positionStyle = [`top: ${top}px`, `left: ${left}px`];
$: offsetStyle = [
	`--offset-horizontal: ${offset.horizontal}%`,
	`--offset-vertical: ${offset.vertical}%`,
	`--offset-decoration: ${offset.decoration}%`
];
$: style = [...positionStyle, ...offsetStyle].join(';');

function setupObserver() {
	if (open && elem) {
		observer.observe(elem, {
			attributes: true,
			childLsit: true,
			subtree: true,
			characterData: true
		});
	} else if (!open && observer) {
		observer.disconnect();
	}
}

function initPosition() {
	top = undefined;
	left = undefined;
	displayPosition = position;
}

function initLimits() {
	let container;
	let bounds;
	if (anchor instanceof HTMLElement) {
		container = getClosestScrollableParent(anchor);
	}

	if (container == null) {
		bounds = {
			top: 0,
			left: 0,
			bottom: window.innerHeight,
			right: document.body.clientWidth
		};
	} else {
		bounds = container.getBoundingClientRect();
	}

	limits.horizontal.min = bounds.left;
	limits.horizontal.max = bounds.right;
	limits.vertical.min = bounds.top;
	limits.vertical.max = bounds.bottom;
}

function initOffset() {
	offset = {
		horizontal: vertical ? 50 : 0,
		vertical: horizontal ? 50 : 0,
		decoration: 50
	};
	let h = nudgeHorizontal ?? 0;
	if (position === 'right' || vertical) {
		h *= -1;
	}
	let v = nudgeVertical ?? 0;
	if (position === 'bottom' || horizontal) {
		v *= -1;
	}
	offset.horizontal += h;
	offset.vertical += v;
}

function close() {
	if (!open) {
		dispatch('close');
		opened = false;
	}
}

function handleWindowClick(evt) {
	if (!anchor) {
		return;
	}
	let clickedOutside;
	if (anchor instanceof HTMLElement) {
		clickedOutside =
			anchor !== evt.target && !dom.isParentOf(anchor, evt.target, false);
	} else {
		const x = evt.pageX;
		const y = evt.pageY;
		clickedOutside =
			x <= anchor.left ||
			x >= anchor.right ||
			y <= anchor.top ||
			y >= anchor.bottom;
	}
	if (open && closeOnClick && clickedOutside) {
		open = false;
	}
}

function handleShouldUpdate(evt) {
	if (
		evt?.target &&
		anchor instanceof HTMLElement &&
		!dom.isParentOf(evt.target, anchor, true)
	) {
		return;
	}
	if (!adjusting) {
		window.requestAnimationFrame(async () => {
			await adjust();
			adjusting = false;
		});
		adjusting = true;
	}
}

async function adjust() {
	if (!open || !anchor || !elem) {
		return;
	}
	initPosition();
	initLimits();
	initOffset();
	await setPosition();
	setOffset();
	if (
		(vertical && shouldCloseVertical()) ||
		(horizontal && shouldCloseHorizontal()) ||
		(centered && shouldCloseCentered())
	) {
		open = false;
	}
	if (!opened) {
		dispatch('open');
		opened = true;
	}
}

function shouldCloseVertical() {
	return offset.horizontal < 2 || offset.horizontal > 98;
}

function shouldCloseHorizontal() {
	return offset.vertical < 20 || offset.vertical > 80;
}

function shouldCloseCentered() {
	return (
		offset.horizontal < -50 ||
		offset.horizontal > 50 ||
		offset.vertical < -50 ||
		offset.vertical > 50
	);
}

async function setPosition() {
	await tick();
	let rect = elem.getBoundingClientRect();
	let anchorTo = anchor;
	if (anchor instanceof HTMLElement) {
		anchorTo = anchor.getBoundingClientRect();
	}
	if (vertical) {
		left = anchorTo.left + anchorTo.width / 2;
		if (position === 'top') {
			top = anchorTo.top - rect.height - 10;
		} else {
			top = anchorTo.bottom + 10;
		}
		await tick();
		rect = elem.getBoundingClientRect();
		if (position === 'top' && rect.top <= limits.vertical.min) {
			displayPosition = 'bottom';
			top = anchorTo.bottom + 10;
		} else if (position === 'bottom' && rect.bottom >= limits.vertical.max) {
			displayPosition = 'top';
			top = anchorTo.top - rect.height - 10;
		}
		await tick();
		rect = elem.getBoundingClientRect();
		if (
			rect.bottom <= limits.vertical.min + 10 ||
			rect.top >= limits.vertical.max - 10
		) {
			open = false;
		}
	} else if (horizontal) {
		top = anchorTo.top + anchorTo.height / 2;
		if (position === 'right') {
			left = anchorTo.right + 10;
		} else {
			left = anchorTo.left - rect.width - 10;
		}
		await tick();
		rect = elem.getBoundingClientRect();
		if (position === 'right' && rect.right >= limits.horizontal.max) {
			displayPosition = 'left';
			left = anchorTo.left - rect.width - 10;
		} else if (position === 'left' && rect.left <= limits.horizontal.min) {
			displayPosition = 'right';
			left = anchorTo.right + 10;
		}
		await tick();
		rect = elem.getBoundingClientRect();
		if (
			rect.right <= limits.horizontal.min + 10 ||
			rect.left >= limits.horizontal.max - 10
		) {
			open = false;
		}
	} else {
		const w = window.innerWidth;
		const h = window.innerHeight;
		const small = w < 1024;
		if (small) {
			top = h / 2 - rect.height / 2;
			left = w / 2 - rect.width / 2;
		} else {
			top = anchorTo.top + anchorTo.height / 2 - rect.height / 2;
			left = anchorTo.left + anchorTo.width / 2 - rect.width / 2;
		}
	}
	await tick();
}

function setOffset() {
	if (!elem) {
		return;
	}
	const rect = elem.getBoundingClientRect();
	if (vertical || centered) {
		setOffsetHorizontal(rect);
	}
	if (horizontal || centered) {
		setOffsetVertical(rect);
	}
	offset.decoration = clamp(offset.decoration, 10, 90);
}

function setOffsetHorizontal(rect) {
	if (rect.right >= limits.horizontal.max) {
		const d =
			Math.ceil(((rect.right - limits.horizontal.max) / rect.width) * 100) + 3;
		offset.horizontal += d;
		offset.decoration -= d;
	} else if (rect.left <= limits.horizontal.min) {
		const d =
			Math.ceil(
				(Math.abs(rect.left - limits.horizontal.min) / rect.width) * 100
			) + 3;
		offset.horizontal -= d;
		offset.decoration += d;
	}
}

function setOffsetVertical(rect) {
	if (rect.bottom >= limits.vertical.max) {
		const d =
			Math.ceil(((rect.bottom - limits.vertical.max) / rect.height) * 100) + 3;
		offset.vertical += d;
		offset.decoration += d;
	} else if (rect.top <= limits.vertical.min) {
		const d =
			Math.ceil(
				(Math.abs(rect.top - limits.vertical.min) / rect.height) * 100
			) + 3;
		offset.vertical -= d;
		offset.decoration -= d;
	}
}

function getClosestScrollableParent(elem) {
	while (elem !== null && !canScroll(elem)) {
		elem = elem.parentElement;
	}
	return elem;
}

function canScroll(e) {
	const style = getComputedStyle(e);
	const re = /visible|hidden/;
	return canScrollHorizontal(e, style, re) || canScrollVertical(e, style, re);
}

function canScrollHorizontal(e, style, re) {
	return (
		e.clientWidth > 0 &&
		e.scrollWidth > e.clientWidth &&
		!re.test(style.overflowX)
	);
}

function canScrollVertical(e, style, re) {
	return (
		e.clientHeight > 0 &&
		e.scrollHeight > e.clientHeight &&
		!re.test(style.overflowY)
	);
}

function clamp(num, min, max) {
	return Math.min(Math.max(num, min), max);
}
</script>

<svelte:window on:click={handleWindowClick} />
{#if open}
	<Portal>
		<div
			id="container"
			{style}
			bind:this={elem}
			on:click|stopPropagation
			on:keyup|stopPropagation>
			<slot />
			{#if $$slots.decoration && !centered}
				<div
					id="decoration"
					class:vertical
					class:horizontal
					class={displayPosition}
					bind:this={decoration}>
					<slot name="decoration" />
				</div>
			{/if}
		</div>
	</Portal>
{/if}

<style>
#container {
	position: fixed;
	z-index: 10;
	height: max-content;
	width: max-content;
	transform: translate(
		calc(var(--offset-horizontal) * -1),
		calc(var(--offset-vertical) * -1)
	);
}
#decoration {
	--translate-x-decoration: 0;
	--translate-y-decoration: 0;
	--rotate-decoration: 0;
	position: absolute;
	transform: translate(
			var(--translate-x-decoration),
			var(--translate-y-decoration)
		)
		rotate(var(--rotate-decoration));
}
#decoration.vertical {
	--translate-x-decoration: 50%;
	right: var(--offset-decoration);
}
#decoration.horizontal {
	--translate-y-decoration: -50%;
	top: var(--offset-decoration);
}
#decoration.top {
	top: 100%;
}
#decoration.bottom {
	--rotate-decoration: 180deg;
	bottom: 100%;
}
#decoration.right {
	--rotate-decoration: 90deg;
	right: 100%;
}
#decoration.left {
	--rotate-decoration: -90deg;
	left: 100%;
}
</style>
