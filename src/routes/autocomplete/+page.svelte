<script>
import Page from '$layouts/page.svelte';

import Autocomplete from '$components/autocomplete.svelte';
import Prop from '$components/prop.svelte';
import Styling from '$components/styling.svelte';

import descriptions from './descriptions.js';

import template from './template.svelte?raw';

let placeholder = 'Search books';
let autofocus;
let pageSize;
let delay;
let clearable;
let style;

let empty;

$: data = {
	props: {
		placeholder,
		autofocus,
		pageSize,
		delay,
		clearable
	},
	slots: {
		empty
	}
};

async function getOptions(search) {
	const resp = await fetch(
		`https://gutendex.com/books?search=${encodeURIComponent(search)}`
	);
	const json = await resp.json();
	return json.results;
}

function getDisplay(item) {
	if (item.title.length > 50) {
		return item.title.slice(0, 50) + '...';
	}
	return item.title;
}
</script>

<Page title="Autocomplete" canStyle={true} {template} {data}>
	<svelte:fragment slot="description">
		Autocomplete allows you to have a text field input which can use the entered
		string to search for potential completion options. The search function can
		make an API request, filter local data, generate options on the fly, or
		anything that returns a list of results.
	</svelte:fragment>

	<svelte:fragment slot="example">
		<div class="w-full self-start">
			<Autocomplete
				{getOptions}
				{getDisplay}
				{pageSize}
				{delay}
				{placeholder}
				{autofocus}
				{clearable}
				{style} />
		</div>
	</svelte:fragment>

	<svelte:fragment slot="props">
		<Prop title="value" description={descriptions.props.value}>any</Prop>
		<Prop title="getOptions" description={descriptions.props.getOptions}>
			function
		</Prop>
		<Prop title="getDisplay" description={descriptions.props.getDisplay}>
			function
		</Prop>
		<Prop title="getOption" description={descriptions.props.getOption}>
			function
		</Prop>
		<Prop title="component" description={descriptions.props.component}>
			svelte component
		</Prop>
		<Prop
			title="placeholder"
			type="string"
			description={descriptions.props.placeholder}
			bind:value={placeholder} />
		<Prop
			title="autofocus"
			type="boolean"
			description={descriptions.props.autofocus}
			bind:value={autofocus} />
		<Prop
			title="pageSize"
			type="number"
			description={descriptions.props.pageSize}
			bind:value={pageSize} />
		<Prop
			title="delay"
			type="number"
			description={descriptions.props.delay}
			bind:value={delay} />
		<Prop
			title="clearable"
			type="boolean"
			description={descriptions.props.clearable}
			bind:value={clearable} />
	</svelte:fragment>

	<svelte:fragment slot="slots">
		<Prop
			title="empty"
			type="string"
			description={descriptions.slots.empty}
			bind:value={empty} />
	</svelte:fragment>

	<svelte:fragment slot="styling">
		<Styling
			component="autocomplete"
			sections={['container', 'input', 'completions', 'item']}
			bind:style />
	</svelte:fragment>
</Page>
