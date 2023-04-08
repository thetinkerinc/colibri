<script>
export let open;
export let anchor = undefined;
export let position = 'center';
export let nudge = 0;

import { onMount, createEventDispatcher, tick } from 'svelte';

import Portal from '$components/portal.svelte';

onMount(() => {
	window.addEventListener('scroll', handleShouldUpdate, true);
	window.addEventListener('resize', handleShouldUpdate, true);

	return () => {
		window.removeEventListener('scroll', handleShouldUpdate, true);
		window.removeEventListener('resize', handleShouldUpdate, true);
	};
});

const preferredPosition = position;

let elem;
let decoration;
let top;
let left;
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

$: close(open);
$: adjust(elem);
$: positionStyle = [`top: ${top}px`, `left: ${left}px`];
$: offsetStyle = [
	`--offset-horizontal: ${offset.horizontal}%`,
	`--offset-vertical: ${offset.vertical}%`,
	`--offset-decoration: ${offset.decoration}%`
];
$: style = [...positionStyle, ...offsetStyle].join(';');
$: vertical = ['top', 'bottom'].includes(position);
$: horizontal = ['left', 'right'].includes(position);
$: centered = position === 'center';

initPosition();

function initPosition() {
	top = undefined;
	left = undefined;
	position = preferredPosition;
}

function initLimits() {
	const container = getClosestScrollableParent(anchor);
	let bounds;

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
		horizontal: 50,
		vertical: 50,
		decoration: 50
	};
	if (vertical) {
		offset.horizontal += nudge;
	}
	if (horizontal) {
		offset.vertical += nudge;
	}
	if (centered) {
		offset.vertical = nudge;
		offset.horizontal = nudge;
	}
}

function close() {
	if (!open) {
		dispatch('close');
		opened = false;
	}
}

function handleShouldUpdate(evt) {
	if (!isParentOf(evt.target, anchor)) {
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
	return offset.vertical < 35 || offset.vertical > 75;
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
	const anchorTo = anchor.getBoundingClientRect();
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
			position = 'bottom';
			top = anchorTo.bottom + 10;
		} else if (position === 'bottom' && rect.bottom >= limits.vertical.max) {
			position = 'top';
			top = anchorTo.top - rect.height - 10;
		}
		await tick();
		rect = elem.getBoundingClientRect();
		if (rect.bottom <= limits.vertical.min + 10 || rect.top >= limits.vertical.max - 10) {
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
			position = 'left';
			left = anchorTo.left - rect.width - 10;
		} else if (position === 'left' && rect.left <= limits.horizontal.min) {
			position = 'right';
			left = anchorTo.right + 10;
		}
		await tick();
		rect = elem.getBoundingClientRect();
		if (rect.right <= limits.horizontal.min + 10 || rect.left >= limits.horizontal.max - 10) {
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
}

function setOffsetHorizontal(rect) {
	if (rect.right >= limits.horizontal.max) {
		const d = Math.ceil(((rect.right - limits.horizontal.max) / rect.width) * 100) + 3;
		offset.horizontal += d;
		offset.decoration -= d;
	} else if (rect.left <= limits.horizontal.min) {
		const d = Math.ceil((Math.abs(rect.left - limits.horizontal.min) / rect.width) * 100) + 3;
		offset.horizontal -= d;
		offset.decoration += d;
	}
}

function setOffsetVertical(rect) {
	if (rect.bottom >= limits.vertical.max) {
		const d = Math.ceil(((rect.bottom - limits.vertical.max) / rect.height) * 100) + 3;
		offset.vertical += d;
		offset.decoration += d;
	} else if (rect.top <= 0) {
		const d = Math.ceil((Math.abs(rect.top - limits.vertical.min) / rect.height) * 100) + 3;
		offset.vertical -= d;
		offset.decoration -= d;
	}
}

function isParentOf(parent, child) {
	if (parent === window || parent === document) {
		return true;
	}
	let test = child.parentElement;
	while (test !== null) {
		if (test === parent) {
			return true;
		}
		test = test.parentElement;
	}
	return false;
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
	return e.clientWidth > 0 && e.scrollWidth > e.clientWidth && !re.test(style.overflowX);
}

function canScrollVertical(e, style, re) {
	return e.clientHeight > 0 && e.scrollHeight > e.clientHeight && !re.test(style.overflowY);
}
</script>

<svelte:window on:click={() => (open = false)} />
{#if open}
	<Portal>
		<div
			class="fixed z-10 h-max w-max
                       {(vertical || centered) && '-translate-x-[var(--offset-horizontal)]'}
                       {(horizontal || centered) && '-translate-y-[var(--offset-vertical)]'}"
			{style}
			bind:this={elem}
			on:click|stopPropagation
			on:keyup|stopPropagation>
			<slot />
			{#if $$slots.decoration}
				<div
					class="absolute
                               {vertical && 'right-[var(--offset-decoration)] translate-x-1/2'}
                               {horizontal && 'top-[var(--offset-decoration)] -translate-y-1/2'}
                               {position === 'top' && 'top-full'}
                               {position === 'bottom' && 'bottom-full rotate-180'}
                               {position === 'right' && 'right-full rotate-90'}
                               {position === 'left' && 'left-full -rotate-90'}"
					bind:this={decoration}>
					<slot name="decoration" />
				</div>
			{/if}
		</div>
	</Portal>
{/if}
