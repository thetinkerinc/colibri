<script>
export let selected = undefined;
export let placeholder = 'Choose date';
export let start = dayjs().toDate();
export let end = dayjs().add(3, 'years').toDate();
export let format = 'ddd MMM D';
export let highlighted = [];
export let clearable = false;
export let disabled = false;

import { createEventDispatcher } from 'svelte';
import { scale } from 'svelte/transition';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc.js';

import dom from '$utils/dom.js';

import Anchored from '$components/_anchored.svelte';
import Button from '$components/button.svelte';

dayjs.extend(utc);

const dispatch = createEventDispatcher();

const DISPLAY_MODES = {
	day: 0,
	month: 1
};

let trigger;
let calendar;

let open = false;
let displayDate = dayjs().startOf('month');
let chosen;
let displayMode = DISPLAY_MODES.day;

$: placeholder = placeholder || 'Choose date';
$: start = start || dayjs().toDate();
$: end = end || dayjs().add(3, 'years').toDate();
$: format = format || 'ddd MMM D';
$: highlighted = highlighted.map((h) => dayjs(h));

$: init(open);
$: days = getDays(displayDate);
$: displayedDate = dayjs(selected).format(format);

function init() {
	if (!open) {
		return;
	}
	displayMode = DISPLAY_MODES.day;
	if (!selected) {
		chosen = undefined;
		displayDate = dayjs().startOf('month');
	} else {
		chosen = dayjs(selected);
		displayDate = dayjs(selected).startOf('month');
	}
}

function getDays() {
	let d = [];
	let cur = displayDate.day(0);
	while (cur.isBefore(displayDate.add(1, 'month').day(6).endOf('day'))) {
		d.push(cur);
		cur = cur.add(1, 'day');
	}
	return d;
}

function isOutside(day) {
	return !day.isSame(displayDate, 'month') || !isValid(day);
}

function isValid(date, unit = 'day') {
	return !date.isBefore(start, unit) && !date.isAfter(end, unit);
}

function increment() {
	changeDate(true);
}

function decrement() {
	changeDate(false);
}

function changeDate(add) {
	let unit;
	let next;
	if (displayMode === DISPLAY_MODES.day) {
		unit = 'month';
	} else if (displayMode === DISPLAY_MODES.month) {
		unit = 'year';
	}
	if (add) {
		next = displayDate.add(1, unit);
	} else {
		next = displayDate.subtract(1, unit);
	}
	if (isValid(next, unit)) {
		displayDate = next;
	}
}

function handleClickTrigger() {
	if (disabled) {
		return;
	}
	open = true;
}

function handleClickDay(day) {
	if (!isValid(day)) {
		return;
	}
	chosen = day;
	if (!chosen.isSame(displayDate, 'month')) {
		displayDate = displayDate.month(chosen.month());
	}
}

function handleClickMonth(month) {
	const d = displayDate.month(month);
	if (!isValid(d, 'month')) {
		return;
	}
	displayDate = d;
	displayMode = DISPLAY_MODES.day;
}

function handleSelect() {
	selected = chosen.toDate();
	dispatch('select', selected);
	open = false;
}

