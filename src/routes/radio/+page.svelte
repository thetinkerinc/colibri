<script>
import Page from '$layouts/page.svelte';

import Radio from '$components/radio.svelte';
import Prop from '$components/prop.svelte';
import Styling from '$components/styling.svelte';

import descriptions from './descriptions.js';

import template from './template.svelte?raw';

let name = 'choice';
let value;
let group;
let disabled;
let style;

let content = 'Option 1';

$: data = {
	props: {
		name,
		value,
		group,
		disabled
	},
	slots: {
		default: content
	}
};
</script>

<Page title="Radio" canStyle={true} {template} {data}>
	<svelte:fragment slot="example">
		<div class="text-black">
			<div>Value: {JSON.stringify(value)}</div>
			<Radio {name} value="first" {disabled} {style} bind:group>
				{content}
			</Radio>
			<Radio {name} value="second" {disabled} {style} bind:group>
				Option 2
			</Radio>
			<Radio {name} value="third" {disabled} {style} bind:group>Option 3</Radio>
		</div>
	</svelte:fragment>

	<svelte:fragment slot="props">
		<Prop
			title="name"
			type="string"
			description={descriptions.props.name}
			bind:value={name} />
		<Prop title="value" description={descriptions.props.value}>any</Prop>
		<Prop title="group" description={descriptions.props.group}>any</Prop>
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
