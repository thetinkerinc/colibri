<script>
import Page from '$layouts/page.svelte';

import DatePicker from '$components/date-picker.svelte';
import Prop from '$components/prop.svelte';
import Event from '$components/event.svelte';
import CssVariable from '$components/css-variable.svelte';

import descriptions from './descriptions.js';

import template from './template.svelte?raw';

let placeholder;
let start;
let end;
let format;
let highlighted;
let clearable;
let disabled;

$: data = {
	props: {
		placeholder,
		start,
		end,
		format,
		highlighted,
		clearable,
		disabled
	}
};
</script>

<Page title="DatePicker" {template} {data}>
	<svelte:fragment slot="description">
		An input component to let users select a date. You can limit the allowed
		dates, as well as display the selected date in any format you'd like.
		<br /><br />
		This component uses
		<a href="https://day.js.org/" target="_blank">dayjs</a> for internal calculations.
		All props work with either native Date objects or dayjs instances, but the selected
		date is always returned as a native JavaScrip Date object.
	</svelte:fragment>

	<svelte:fragment slot="example">
		<DatePicker
			{placeholder}
			{start}
			{end}
			{format}
			{highlighted}
			{clearable}
			{disabled} />
	</svelte:fragment>

	<svelte:fragment slot="props">
		<Prop title="selected" description={descriptions.props.selected}>
			<a
				href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date"
				target="_blank">
				Date
			</a>
		</Prop>
		<Prop
			title="placeholder"
			type="string"
			description={descriptions.props.placeholder}
			bind:value={placeholder} />
		<Prop
			title="start"
			type="date"
			description={descriptions.props.start}
			bind:value={start} />
		<Prop
			title="end"
			type="date"
			description={descriptions.props.end}
			bind:value={end} />
		<Prop
			title="format"
			type="string"
			description={descriptions.props.format}
			bind:value={format} />
		<Prop
			title="highlighted"
			type="dates"
			description={descriptions.props.highlighted}
			bind:value={highlighted} />
		<Prop
			title="clearable"
			type="boolean"
			description={descriptions.props.clearable}
			bind:value={clearable} />
		<Prop
			title="disabled"
			type="boolean"
			description={descriptions.props.disabled}
			bind:value={disabled} />
	</svelte:fragment>

	<svelte:fragment slot="events">
		<Event name="selected">
			Emitted whenever the user selects or clears a date. The currently selected
			date will be passed as an argument, or undefined if there is no date
			selected.
		</Event>
	</svelte:fragment>

	<svelte:fragment slot="styling">
		<CssVariable
			variable="--colibri-border-radius"
			override="--colibri-datepicker-trigger-border-radius"
			value="0.25rem" />
		<CssVariable
			variable="--colibri-datepicker-trigger-padding"
			value="0.25rem 0.5rem" />
		<CssVariable
			variable="--colibri-border"
			override="--colibri-datepicker-border"
			value="1px solid #d1d5db" />
		<CssVariable
			variable="--colibri-background-color"
			override="--colibri-datepicker-input-background-color"
			type="color" />
		<CssVariable variable="--colibri-control-disabled-opacity" value="0.6" />
		<CssVariable
			variable="--colibri-control-disabled-filter"
			value="grayscale(20%)" />
		<CssVariable
			variable="--colibri-control-placeholder-color"
			override="--colibri-datepicker-placeholder-color"
			type="color" />
		<CssVariable
			variable="--colibri-border-radius"
			override="--colibri-datepicker-trigger-border-radius"
			value="0.25rem" />
		<CssVariable
			variable="--colibri-border"
			override="--colibri-datepicker-border"
			value="1px solid #d1d5db" />
		<CssVariable
			variable="--colibri-background-color"
			override="--colibri-datepicker-calendar-background-color"
			type="color" />
		<CssVariable
			variable="--colibri-shadow"
			override="--colibri-datepicker-shadow"
			value="0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)" />
		<CssVariable
			variable="--colibri-datepicker-topbar-padding"
			value="0.5rem" />
		<CssVariable
			variable="--colibri-font-size-lg"
			override="--colibri-datepicker-topbar-font-size"
			value="1.125rem" />
		<CssVariable
			variable="--colibri-border-radius"
			override="--colibri-datepicker-topbar-control-border-radius"
			value="0.25rem" />
		<CssVariable
			variable="--colibri-datepicker-topbar-control-padding"
			value="0.75rem" />
		<CssVariable
			variable="--colibri-neutral-color-light-2"
			override="--colibri-datepicker-topbar-control-background-hover"
			type="color" />
		<CssVariable
			variable="--colibri-border-radius"
			override="--colibri-datepicker-date-border-radius"
			value="0.25rem" />
		<CssVariable
			variable="--colibri-neutral-color-light-1"
			override="--colibri-datepicker-date-highlight-background"
			type="color" />
		<CssVariable
			variable="--colibri-neutral-color"
			override="--colibri-datepicker-date-outside-color"
			type="color" />
		<CssVariable
			variable="--colibri-neutral-color-light-2"
			override="--colibri-datepicker-date-background-hover"
			type="color" />
		<CssVariable
			variable="--colibri-secondary-color"
			override="--colibri-datepicker-today-border-color"
			type="color" />
		<CssVariable
			variable="--colibri-datepicker-date-selected-font-color"
			type="color" />
		<CssVariable
			variable="--colibri-primary-color"
			override="--colibri-datepicker-date-selected-background"
			type="color" />
		<CssVariable variable="--colibri-datepicker-month-spacing" value="0.5rem" />
		<CssVariable
			variable="--colibri-border-radius"
			override="--colibri-datepicker-month-border-radius"
			value="0.25rem" />
		<CssVariable
			variable="--colibri-border"
			override="--colibri-datepicker-month-border"
			value="1px solid #d1d5db" />
		<CssVariable
			variable="--colibri-neutral-color"
			override="--colibri-datepicker-month-outside-color"
			type="color" />
		<CssVariable
			variable="--colibri-datepicker-month-selected-font-color"
			type="color" />
		<CssVariable
			variable="--colibri-primary-color"
			override="--colibri-datepicker-month-selected-background"
			type="color" />
		<CssVariable
			variable="--colibri-neutral-color-light-2"
			override="--colibri-datepicker-month-hover-background"
			type="color" />
		<CssVariable
			variable="--colibri-datepicker-actions-border-top"
			value="1px solid black" />
		<CssVariable
			variable="--colibri-datepicker-actions-padding"
			value="0.5rem 0.75rem" />
	</svelte:fragment>
</Page>
