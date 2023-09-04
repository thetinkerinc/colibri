<script>
export let selected = undefined;
export let placeholder = 'Choose time';
export let date = dayjs();
export let format = 'h:mm a';
export let clearable = false;
export let disabled = false;
export { trigger as element };
export let style;

import { createEventDispatcher, tick } from 'svelte';
import { scale } from 'svelte/transition';
import dayjs from 'dayjs';

import dom from '$utils/dom.js';
import theme from '$utils/theme.js';

import Anchored from '$components/_anchored.svelte';
import Button from '$components/button.svelte';

const dispatch = createEventDispatcher();

const DISPLAY_MODES = {
	hour: 0,
	minute: 1
};

let trigger;
let clock;
let face;
let indicator;

let open = false;
let dragging = false;
let displayDate = dayjs();
let displayMode = DISPLAY_MODES.hour;
let position = ((dayjs(selected).hour() % 12) - 3 + 12) % 12;
let positions = 12;
let highlightPosition = [0, 0];

let focus = {
	previous: undefined,
	children: undefined
};

$: userStyles = theme.makeUserStyles(
	'time-picker',
	['trigger', 'container', 'topbar', 'face', 'actions'],
	style
);

$: placeholder = placeholder || 'Choose time';
$: date = dayjs(date);
$: format = format || 'h:mm a';

$: init(open);
$: updateFocus(displayMode, displayDate);
$: nums = getNums(displayMode);
$: morning = displayDate.hour() < 12;
$: setPosition(displayMode);
$: setHighlightPosition(position);
$: setTimeDate(date, selected);
$: prompt = selected ? dayjs(selected).format(format) : placeholder;

function init() {
	if (!open) {
		focus.previous?.focus();
		focus = {};
		return;
	}
	tick().then(() => {
		focus.previous = document.activeElement;
		focus.children = dom.getFocusableElements(clock);
		dom.focusNext(focus.children);
	});
	displayDate = dayjs(selected);
	displayMode = DISPLAY_MODES.hour;
	position = ((dayjs(selected).hour() % 12) - 3 + 12) % 12;
	positions = 12;
	const interval = setInterval(setHighlightPosition, 50);
	setTimeout(() => clearInterval(interval), 300);
}

function updateFocus() {
	tick().then(() => {
		focus.children = dom.getFocusableElements(clock);
	});
}

function setTimeDate() {
	displayDate = displayDate
		.year(date.year())
		.month(date.month())
		.date(date.date())
		.second(0)
		.millisecond(0);
	if (selected) {
		selected = displayDate;
	}
}

function getNums() {
	let a;
	if (displayMode === DISPLAY_MODES.hour) {
		a = Array(12)
			.fill(0)
			.map((_, i) => i + 1);
		positions = 12;
	} else if (displayMode === DISPLAY_MODES.minute) {
		a = Array(12)
			.fill(0)
			.map((_, i) => (i * 5).toString().padStart(2, '0'));
		positions = 60;
		a.push(a.shift());
	}
	return a;
}

function setPosition() {
	if (displayMode === DISPLAY_MODES.hour) {
		position = ((displayDate.hour() % 12) - 3 + 12) % 12;
	} else if (displayMode === DISPLAY_MODES.minute) {
		position = (((displayDate.minute() - 15) % 60) + 60) % 60;
	}
}

async function setHighlightPosition() {
	if (!face || !indicator) {
		return;
	}
	await tick();
	const faceBounds = face.getBoundingClientRect();
	const indicatorBounds = indicator.getBoundingClientRect();
	const x = indicatorBounds.x - faceBounds.x + indicatorBounds.width / 2;
	const y = indicatorBounds.y - faceBounds.y + indicatorBounds.height / 2;
	highlightPosition = [x, y];
}

function handleClickTrigger() {
	if (disabled) {
		return;
	}
	open = true;
}

function handleMousedownFace() {
	dragging = true;
}

function handleMoveFace(evt) {
	if (!dragging) {
		return;
	}
	calculatePosition(evt);
	updateDate(false);
}

function handleMouseupFace(evt) {
	dragging = false;
	calculatePosition(evt);
	updateDate(true);
}

function handleClickNumber(i) {
	return () => {
		if (displayMode === DISPLAY_MODES.hour) {
			position = (i - 2) % 12;
			updateDate(true);
		} else if (displayMode === DISPLAY_MODES.minute) {
			position = ((i - 2) % 12) * 5;
			updateDate(false);
		}
	};
}

function calculatePosition(evt) {
	const rect = face.getBoundingClientRect();
	const pos = {
		x: evt.x - rect.x,
		y: evt.y - rect.y
	};
	const center = {
		x: rect.width / 2,
		y: rect.height / 2
	};
	const dx = Math.round(pos.x - center.x);
	const dy = Math.round(center.y - pos.y);
	let theta = Math.round(
		(Math.atan(Math.abs(dy) / Math.abs(dx)) * 180) / Math.PI
	);
	if (dx < 0 && dy > 0) {
		theta = 180 - theta;
	} else if (dx < 0 && dy < 0) {
		theta = 180 + theta;
	} else if (dx > 0 && dy < 0) {
		theta = 360 - theta;
	} else if (dx === 0 && dy < 0) {
		theta = 270;
	} else if (dy === 0 && dx < 0) {
		theta = 180;
	}
	const sectionSize = 360 / positions;
	theta = 360 - theta + sectionSize / 2;
	if (theta > 360) {
		theta = theta - 360;
	}
	position = Math.floor(theta / sectionSize);
}

