<script>
import Button from '$components/button.svelte';
import Example from '$components/example.svelte';
import Prop from '$components/prop.svelte';

import descriptions from './descriptions.js';

import template from './template.svelte?raw';

let type;
let disabled;
let loading;
let rounded;
let href;
let external;

let content = 'Click me';
let confirm;

$: data = {
	props: {
		type,
		disabled,
		loading,
		rounded,
		href,
		external
	},
	slots: {
		default: content,
		confirm
	}
};

function handleClick() {
	alert('clicked');
}
</script>

<svelte:head>
	<title>Button</title>
</svelte:head>
<div class="text-3xl">Button</div>
<div class="my-2 text-lg">
	A flexible button component suitable for various common tasks. It can act as a
	standard button which emits a click event, as a link to another page, as a
	trigger for an async action, and has the ability to confirm with the user
	before performing an action.
</div>

<Example {template} {data}>
	{#if confirm}
		<Button
			{type}
			{disabled}
			{loading}
			{rounded}
			{href}
			{external}
			on:click={handleClick}>
			{content}
			<svelte:fragment slot="confirm">{confirm}</svelte:fragment>
		</Button>
	{:else}
		<Button
			{type}
			{disabled}
			{loading}
			{rounded}
			{href}
			{external}
			on:click={handleClick}>
			{content}
		</Button>
	{/if}
</Example>

<div class="mt-4 rounded-lg border border-gray-300 py-2 px-4">
	<div class="text-xl">Props</div>
	<div class="ml-4">
		<Prop
			title="type"
			type="string"
			description={descriptions.props.type}
			values={['primary', 'secondary']}
			bind:value={type} />
		<Prop
			title="disabled"
			type="boolean"
			description={descriptions.props.disabled}
			bind:value={disabled} />
		<Prop
			title="loading"
			type="boolean"
			description={descriptions.props.loading}
			bind:value={loading} />
		<Prop
			title="rounded"
			type="boolean"
			description={descriptions.props.rounded}
			bind:value={rounded} />
		<Prop
			title="href"
			type="string"
			description={descriptions.props.href}
			bind:value={href} />
		<Prop
			title="external"
			type="boolean"
			description={descriptions.props.external}
			bind:value={external} />
	</div>
	<div class="mt-4 text-xl">Slots</div>
	<div class="ml-4">
		<Prop
			title="default"
			type="string"
			description={descriptions.slots.default}
			bind:value={content} />
		<Prop
			title="confirm"
			type="string"
			description={descriptions.slots.confirm}
			bind:value={confirm} />
	</div>
</div>
