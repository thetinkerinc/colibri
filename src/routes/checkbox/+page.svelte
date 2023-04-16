<script>
import Page from '$layouts/page.svelte';

import Checkbox from '$components/checkbox.svelte';
import Prop from '$components/prop.svelte';
import CssVariable from '$components/css-variable.svelte';

import descriptions from './descriptions.js';

import template from './template.svelte?raw';

let checked;
let disabled;

let content = 'Checkbox';

$: data = {
	props: {
		checked,
		disabled
	},
	slots: {
		default: content
	}
};
</script>

<Page title="Checkbox" {template} {data}>
	<svelte:fragment slot="description" />

	<svelte:fragment slot="example">
		<div>
			<Checkbox {disabled} bind:checked>{content}</Checkbox>
			{#if checked}
				<div>I am checked</div>
			{/if}
		</div>
	</svelte:fragment>

	<svelte:fragment slot="props">
		<Prop
			title="checked"
			type="boolean"
			description={descriptions.props.checked}
			bind:value={checked} />
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
		<CssVariable
			variable="--colibri-control-disabled-background"
			type="color" />
		<CssVariable variable="--colibri-control-disabled-opacity" value="0.6" />
		<CssVariable
			variable="--colibri-control-disabled-filter"
			value="grayscale(20%)" />
	</svelte:fragment>
</Page>
