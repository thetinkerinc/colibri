<script>
export let selected = undefined;
export let placeholder = 'Choose time';
export let date = dayjs();
export let format = 'h:mm a';
export let clearable = false;
export let disabled = false;

import { createEventDispatcher } from 'svelte';
import { scale } from 'svelte/transition';
import dayjs from 'dayjs';

import dom from '$utils/dom.js';

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

let open = false;
let dragging = false;
let displayDate = dayjs();
let displayMode = DISPLAY_MODES.hour;
let position = ((dayjs(selected).hour() % 12) - 3 + 12) % 12;
let positions = 12;

$: placeholder = placeholder || 'Choose time';
$: date = dayjs(date);
$: setTimeDate(date);
$: format = format || 'h:mm a';

$: init(open);
$: nums = getNums(displayMode);
$: setPosition(displayMode);
$: morning = displayDate.hour() < 12;
$: prompt = selected ? dayjs(selected).format(format) : placeholder;

function init() {
	if (!open) {
		return;
	}
	displayDate = dayjs(selected);
	displayMode = DISPLAY_MODES.hour;
	position = ((dayjs(selected).hour() % 12) - 3 + 12) % 12;
	positions = 12;
}

function setTimeDate() {
	displayDate.year(date.year());
	displayDate.month(date.month());
	displayDate.date(date.date());
	displayDate.second(0);
	displayDate.millisecond(0);
}

