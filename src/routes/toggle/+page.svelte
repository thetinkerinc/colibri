<script>
import Page from '$layouts/page.svelte';

import Toggle from '$components/toggle.svelte';
import Prop from '$components/prop.svelte';
import Event from '$components/event.svelte';
import Styling from '$components/styling.svelte';

import descriptions from './descriptions.js';

import template from './template.svelte?raw';

let checked;
let disabled;
let style;

$: data = {
	props: {
		checked,
		disabled
	}
};
</script>

<Page title="Toggle" {template} {data}>
	<svelte:fragment slot="example">
		<Toggle {disabled} {style} bind:checked />
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
		<Styling component="toggle" sections={['body', 'switch']} bind:style />
	</svelte:fragment>
</Page>
