<script>
import Page from '$layouts/page.svelte';

import Radio from '$components/radio.svelte';
import Prop from '$components/prop.svelte';
import CssVariable from '$components/css-variable.svelte';

import descriptions from './descriptions.js';

import template from './template.svelte?raw';

let group;
let allowMultiple;
let clearable;
let disabled;

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

<Page title="Radio" {template} {data}>
	<svelte:fragment slot="example">
		<div>
			<div>Value: {JSON.stringify(group)}</div>
			<Radio value="first" {allowMultiple} {disabled} {clearable} bind:group
				>{content}</Radio>
			<Radio value="second" {allowMultiple} {disabled} {clearable} bind:group
				>Option 2</Radio>
			<Radio value="third" {allowMultiple} {disabled} {clearable} bind:group
				>Option 3</Radio>
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
		<CssVariable
			variable="--colibri-background-color"
			override="--colibri-checkbox-background-color"
			type="color" />
		<CssVariable
			variable="--colibri-primary-color"
			override="--colibri-checkbox-check-color"
			type="color" />
		<CssVariable
			variable="--colibri-border-radius-sm"
			override="--colibri-checkbox-border-radius"
			value="0.125rem" />
		<CssVariable variable="--colibri-checkbox-size" value="18px" />
		<CssVariable variable="--colibri-checkbox-check-size" value="8px" />
		<CssVariable
			variable="--colibri-border"
			override="--colibri-checkbox-border"
			value="1px solid #d1d5db" />
		<CssVariable
			variable="--colibri-border-radius-sm"
			override="--colibri-checkbox-check-border-radius"
			value="0.125rem" />
	</svelte:fragment>
</Page>
