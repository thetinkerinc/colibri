<script>
export let selected = undefined;
export let placeholder = 'Choose date';
export let start = dayjs().toDate();
export let end = dayjs().add(3, 'years').toDate();
export let format = 'ddd MMM D';
export let highlighted = [];
export let clearable = false;
export let disabled = false;
export { trigger as element };
export let style = undefined;

import { createEventDispatcher, tick } from 'svelte';
import { scale } from 'svelte/transition';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc.js';
import { ChevronLeft, ChevronRight } from 'lucide-svelte';

import dom from '$utils/dom.js';
import theme from '$utils/theme.js';

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

let focus = {
	previous: undefined,
	children: undefined
};

$: userStyles = theme.makeUserStyles(
	'date-picker',
	['trigger', 'container', 'topbar', 'days', 'months', 'actions'],
	style
);

$: placeholder = placeholder || 'Choose date';
$: start = start || dayjs().toDate();
$: end = end || dayjs().add(3, 'years').toDate();
$: format = format || 'ddd MMM D';
$: highlighted = highlighted.map((h) => dayjs(h));

$: init(open);
$: updateFocus(displayMode, displayDate);
$: days = getDays(displayDate);
$: displayedDate = dayjs(selected).format(format);

function init() {
	if (!open) {
		focus.previous?.focus();
		focus = {};
		return;
	}
	tick().then(() => {
		focus.previous = document.activeElement;
		focus.children = dom.getFocusableElements(calendar);
		dom.focusNext(focus.children);
	});
	displayMode = DISPLAY_MODES.day;
	if (!selected) {
		chosen = undefined;
		displayDate = dayjs().startOf('month');
	} else {
		chosen = dayjs(selected);
		displayDate = dayjs(selected).startOf('month');
	}
}

function updateFocus() {
	tick().then(() => {
		focus.children = dom.getFocusableElements(calendar);
	});
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
	class="colibri-date-picker-trigger {$userStyles.trigger.class}"
	class:disabled
	style={$userStyles.trigger.inlines}
	bind:this={trigger}
	on:click={handleClickTrigger}>
	{#if selected}
		{displayedDate}
	{:else}
		<div class="colibri-date-picker-trigger-placeholder">
			{placeholder}
		</div>
	{/if}
</button>
<Anchored anchor={trigger} role="dialog" bind:open>
	<div
		class="colibri-date-picker-container {$userStyles.container.class}"
		style={$userStyles.container.inlines}
		transition:scale={{ duration: 200 }}
		bind:this={calendar}>
		<div
			class="colibri-date-picker-top-bar {$userStyles.topbar.class}"
			style={$userStyles.topbar.inlines}>
			<button class="colibri-date-picker-date-control" on:click={decrement}>
				<ChevronLeft />
			</button>
			<div class="colibri-date-picker-date-control">
				<button
					class="colibri-date-picker-month-year"
					on:click={() => (displayMode = DISPLAY_MODES.month)}>
					<div>{displayDate.format('MMMM')}</div>
					<div>{displayDate.format('YYYY')}</div>
				</button>
			</div>
			<button class="colibri-date-picker-date-control" on:click={increment}>
				<ChevronRight />
			</button>
		</div>
		{#if displayMode === DISPLAY_MODES.day}
			<div
				class="colibri-date-picker-days {$userStyles.days.class}"
				style={$userStyles.days.inlines}>
				{#each ['S', 'M', 'T', 'W', 'T', 'F', 'S'] as weekday}
					<div class="colibri-date-picker-weekday colibri-date-picker-day">
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
					<div class="colibri-date-picker-day">
						<button
							class="colibri-date-picker-date"
							class:highlight
							class:outside
							class:selectable
							class:selected
							class:today
							disabled={!selectable}
							on:click={() => handleClickDay(day)}>
							{day.date()}
						</button>
					</div>
				{/each}
			</div>
		{:else if displayMode === DISPLAY_MODES.month}
			<div
				class="colibri-date-picker-months {$userStyles.months.class}"
				style={$userStyles.months.inlines}>
				{#each { length: 12 } as _, month}
					{@const outside = !isValid(displayDate.month(month), 'month')}
					{@const current = displayDate.month() === month}
					<button
						class="colibri-date-picker-month"
						class:outside
						class:current
						disabled={outside}
						on:click={() => handleClickMonth(month)}>
						{dayjs().month(month).format('MMM')}
					</button>
				{/each}
			</div>
		{/if}
		<div
			class="colibri-date-picker-actions {$userStyles.actions.class}"
			style={$userStyles.actions.inlines}>
			{#if clearable}
				<Button type="secondary" disabled={!chosen} on:click={handleClear}>
					Clear
				</Button>
			{/if}
			<Button disabled={!chosen} on:click={handleSelect}>Select</Button>
		</div>
	</div>
</Anchored>
