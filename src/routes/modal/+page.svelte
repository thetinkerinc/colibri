<script>
import Page from '$layouts/page.svelte';

import Button from '$components/button.svelte';
import Modal from '$components/modal.svelte';
import Prop from '$components/prop.svelte';
import Event from '$components/event.svelte';
import Styling from '$components/styling.svelte';

import descriptions from './descriptions.js';
import examples from './examples.js';

import template from './template.svelte?raw';

let open;
let slim;
let fit;
let style;

let content = 'Hello there!';
let title;
let actions;
let close;

$: handleSlim(slim);
$: handleFit(fit);

$: data = {
	props: {
		open,
		slim,
		fit
	},
	slots: {
		default: content,
		title,
		actions,
		close
	}
};

function handleSlim() {
	if (slim) {
		fit = false;
	}
}

function handleFit() {
	if (fit) {
		slim = false;
	}
}
</script>

<Page title="Modal" {template} {data}>
	<svelte:fragment slot="description">
		A modal component to display arbitrary rich content in a dismissable window.
		Modals are only rendered when <span class="code text-black">open</span> is
		<span class="code text-sky-500">true</span>, and are placed in a
		<a href="/portal">portal</a>
		at the end of
		<span class="code text-black">{'<body>'}</span>. This means that they are
		rendered outside of the DOM area of the containing component, but they still
		respect the container's lifecycle. This ensures that any styling applied to
		the container does not inadvertantly affect the modal or its contents.
	</svelte:fragment>

	<svelte:fragment slot="example">
		<Button on:click={() => (open = true)}>Open modal</Button>
		{#if actions?.count && !close}
			<Modal bind:open {slim} {fit} {style}>
				<svelte:fragment slot="title">
					{#if title}
						{title}
					{/if}
				</svelte:fragment>
				{content}
				<svelte:fragment slot="actions">
					{#each { length: actions.count } as _, i}
						<svelte:component this={actions.component}>
							{actions.content}
							{i + 1}
						</svelte:component>
					{/each}
				</svelte:fragment>
			</Modal>
		{:else if !actions?.count && close}
			<Modal bind:open {slim} {fit} {style}>
				<svelte:fragment slot="title">
					{#if title}
						{title}
					{/if}
				</svelte:fragment>
				<svelte:fragment slot="close">
					{@html close}
				</svelte:fragment>
				{content}
			</Modal>
		{:else if actions?.count && close}
			<Modal bind:open {slim} {fit} {style}>
				<svelte:fragment slot="title">
					{#if title}
						{title}
					{/if}
				</svelte:fragment>
				<svelte:fragment slot="close">
					{@html close}
				</svelte:fragment>
				{content}
				<svelte:fragment slot="actions">
					{#each { length: actions.count } as _, i}
						<svelte:component this={actions.component}>
							{actions.content}
							{i + 1}
						</svelte:component>
					{/each}
				</svelte:fragment>
			</Modal>
		{:else}
			<Modal bind:open {slim} {fit} {style}>
				<svelte:fragment slot="title">
					{#if title}
						{title}
					{/if}
				</svelte:fragment>
				{content}
			</Modal>
		{/if}
	</svelte:fragment>

	<svelte:fragment slot="props">
		<Prop
			title="open"
			type="boolean"
			description={descriptions.props.open}
			bind:value={open} />
		<Prop
			title="slim"
			type="boolean"
			description={descriptions.props.slim}
			bind:value={slim} />
		<Prop
			title="fit"
			type="boolean"
			description={descriptions.props.fit}
			bind:value={fit} />
	</svelte:fragment>

	<svelte:fragment slot="slots">
		<Prop
			title="default"
			type="string"
			description={descriptions.slots.default}
			bind:value={content} />
		<Prop
			title="title"
			type="string"
			description={descriptions.slots.title}
			bind:value={title} />
		<Prop
			title="actions"
			type="component"
			component={Button}
			componentName="Button"
			content="Action"
			description={descriptions.slots.actions}
			bind:value={actions} />
		<Prop
			title="close"
			type="textarea"
			description={descriptions.slots.close}
			example={examples.slots.close}
			bind:value={close} />
	</svelte:fragment>

	<svelte:fragment slot="events">
		<Event name="open">
			Emitted whenever the modal is opened. This can be triggered by a user
			action, or simply by setting
			<span class="code text-black">open</span> to
			<span class="code text-sky-500">true</span>.
		</Event>
		<Event name="close">
			Emitted whenever the modal is closed. This can be when the user clicks
			outside the content area, or the close button, or if
			<span class="code text-black">open</span>
			is set to <span class="code text-sky-500">false</span> from outside.
		</Event>
	</svelte:fragment>

	<svelte:fragment slot="styling">
		<Styling
			component="modal"
			sections={['overlay', 'body', 'title', 'close']}
			bind:style />
	</svelte:fragment>
</Page>