function handleClear() {
	selected = undefined;
	dispatch('select', selected);
	chosen = undefined;
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
		{displayedDate}
	{:else}
		<div id="placeholder">
			{placeholder}
		</div>
	{/if}
</div>
<Anchored anchor={trigger} bind:open>
	<div
		id="calendar-container"
		transition:scale={{ duration: 200 }}
		bind:this={calendar}>
		<div id="top-bar">
			<div class="date-control" on:click={decrement} on:keyup={decrement}>
				<div class="colibri-chevron colibri-chevron-left" />
			</div>
			<div class="date-control">
				<div
					id="month-year"
					on:click={() => (displayMode = DISPLAY_MODES.month)}
					on:keyup={() => (displayMode = DISPLAY_MODES.month)}>
					<div>{displayDate.format('MMMM')}</div>
					<div>{displayDate.format('YYYY')}</div>
				</div>
			</div>
			<div class="date-control" on:click={increment} on:keyup={increment}>
				<div class="colibri-chevron colibri-chevron-right" />
			</div>
		</div>
		{#if displayMode === DISPLAY_MODES.day}
			<div id="days">
				{#each ['S', 'M', 'T', 'W', 'T', 'F', 'S'] as weekday}
					<div id="weekday" class="day">
						{weekday}
					</div>
				{/each}
				{#each days as day}
					{@const today = day.isSame(dayjs(), 'day')}
					{@const selected = chosen && day.isSame(chosen, 'day')}
					{@const outside = isOutside(day)}
					{@const selectable = isValid(day)}
					{@const highlight = highlighted.some((h) =>
						h.utc().isSame(day.utc(), 'day')
					)}
					<div class="day">
						<div
							class="date"
							class:highlight
							class:outside
							class:selectable
							class:selected
							class:today
							on:click={() => handleClickDay(day)}
							on:keyup={() => handleClickDay(day)}>
							{day.date()}
						</div>
					</div>
				{/each}
			</div>
		{:else if displayMode === DISPLAY_MODES.month}
			<div id="months">
				{#each { length: 12 } as _, month}
					{@const outside = !isValid(displayDate.month(month), 'month')}
					{@const current = displayDate.month() === month}
					<div
						class="month"
						class:outside
						class:current
						on:click={() => handleClickMonth(month)}
						on:keyup={() => handleClickMonth(month)}>
						{dayjs().month(month).format('MMM')}
					</div>
				{/each}
			</div>
		{/if}
		<div id="actions">
			{#if clearable}
				<Button type="secondary" disabled={!chosen} on:click={handleClear}>
					Clear
				</Button>
			{/if}
			<Button disabled={!chosen} on:click={handleSelect}>Select</Button>
		</div>
	</div>
</Anchored>

<style>
#trigger {
	width: fit-content;
	cursor: pointer;
	border-radius: var(
		--colibri-datepicker-trigger-border-radius,
		var(--colibri-border-radius)
	);
	padding: var(--colibri-datepicker-trigger-padding);
	border: var(--colibri-datepicker-trigger-border, var(--colibri-border));
	background: var(
		--colibri-datepicker-trigger-background-color,
		var(--colibri-background-color)
	);
}
#trigger.disabled {
	opacity: var(--colibri-control-disabled-opacity);
	filter: var(--colibri-control-disabled-filter);
	cursor: not-allowed;
}
#placeholder {
	color: var(
		--colibri-datepicker-placeholder-color,
		var(--colibri-control-placeholder-color)
	);
}
#calendar-container {
	display: flex;
	flex-direction: column;
	width: 315px;
	border-radius: var(
		--colibri-datepicker-border-radius,
		var(--colibri-border-radius)
	);
	border: var(--colibri-datepicker-border, var(--colibri-border));
	background: var(
		--colibri-datepicker-calendar-background-color,
		var(--colibri-background-color)
	);
	box-shadow: var(--colibri-datepicker-shadow, var(--colibri-shadow));
}
#top-bar {
	display: grid;
	grid-template-columns: auto 1fr auto;
	align-items: center;
	cursor: pointer;
	padding: var(--colibri-datepicker-topbar-padding);
	font-size: var(
		--colibri-datepicker-topbar-font-size,
		var(--colibri-font-size-lg)
	);
}
.date-control {
	display: grid;
	place-items: center;
	place-self: stretch;
	border-radius: var(
		--colibri-datepicker-topbar-control-border-radius,
		var(--colibri-border-radius)
	);
	padding: var(--colibri-datepicker-topbar-control-padding);
}
.date-control:hover {
	background: var(
		--colibri-datepicker-topbar-control-background-hover,
		var(--colibri-neutral-color-light-2)
	);
}
#month-year {
	display: flex;
	gap: 0.5rem;
}
#days {
	display: grid;
	grid-template: repeat(7, 1fr) / repeat(7, 1fr);
}
.day {
	display: inline-grid;
	width: 45px;
	height: 45px;
	place-items: center;
	padding: 6px;
}
#weekday {
	font-weight: bold;
}
.date {
	display: inline-grid;
	place-items: center;
	height: 100%;
	width: 100%;
	border-radius: var(
		--colibri-datepicker-date-border-radius,
		var(--colibri-border-radius)
	);
	cursor: default;
}
.date.highlight {
	background: var(
		--colibri-datepicker-date-highlight-background,
		var(--colibri-neutral-color-light-1)
	);
}
.date.outside {
	color: var(
		--colibri-datepicker-date-outside-color,
		var(--colibri-neutral-color)
	);
}
.date.selectable:not(.selected):hover {
	background: var(
		--colibri-datepicker-date-background-hover,
		var(--colibri-neutral-color-light-2)
	);
}
.date.today {
	border: 1px solid
		var(--colibri-datepicker-today-border-color, var(--colibri-secondary-color));
}
.date.selected {
	border: none;
	color: var(--colibri-datepicker-date-selected-font-color);
	background: var(
		--colibri-datepicker-date-selected-background,
		var(--colibri-primary-color)
	);
}
#months {
	display: grid;
	grid-template: repeat(4, 67px) / repeat(3, 1fr);
	gap: var(--colibri-datepicker-month-spacing);
	margin: var(--colibri-datepicker-month-spacing);
}
.month {
	display: grid;
	place-items: center;
	cursor: default;
	border-radius: var(
		--colibri-datepicker-month-border-radius,
		var(--colibri-border-radius)
	);
	border: var(--colibri-datepicker-month-border, var(--colibri-border));
}
.month.outside {
	color: var(
		--colibri-datepicker-month-outside-color,
		var(--colibri-neutral-color)
	);
}
.month.current:not(.outside) {
	color: var(--colibri-datepicker-month-selected-font-color);
	background: var(
		--colibri-datepicker-month-selected-background,
		var(--colibri-primary-color)
	);
}
.month:not(.current):not(.outside):hover {
	background: var(
		--colibri-datepicker-month-hover-background,
		var(--colibri-neutral-color-light-2)
	);
}
#actions {
	border-top: var(--colibri-datepicker-actions-border-top);
	padding: var(--colibri-datepicker-actions-padding);
	text-align: right;
}
</style>
