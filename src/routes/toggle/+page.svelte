<script>
import Page from '$layouts/page.svelte';

import Toggle from '$components/toggle.svelte';
import Prop from '$components/prop.svelte';
import Event from '$components/event.svelte';
import CssVariable from '$components/css-variable.svelte';

import descriptions from './descriptions.js';

import template from './template.svelte?raw';

let checked;
let disabled;

$: data = {
	props: {
		checked,
		disabled
	}
};
</script>

<Page title="Toggle" {template} {data}>
	<svelte:fragment slot="example">
		<Toggle {disabled} bind:checked />
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

	<svelte:fragment slot="events">
		<Event name="change">
			Fired whenever the value of <span class="code text-black">checked</span>
			changes. The current value of <span class="code text-black">checked</span>
			will be passed as an argument.
		</Event>
	</svelte:fragment>

	<svelte:fragment slot="styling">
		<CssVariable
			variable="--colibri-neutral-color"
			override="--colibri-toggle-background-color-unchecked"
			type="color" />
		<CssVariable
			variable="--colibri-primary-color"
			override="--colibri-toggle-background-color-checked"
			type="color" />
		<CssVariable
			variable="--colibri-background-color"
			override="--colibri-toggle-knob-color"
			type="color" />
		<CssVariable variable="--colibri-toggle-size" value="30px" />
		<CssVariable variable="--colibri-control-disabled-opacity" value="0.6" />
		<CssVariable
			variable="--colibri-control-disabled-filter"
			value="grayscale(20%)" />
	</svelte:fragment>
</Page>
