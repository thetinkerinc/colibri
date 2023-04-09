<script>
import Button from '$components/button.svelte';
import Modal from '$components/modal.svelte';
import Example from '$components/example.svelte';
import Value from '$components/value.svelte';
import CssVariable from '$components/css-variable.svelte';

import Props from './props.svelte';
import Slots from './slots.svelte';

import basic from './basic.svelte?raw';

let basicOpen;
</script>

<svelte:head>
	<title>Modal</title>
</svelte:head>
<div class="mb-1 text-3xl">Modal</div>

<div class="text-lg">
	A modal component to display arbitrary rich content in a dismissable window.
	Modals are only rendered when <span class="code">open</span> is
	<span class="code text-sky-500">true</span>, and are placed in a
	<a href="/portal">portal</a>
	at the end of
	<span class="code">{'<body>'}</span>. This means that they are rendered
	outside of the DOM area of the containing component, but they still respect
	the container's lifecycle. This ensures that any styling applied to the
	container does not inadvertantly affect the modal or its contents.
</div>

<div id="basic" class="mt-4 text-2xl">Basic usage</div>
<Example code={basic}>
	<Button on:click={() => (basicOpen = true)}>Open modal</Button>
	<Modal bind:open={basicOpen} slim={true}>
		<svelte:fragment slot="title">Hello there</svelte:fragment>
		<div class="text-center">
			<div class="text-lg">Just a nice modal component</div>
			<div class="text-gray-500">You can put whatever you want in here</div>
		</div>
		<svelte:fragment slot="actions">
			<Button on:click={() => alert('Like other components')}>See more</Button>
		</svelte:fragment>
	</Modal>
</Example>

<div id="props" class="mt-4 text-2xl">Props</div>
<div class="ml-4">
	<Props />
</div>

<div id="slots" class="mt-4 text-2xl">Slots</div>
<div class="ml-4 flex flex-col gap-4">
	<Slots />
</div>

<div id="events" class="mt-4 text-2xl">Events</div>
<div class="ml-4">
	<Value title="close">
		Emitted whenever the modal is closed. This can be when the user clicks
		outside the content area, or the close button, or if <span
			class="code text-black">open</span>
		is set to
		<span class="code text-sky-500">false</span> from outside.
	</Value>
</div>

<div id="styling" class="mt-4 text-2xl">Styling</div>
<CssVariable type="color" variable="--colibri-modal-overlay-color" />
<CssVariable variable="--colibri-modal-margin-top" value="2.5rem" />
<CssVariable variable="--colibri-modal-margin-top-large-screens" value="5rem" />
<CssVariable
	variable="--colibri-border-radius-lg"
	override="--colibri-modal-border-radius"
	value="0.5rem" />
<CssVariable
	type="color"
	variable="--colibri-background-color"
	override="--colibri-modal-background-color" />
<CssVariable variable="--colibri-modal-padding" value="0 0.75rem 1rem" />
<CssVariable
	variable="--colibri-shadow"
	override="--colibri-modal-shadow"
	value="0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);" />
<CssVariable variable="--colibri-modal-width" value="80%" />
<CssVariable variable="--colibri-modal-max-width" value="800px" />
<CssVariable variable="--colibri-modal-width-slim" value="500px" />
<CssVariable variable="--colibri-modal-max-width-slim" value="90%" />
<CssVariable variable="--colibri-modal-max-width-fit" value="90%" />
<CssVariable
	variable="--colibri-font-size-lg"
	override="--colibri-modal-font-size-title"
	value="1.125rem" />
