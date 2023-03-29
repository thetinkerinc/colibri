<script>
import Button from '$components/button.svelte';
import Example from '$components/example.svelte';
import Value from '$components/value.svelte';
import CssVariable from '$components/css-variable.svelte';

import Props from './props.svelte';

import basic from './basic.svelte?raw';
import confirmSlot from './confirm-slot.svelte?raw';
</script>

<svelte:head>
	<title>Button</title>
</svelte:head>
<div class="mb-1 text-3xl">Button</div>

<div class="text-lg">
	A flexible button component suitable for various common tasks. It can act as a standard button
	which emits a click event, as a link to another page, as a trigger for an async action, and has
	the ability to confirm with the user before performing an action.
</div>

<div id="basic" class="mt-4 text-2xl">Basic usage</div>
<Example code={basic}>
	<Button on:click={() => console.log('button clicked')}>Click me</Button>
</Example>

<div id="props" class="mt-4 text-2xl">Props</div>
<div class="ml-4">
	<Props />
</div>

<div id="slots" class="mt-4 text-2xl">Slots</div>
<div class="ml-4 flex flex-col gap-4">
	<Value title="default" code="<Button>Button content</Button>">
		The content to be placed in the button. Can be anything, and generally will just be simple text.
		<svelte:fragment slot="example">
			<Button>Button content</Button>
		</svelte:fragment>
	</Value>

	<Value title="confirm" code={confirmSlot}>
		If provided, the button will open a modal when clicked which will prompt the user to confirm the
		action. The content provided in the slot will appear in the modal. The click event won't be
		emitted until the user confirms the action, and won't be emitted at all if they cancel the
		action or close the modal.
		<svelte:fragment slot="example">
			<Button>
				Check first
				<svelte:fragment slot="confirm">Are you sure?</svelte:fragment>
			</Button>
		</svelte:fragment>
	</Value>
</div>

<div id="events" class="mt-4 text-2xl">Events</div>
<div class="ml-4 flex flex-col gap-4">
	<Value title="click">
		Emitted when a user clicks an active button. A button is considered active if it is not loading
		or disabled.
		<br />
		Buttons with the <span class="code text-black">href</span> property set will not emit click
		events.
		<br />
		Buttons with the <span class="code text-black">confirm</span>
		property set will only emit the click event if the user confirms the action, otherwise no event will
		be emitted.
	</Value>

	<Value title="disabledClick">
		Emitted when a user clicks a button that has <span class="code text-black">disabled</span>
		set to <span class="code text-sky-500">true</span>.
		<br />
		Buttons with the <span class="code text-black">href</span> property or with
		<span class="code text-black">loading</span>
		set to
		<span class="code text-sky-500">true</span>
		will not emit disabledClick events.
	</Value>
</div>

<div id="styling" class="mt-4 text-2xl">Styling</div>
<div class="mt-2 ml-6">
	<CssVariable
		type="color"
		variable="--colibri-primary-color"
		override="--colibri-button-primary-color" />
	<CssVariable
		type="color"
		variable="--colibri-primary-color-light"
		override="--colibri-button-primary-color-light" />
	<CssVariable
		type="color"
		variable="--colibri-primary-color-dark"
		override="--colibri-button-primary-color-dark" />
	<CssVariable
		type="color"
		variable="--colibri-secondary-color"
		override="--colibri-button-secondary-color" />
	<CssVariable
		type="color"
		variable="--colibri-secondary-color-light"
		override="--colibri-button-secondary-color-light" />
	<CssVariable
		type="color"
		variable="--colibri-secondary-color-dark"
		override="--colibri-button-secondary-color-dark" />
	<CssVariable type="color" variable="--colibri-button-primary-font-color" />
	<CssVariable type="color" variable="--colibri-button-secondary-font-color" />
	<CssVariable
		variable="--colibri-border-radius"
		override="--colibri-button-border-radius"
		value="0.25rem" />
	<CssVariable variable="--colibri-vertical-padding" value="0.5rem" />
	<CssVariable variable="--colibri-horizontal-padding" value="1rem" />
	<CssVariable variable="--colibri-disabled-opacity" value="0.6" />
	<CssVariable variable="--colibri-disabled-filter" value="grayscale(20%)" />
</div>
