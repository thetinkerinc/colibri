<script>
import Button from '$components/button.svelte';
import Example from '$components/example.svelte';
import CssVariable from '$components/css-variable.svelte';

import Props from './props.svelte';

import basic from './basic.svelte?raw';
</script>

<svelte:head>
	<title>Button</title>
</svelte:head>

<div class="text-3xl mb-1">Button</div>

<div class="text-lg">
	A flexible button component suitable for various common tasks. It can act as a standard button
	which emits a click event, as a link to another page, as a trigger for an async action, and has
	the ability to confirm with the user before performing an action.
</div>

<div class="text-2xl mt-4">Basic usage</div>
<Example code={basic}>
	<Button on:click={() => console.log('button clicked')}>Click me</Button>
</Example>

<div class="text-2xl mt-4">Props</div>
<div class="ml-4">
	<Props />
</div>

<div class="text-2xl mt-4">Events</div>
<div class="ml-4 text-lg">
	<div class="font-medium text-xl">click</div>
	<div class="text-gray-800 ml-6 mb-4">
		emitted when a user clicks an active button. A button is considered active if it is not loading
		or disabled.
		<br />
		Buttons with the <span class="code">href</span> property set will not emit click events.
		<br />
		Buttons with the <span class="code">confirm</span>
		property set will only emit the click event if the user confirms the action, otherwise no event will
		be emitted.
	</div>
	<div class="font-medium text-xl">disabledClick</div>
	<div class="text-gray-800 ml-6 mb-4">
		emitted when a user clicks a button that has <span class="code">disabled</span>
		set to <span class="code text-sky-500">true</span>.
		<br />
		Buttons with the <span class="code">href</span> property or with
		<span class="code">loading</span>
		set to
		<span class="code text-sky-500">true</span>
		will not emit disabledClick events.
	</div>
</div>

<div class="text-2xl mt-4">Styling</div>
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
