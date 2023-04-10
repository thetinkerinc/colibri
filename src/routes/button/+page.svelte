<script>
import Page from '$layouts/page.svelte';

import Button from '$components/button.svelte';
import Prop from '$components/prop.svelte';
import Event from '$components/event.svelte';
import CssVariable from '$components/css-variable.svelte';

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

<Page title="Button" {template} {data}>
	<svelte:fragment slot="description">
		A flexible button component suitable for various common tasks. It can act as
		a standard button which emits a click event, as a link to another page, as a
		trigger for an async action, and has the ability to confirm with the user
		before performing an action.
	</svelte:fragment>
	<svelte:fragment slot="example">
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
	</svelte:fragment>
	<svelte:fragment slot="props">
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
		<Event name="click">
			Emitted when a user clicks an active button. A button is considered active
			if it is not loading or disabled.
			<br />
			<br />
			Buttons with the <span class="code text-black">href</span> property set
			will not emit click events.
			<br />
			<br />
			Buttons with the <span class="code text-black">confirm</span>
			property set will only emit the click event if the user confirms the action,
			otherwise no event will be emitted.
		</Event>
		<Event name="disabledClick">
			Emitted when a user clicks a button that has
			<span class="code text-black">disabled</span>
			set to <span class="code text-sky-500">true</span>.
			<br />
			<br />
			Buttons with the <span class="code text-black">href</span> property or
			with
			<span class="code text-black">loading</span>
			set to
			<span class="code text-sky-500">true</span>
			will not emit disabledClick events.
		</Event>
	</svelte:fragment>
	<svelte:fragment slot="styling">
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
		<CssVariable
			type="color"
			variable="--colibri-button-secondary-font-color" />
		<CssVariable
			variable="--colibri-border-radius"
			override="--colibri-button-border-radius"
			value="0.25rem" />
		<CssVariable variable="--colibri-vertical-padding" value="0.5rem" />
		<CssVariable variable="--colibri-horizontal-padding" value="1rem" />
		<CssVariable variable="--colibri-disabled-opacity" value="0.6" />
		<CssVariable variable="--colibri-disabled-filter" value="grayscale(20%)" />
	</svelte:fragment>
</Page>
