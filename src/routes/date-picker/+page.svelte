<script>
import Page from '$layouts/page.svelte';

import DatePicker from '$components/date-picker.svelte';
import Prop from '$components/prop.svelte';
import Event from '$components/event.svelte';
import Styling from '$components/styling.svelte';

import descriptions from './descriptions.js';

import template from './template.svelte?raw';

let placeholder;
let start;
let end;
let format;
let highlighted;
let clearable;
let disabled;
let style;

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

<Page title="DatePicker" canStyle={true} {template} {data}>
	<svelte:fragment slot="description">
		An input component to let users select a date. You can limit the allowed
		dates, as well as display the selected date in any format you'd like.
		<br />
		<br />
		This component uses
		<a href="https://day.js.org/" target="_blank">dayjs</a>
		for internal calculations. All props work with either native Date objects or
		dayjs instances, but the selected date is always returned as a native JavaScript
		Date object.
	</svelte:fragment>

	<svelte:fragment slot="example">
		<DatePicker
			{placeholder}
			{start}
			{end}
			{format}
			{highlighted}
			{clearable}
			{disabled}
			{style} />
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
		<Event name="select">
			Emitted whenever the user selects or clears a date. The currently selected
			date will be passed as an argument, or undefined if there is no date
			selected.
		</Event>
	</svelte:fragment>

	<svelte:fragment slot="styling">
		<Styling
			component="datePicker"
			sections={['trigger', 'container', 'topbar', 'days', 'months', 'actions']}
			bind:style />
	</svelte:fragment>
</Page>