function updateDate(change) {
	if (displayMode === DISPLAY_MODES.hour) {
		let h = nums[(position + 2) % 12];
		if (!morning && h !== 12) {
			h += 12;
		}
		if (morning && h === 12) {
			h = 0;
		}
		displayDate = displayDate.hour(h);
		if (change) {
			displayMode = DISPLAY_MODES.minute;
		}
	} else if (displayMode === DISPLAY_MODES.minute) {
		const m = (((position + 15) % 60) + 60) % 60;
		displayDate = displayDate.minute(m);
	}
}

function toMorning() {
	ampm(false);
}

function toAfternoon() {
	ampm(true);
}

function ampm(add) {
	if (!add) {
		if (morning) {
			return;
		}
		displayDate = displayDate.hour(displayDate.hour() - 12);
	} else {
		if (!morning) {
			return;
		}
		displayDate = displayDate.hour(displayDate.hour() + 12);
	}
}

function handleSelect() {
	selected = displayDate.toDate();
	dispatch('select', selected);
	open = false;
}

function handleClear() {
	selected = undefined;
	dispatch('select', selected);
	open = false;
}

function handleKeydown(evt) {
	if (!open) {
		return;
	}
	if (evt.key === 'Tab') {
		evt.preventDefault();
		evt.stopPropagation();
		dom.focusNext(focus.children, !evt.shiftKey);
		return;
	}
}
</script>

<svelte:window on:keydown={handleKeydown} />
<button
	class="colibri-time-picker-trigger {$userStyles.trigger.class}"
	class:disabled
	style={$userStyles.trigger.inlines}
	bind:this={trigger}
	on:click={handleClickTrigger}>
	{#if selected}
		{prompt}
	{:else}
		<div class="colibri-time-picker-trigger-placeholder">
			{prompt}
		</div>
	{/if}
</button>
<Anchored anchor={trigger} bind:open>
	<div
		class="colibri-time-picker-container {$userStyles.container.class}"
		style={$userStyles.container.inlines}
		transition:scale={{ duration: 200 }}
		bind:this={clock}>
		<div
			class="colibri-time-picker-top-bar {$userStyles.topbar.class}"
			style={$userStyles.topbar.inlines}>
			<div class="colibri-time-picker-display-container">
				<button
					class="colibri-time-picker-time-display"
					class:active={displayMode === DISPLAY_MODES.hour}
					on:click={() => (displayMode = DISPLAY_MODES.hour)}>
					{displayDate.format('h')}
				</button>
				<div>:</div>
				<button
					class="colibri-time-picker-time-display"
					class:active={displayMode === DISPLAY_MODES.minute}
					on:click={() => (displayMode = DISPLAY_MODES.minute)}>
					{displayDate.format('mm')}
				</button>
				<div class="colibri-time-picker-ampm">
					<button
						class="colibri-time-picker-time-display"
						class:active={morning}
						on:click={toMorning}>
						AM
					</button>
					<button
						class="colibri-time-picker-time-display"
						class:active={!morning}
						on:click={toAfternoon}>
						PM
					</button>
				</div>
			</div>
		</div>
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div
			class="colibri-time-picker-face {$userStyles.face.class}"
			style={$userStyles.face.inlines}
			on:mousedown={handleMousedownFace}
			on:mousemove|preventDefault={handleMoveFace}
			on:mouseup={handleMouseupFace}
			bind:this={face}>
			<div
				class="colibri-time-picker-hand cell-1"
				style="transform: rotate({(360 / positions) *
					position}deg) translate(50%)">
				<div class="colibri-time-picker-hand-center" />
				<div class="colibri-time-picker-hand-stick" />
				<div class="colibri-time-picker-hand-indicator" bind:this={indicator} />
			</div>
			{#each nums as num, i}
				{@const section = 360 / nums.length}
				{@const angle = i * section - 60}
				<button
					class="cell-1 number"
					style="transform: rotate({angle}deg) translate(110px) rotate({-1 *
						angle}deg)"
					on:click={handleClickNumber(i)}>
					{num}
				</button>
			{/each}
			<div
				class="colibri-time-picker-highlight cell-1"
				style="clip-path: circle(12.5px at {highlightPosition[0]}px {highlightPosition[1]}px)">
				{#each nums as num, i}
					{@const section = 360 / nums.length}
					{@const angle = i * section - 60}
					<div
						class="cell-1 colibri-time-picker-number"
						style="transform: rotate({angle}deg) translate(110px) rotate({-1 *
							angle}deg)">
						{num}
					</div>
				{/each}
			</div>
		</div>
		<div
			class="colibri-time-picker-actions {$userStyles.actions.class}"
			style={$userStyles.actions.inlines}>
			{#if clearable}
				<Button type="secondary" on:click={handleClear}>Clear</Button>
			{/if}
			<Button on:click={handleSelect}>Select</Button>
		</div>
	</div>
</Anchored>
