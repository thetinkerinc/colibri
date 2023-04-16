<script>
import Page from '$layouts/page.svelte';

import TimePicker from '$components/time-picker.svelte';
import Prop from '$components/prop.svelte';
import Event from '$components/event.svelte';
import CssVariable from '$components/css-variable.svelte';

import descriptions from './descriptions.js';

import template from './template.svelte?raw';

let selected;
let date;
let placeholder;
let format;
let clearable;
let disabled;

$: data = {
	props: {
		date,
		placeholder,
		format,
		clearable,
		disabled
	}
};
</script>

<Page title="TimePicker" {template} {data}>
	<svelte:fragment slot="description">
		An input component to let users select a time. You can set the date that the
		time falls on, as well as display the selected time in any format you want.
		<br /><br />
		This component uses
		<a href="https://day.js.org/" target="_blank">dayjs</a> for internal calculations.
		The date prop works with either native Date objects or dayjs instances, but the
		selected time is always returned as a native JavaScrip Date object.
	</svelte:fragment>

	<svelte:fragment slot="example">
		<TimePicker
			{date}
			{placeholder}
			{format}
			{clearable}
			{disabled}
			bind:selected />
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
			title="date"
			type="date"
			description={descriptions.props.date}
			bind:value={date} />
		<Prop
			title="placeholder"
			type="string"
			description={descriptions.props.placeholder}
			bind:value={placeholder} />
		<Prop
			title="format"
			type="string"
			description={descriptions.props.format}
			bind:value={format} />
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
			Emitted whenever the user selects or clears a time. The currently selected
			time will be passed as an argument, or undefined if there is no time
			selected.
		</Event>
	</svelte:fragment>

	<svelte:fragment slot="styling">
		<CssVariable
			variable="--colibri-border-radius"
			override="--colibri-timepicker-trigger-border-radius"
			value="0.25rem" />
		<CssVariable
			variable="--colibri-timepicker-trigger-padding"
			value="0.25rem 0.5rem" />
		<CssVariable
			variable="--colibri-border"
			override="--colibri-timepicker-trigger-border"
			value="1px solid #d1d5db" />
		<CssVariable
			variable="--colibri-background-color"
			override="--colibri-timepicker-trigger-background-color"
			type="color" />
		<CssVariable variable="--colibri-control-disabled-opacity" value="0.6" />
		<CssVariable
			variable="--colibri-control-disabled-filter"
			value="grayscale(20%)" />
		<CssVariable
			variable="--colibri-control-placeholder-color"
			override="--colibri-timepicker-placeholder-color"
			type="color" />
		<CssVariable
			variable="--colibri-border-radius"
			override="--colibri-timepicker-border-radius"
			value="0.25rem" />
		<CssVariable
			variable="--colibri-border"
			override="--colibri-timepicker-border"
			value="1px solid #d1d5db" />
		<CssVariable
			variable="--colibri-background-color"
			override="--colibri-timepicker-clock-background-color"
			type="color" />
		<CssVariable
			variable="--colibri-shadow"
			override="--colibri-timepicker-shadow"
			value="0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)" />
		<CssVariable
			variable="--colibri-primary-color"
			override="--colibri-timepicker-topbar-background"
			type="color" />
		<CssVariable
			variable="--colibri-timepicker-topbar-padding"
			value="0.5rem 0" />
		<CssVariable
			variable="--colibri-timepicker-topbar-font-size"
			value="1.875rem" />
		<CssVariable
			variable="--colibri-timepicker-topbar-font-color"
			type="color" />
		<CssVariable
			variable="--colibri-timepicker-topbar-display-hover-background"
			type="color" />
		<CssVariable
			variable="--colibri-timepicker-topbar-display-active-font-color"
			type="color" />
		<CssVariable
			variable="--colibri-timepicker-topbar-ampm-font-size"
			value="1rem" />
		<CssVariable
			variable="--colibri-secondary-color"
			override="--colibri-timepicker-hand-color"
			type="color" />
		<CssVariable variable="--colibri-timepicker-hand-opacity" value="0.8" />
		<CssVariable
			variable="--colibri-timepicker-actions-border-top"
			value="1px solid black" />
		<CssVariable
			variable="--colibri-timepicker-actions-padding"
			value="0.5rem 0.75rem" />
	</svelte:fragment>
</Page>
