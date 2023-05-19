<script>
import Page from '$layouts/page.svelte';

import Radio from '$components/radio.svelte';
import Prop from '$components/prop.svelte';
import Styling from '$components/styling.svelte';

import descriptions from './descriptions.js';

import template from './template.svelte?raw';

let group;
let allowMultiple;
let clearable;
let disabled;
let style;

let content = 'Option 1';

$: handleAllowMultiple(allowMultiple);
$: handleClearable(clearable);
$: data = {
	props: {
		group,
		allowMultiple,
		clearable,
		disabled
	},
	slots: {
		default: content
	}
};

function handleAllowMultiple() {
	if (allowMultiple) {
		clearable = false;
	}
}

function handleClearable() {
	if (clearable) {
		allowMultiple = false;
	}
}
</script>

<Page title="Radio" canStyle={true} {template} {data}>
	<svelte:fragment slot="example">
		<div>
			<div>Value: {JSON.stringify(group)}</div>
			<Radio
				value="first"
				{allowMultiple}
				{disabled}
				{clearable}
				{style}
				bind:group>
				{content}
			</Radio>
			<Radio
				value="second"
				{allowMultiple}
				{disabled}
				{clearable}
				{style}
				bind:group>
				Option 2
			</Radio>
			<Radio
				value="third"
				{allowMultiple}
				{disabled}
				{clearable}
				{style}
				bind:group>
				Option 3
			</Radio>
		</div>
	</svelte:fragment>

	<svelte:fragment slot="props">
		<Prop title="value" description={descriptions.props.value}>any</Prop>
		<Prop title="group" description={descriptions.props.group}>any</Prop>
		<Prop
			title="allowMultiple"
			type="boolean"
			description={descriptions.props.allowMultiple}
			bind:value={allowMultiple} />
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

	<svelte:fragment slot="slots">
		<Prop
			title="default"
			type="string"
			description={descriptions.slots.default}
			bind:value={content} />
	</svelte:fragment>

	<svelte:fragment slot="styling">
		<Styling
			component="checkbox"
			sections={['container', 'body', 'box', 'check']}
			bind:style />
	</svelte:fragment>
</Page>