function getNums() {
	let a;
	if (displayMode === DISPLAY_MODES.hour) {
		a = Array(12)
			.fill(0)
			.map((_, i) => i + 1);
		for (let i = 0; i < 2; i++) {
			a.push(a.shift());
		}
		positions = 12;
	} else if (displayMode === DISPLAY_MODES.minute) {
		a = Array(12)
			.fill(0)
			.map((_, i) => (i * 5).toString().padStart(2, '0'));
		for (let i = 0; i < 3; i++) {
			a.push(a.shift());
		}
		positions = 60;
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
		let h = nums[position];
		if (!morning) {
			h += 12;
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

function handleClickWindow(evt) {
	if (
		open &&
		trigger !== evt.target &&
		!dom.isParentOf(trigger, evt.target, false)
	) {
		open = false;
	}
}
</script>

<svelte:window on:click={handleClickWindow} />
<div
	id="trigger"
	class:disabled
	bind:this={trigger}
	on:click={handleClickTrigger}
	on:keyup={handleClickTrigger}>
	{#if selected}
		{prompt}
	{:else}
		<div id="placeholder">
			{prompt}
		</div>
	{/if}
</div>
<Anchored anchor={trigger} bind:open>
	<div
		id="clock-container"
		transition:scale={{ duration: 200 }}
		bind:this={clock}>
		<div id="top-bar">
			<div id="display-container">
				<div
					class="time-display"
					class:active={displayMode === DISPLAY_MODES.hour}
					on:click={() => (displayMode = DISPLAY_MODES.hour)}
					on:keyup={() => (displayMode = DISPLAY_MODES.hour)}>
					{displayDate.format('h')}
				</div>
				<div>:</div>
				<div
					class="time-display"
					class:active={displayMode === DISPLAY_MODES.minute}
					on:click={() => (displayMode = DISPLAY_MODES.minute)}
					on:keyup={() => (displayMode = DISPLAY_MODES.minute)}>
					{displayDate.format('mm')}
				</div>
				<div id="ampm">
					<div
						class="time-display"
						class:active={morning}
						on:click={toMorning}
						on:keyup={toMorning}>
						AM
					</div>
					<div
						class="time-display"
						class:active={!morning}
						on:click={toAfternoon}
						on:keyup={toAfternoon}>
						PM
					</div>
				</div>
			</div>
		</div>
		<div
			id="face"
			on:mousedown={handleMousedownFace}
			on:mousemove|preventDefault={handleMoveFace}
			on:mouseup={handleMouseupFace}
			bind:this={face}>
			<div
				id="hand"
				class="cell-1"
				style="transform: rotate({(360 / positions) *
					position}deg) translate(50%)">
				<div id="hand-center" />
				<div id="hand-stick" />
				<div id="hand-indicator" />
			</div>
			{#each nums as num, i}
				<div
					class="cell-1 number"
					style="transform: rotate({i *
						(360 / nums.length)}deg) translate(110px) rotate(-{i *
						(360 / nums.length)}deg)">
					{num}
				</div>
			{/each}
		</div>
		<div id="actions">
			{#if clearable}
				<Button type="secondary" on:click={handleClear}>Clear</Button>
			{/if}
			<Button on:click={handleSelect}>Select</Button>
		</div>
	</div>
</Anchored>

<style>
#trigger {
	width: fit-content;
	cursor: pointer;
	border-radius: var(
		--colibri-timepicker-trigger-border-radius,
		var(--colibri-border-radius)
	);
	padding: var(--colibri-timepicker-trigger-padding);
	border: var(--colibri-timepicker-trigger-border, var(--colibri-border));
	background: var(
		--colibri-timepicker-trigger-background-color,
		var(--colibri-background-color)
	);
}
#trigger.disabled {
	background: var(--colibri-control-disabled-background);
	opacity: var(--colibri-control-disabled-opacity);
	filter: var(--colibri-control-disabled-filter);
	cursor: not-allowed;
}
#placeholder {
	color: var(
		--colibri-timepicker-placeholder-color,
		var(--colibri-control-placeholder-color)
	);
}
#clock-container {
	width: 315px;
	border-radius: var(
		--colibri-timepicker-border-radius,
		var(--colibri-border-radius)
	);
	border: var(--colibri-timepicker-border, var(--colibri-border));
	background: var(
		--colibri-timepicker-clock-background-color,
		var(--colibri-background-color)
	);
	box-shadow: var(--colibri-timepicker-shadow, var(--colibri-shadow));
}
#top-bar {
	background: var(
		--colibri-timepicker-topbar-background,
		var(--colibri-primary-color)
	);
	padding: var(--colibri-timepicker-topbar-padding);
	font-size: var(--colibri-timepicker-topbar-font-size);
	color: var(--colibri-timepicker-topbar-font-color);
}
#display-container {
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.25rem;
}
.time-display {
	cursor: pointer;
	transition: background 0.2s;
}
.time-display:hover {
	background: var(--colibri-timepicker-topbar-display-hover-background);
}
.time-display.active {
	color: var(--colibri-timepicker-topbar-display-active-font-color);
}
#ampm {
	display: flex;
	flex-direction: column;
	margin-left: 0.25rem;
	font-size: var(--colibri-timepicker-topbar-ampm-font-size);
}
#face {
	display: grid;
	place-items: center;
	height: 315px;
	user-select: none;
}
#hand {
	display: flex;
	align-items: center;
}
#hand-center {
	height: 6px;
	width: 6px;
	border-radius: 999px;
	background: var(
		--colibri-timepicker-hand-color,
		var(--colibri-secondary-color)
	);
	opacity: var(--colibri-timepicker-hand-opacity);
}
#hand-stick {
	height: 3px;
	width: 91px;
	background: var(
		--colibri-timepicker-hand-color,
		var(--colibri-secondary-color)
	);
	opacity: var(--colibri-timepicker-hand-opacity);
}
#hand-indicator {
	height: 25px;
	width: 25px;
	border-radius: 999px;
	background: var(
		--colibri-timepicker-hand-color,
		var(--colibri-secondary-color)
	);
	opacity: var(--colibri-timepicker-hand-opacity);
}
.number {
	cursor: pointer;
}
#actions {
	border-top: var(--colibri-timepicker-actions-border-top);
	padding: var(--colibri-timepicker-actions-padding);
	text-align: right;
}
</style>
