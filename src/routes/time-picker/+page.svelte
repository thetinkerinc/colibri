<script>
import Page from '$layouts/page.svelte';

import TimePicker from '$components/time-picker.svelte';
import Prop from '$components/prop.svelte';
import Event from '$components/event.svelte';
import Styling from '$components/styling.svelte';

import descriptions from './descriptions.js';

import template from './template.svelte?raw';

let selected;
let date;
let placeholder;
let format;
let clearable;
let disabled;
let style;

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

<Page title="TimePicker" canStyle={true} {template} {data}>
	<svelte:fragment slot="description">
		An input component to let users select a time. You can set the date that the
		time falls on, as well as display the selected time in any format you want.
		<br /><br />
		This component uses
		<a href="https://day.js.org/" target="_blank">dayjs</a> for internal calculations.
		The date prop works with either native Date objects or dayjs instances, but the
		selected time is always returned as a native JavaScript Date object.
	</svelte:fragment>

	<svelte:fragment slot="example">
		<TimePicker
			{date}
			{placeholder}
			{format}
			{clearable}
			{disabled}
			{style}
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
		<Event name="select">
			Emitted whenever the user selects or clears a time. The currently selected
			time will be passed as an argument, or undefined if there is no time
			selected.
		</Event>
	</svelte:fragment>

	<svelte:fragment slot="styling">
		<Styling
			component="timePicker"
			sections={['trigger', 'container', 'topbar', 'face', 'actions']}
			bind:style />
	</svelte:fragment>
</Page>
