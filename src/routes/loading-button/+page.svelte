<script>
import Page from '$layouts/page.svelte';

import LoadingButton from '$components/loading-button.svelte';
import Prop from '$components/prop.svelte';
import Event from '$components/event.svelte';
import Styling from '$components/styling.svelte';

import descriptions from './descriptions.js';

import template from './template.svelte?raw';

let type;
let disabled;
let rounded;
let silent;
let style;

let content = 'Recommend a drink';
let confirm;

let beer;

$: data = {
	props: {
		type,
		disabled,
		rounded,
		silent
	},
	slots: {
		default: content,
		confirm
	}
};

async function handleClick() {
	const resp = await fetch('https://random-data-api.com/api/v2/beers');
	const json = await resp.json();
	beer = json;
}
</script>

<Page title="LoadingButton" canStyle={true} {template} {data}>
	<svelte:fragment slot="description">
		A button that can be used to trigger asynchronus actions. The component
		manages the loading state of the button, and provides options for error
		handling.
	</svelte:fragment>

	<svelte:fragment slot="example">
		<div class="text-center">
			{#if confirm}
				<LoadingButton
					{type}
					{disabled}
					{rounded}
					{silent}
					{style}
					action={handleClick}>
					{content}
					<svelte:fragment slot="confirm">{confirm}</svelte:fragment>
				</LoadingButton>
			{:else}
				<LoadingButton
					{type}
					{disabled}
					{rounded}
					{silent}
					{style}
					action={handleClick}>
					{content}
				</LoadingButton>
			{/if}
			{#if beer}
				<div class="mt-2">
					You should try
					{beer.brand}
					{beer.name}
				</div>
			{/if}
		</div>
	</svelte:fragment>

	<svelte:fragment slot="props">
		<Prop title="action">async function</Prop>
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
			title="rounded"
			type="boolean"
			description={descriptions.props.rounded}
			bind:value={rounded} />
		<Prop
			title="silent"
			type="boolean"
			description={descriptions.props.silent}
			bind:value={silent} />
	</svelte:fragment>

	<svelte:fragment slot="slots">
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
	</svelte:fragment>

	<svelte:fragment slot="events">
		<Event name="error">
			Emitted if <span class="code text-black">silent</span>
			is not set to
			<span class="code text-sky-500">true</span>
			and <span class="code text-black">action</span>
			throws an error.
		</Event>
		<Event name="disabledClick">
			Emitted when a user clicks a button that has
			<span class="code text-black">disabled</span>
			set to
			<span class="code text-sky-500">true</span>.
			<br />
			<br />
			This event will not be emitted while loading.
		</Event>
	</svelte:fragment>

	<svelte:fragment slot="styling">
		<Styling component="loading-button" sections={['button']} bind:style />
	</svelte:fragment>
</Page>
