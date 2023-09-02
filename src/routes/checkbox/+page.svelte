<script>
import Page from '$layouts/page.svelte';

import Checkbox from '$components/checkbox.svelte';
import Prop from '$components/prop.svelte';
import Event from '$components/event.svelte';
import Styling from '$components/styling.svelte';

import descriptions from './descriptions.js';

import template from './template.svelte?raw';

let checked;
let name;
let value;
let disabled;
let style;

let content = 'Checkbox';

$: data = {
	props: {
		checked,
		name,
		value,
		disabled
	},
	slots: {
		default: content
	}
};
</script>

<Page title="Checkbox" canStyle={true} {template} {data}>
	<svelte:fragment slot="description">
		A component for representing a boolean choice.
	</svelte:fragment>

	<svelte:fragment slot="example">
		<div>
			<Checkbox {disabled} {style} bind:checked>
				<div class="text-black">
					{content}
				</div>
			</Checkbox>
			{#if checked}
				<div class="text-black">I am checked</div>
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
			title="name"
			type="string"
			description={descriptions.props.name}
			bind:value={name} />
		<Prop
			title="value"
			description={descriptions.props.value}
			bind:value={checked}>
			Any
		</Prop>
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

	<svelte:fragment slot="events">
		<Event name="change">
			Emitted whenever the checkbox changes value.
		</Event>
	</svelte:fragment>

	<svelte:fragment slot="styling">
		<Styling
			component="checkbox"
			sections={['container', 'body', 'box', 'check', 'label']}
			bind:style />
	</svelte:fragment>
</Page>
