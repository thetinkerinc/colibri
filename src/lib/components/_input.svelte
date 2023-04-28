<script>
export let value = undefined;
export let type;
export let name = undefined;
export let placeholder = '';
export let integer = false;
export let min = undefined;
export let max = undefined;
export let autofocus = false;
export let disabled = false;
export let element;

import { onMount, createEventDispatcher } from 'svelte';

import utils from '$utils/general.js';

onMount(() => {
	if (autofocus) {
		elem.focus();
	}
});

const dispatch = createEventDispatcher();
const KEY_ENTER = 13;

let elem;
let numStr = value?.toString();

$: hasNumberOptions = !utils.nil(integer) || !utils.nil(min) || !utils.nil(max);
$: handleTypeChange(type);
$: cleanNumberInput(type, numStr, integer, min, max);

function handleKeyUp(evt) {
	if (evt.keyCode === KEY_ENTER) {
		dispatch('enter');
	} else {
		dispatch('change', value);
	}
}

function handleTypeChange() {
	if (type === 'number') {
		numStr = value?.toString();
	} else {
		value = value?.toString();
	}
}

function cleanNumberInput() {
	if (type !== 'number') {
		return;
	}
	if (!numStr) {
		value = undefined;
		return;
	}
	const re = /.*?(-?[0-9]*(?:\.[0-9]*)?).*?/gm;
	const match = numStr.match(re).filter(Boolean)[0];
	let parsedNum = parseFloat(formatNumberString(match));
	if (Number.isNaN(parsedNum)) {
		numStr = '';
		value = undefined;
		return;
	}
	if (hasNumberOptions) {
		let updatedNum = parsedNum;
		if (integer) {
			updatedNum = Math.floor(updatedNum);
		}
		if (!utils.nil(min)) {
			updatedNum = Math.max(updatedNum, min);
		}
		if (!utils.nil(max)) {
			updatedNum = Math.min(updatedNum, max);
		}
		if (updatedNum !== parsedNum) {
			numStr = updatedNum.toString();
		} else {
			numStr = match;
		}
		parsedNum = updatedNum;
	} else {
		numStr = match;
	}
	value = parsedNum;
}

function formatNumberString(s) {
	const formats = {
		'.': '0.',
		'-': '-0',
		'-.': '-0.'
	};
	return formats[s] ?? s;
}
</script>

<div id="container">
	<div
		id="input-container"
		class:disabled
		bind:this={element}
		on:click={() => elem.focus()}
		on:keyup={() => elem.focus()}>
		<div class="decoration">
			<slot name="before" />
		</div>
		{#if type === 'text'}
			<input
				type="text"
				{name}
				autocomplete="off"
				autocorrect="off"
				autocapitalize="off"
				spellcheck="false"
				{placeholder}
				{disabled}
				on:focus
				on:blur
				on:keyup={handleKeyUp}
				bind:this={elem}
				bind:value />
		{:else if type === 'email'}
			<input
				type="email"
				{name}
				inputmode="email"
				{placeholder}
				{disabled}
				on:focus
				on:blur
				on:keyup={handleKeyUp}
				bind:this={elem}
				bind:value />
		{:else if type === 'password'}
			<input
				type="password"
				{name}
				{placeholder}
				{disabled}
				on:focus
				on:blur
				on:keyup={handleKeyUp}
				bind:this={elem}
				bind:value />
		{:else if type === 'color'}
			<input
				type="text"
				{name}
				autocomplete="off"
				autocorrect="off"
				autocapitalize="off"
				spellcheck="false"
				{placeholder}
				{disabled}
				on:focus
				on:blur
				on:keyup={handleKeyUp}
				bind:this={elem}
				bind:value />
		{:else if type === 'number'}
			<!--
                 NOTE: type="text" is necessary because both Firefox and Safari
                 handle type="number" poorly. They return null for an invalid
                 input but let the user type anything
            -->
			<input
				type="text"
				{name}
				inputmode="decimal"
				step={integer ? '1' : 'any'}
				min={min ?? 'any'}
				max={max ?? 'any'}
				{placeholder}
				{disabled}
				on:focus
				on:blur
				on:keyup={handleKeyUp}
				bind:this={elem}
				bind:value={numStr} />
		{/if}
		<div class="decoration">
			<slot name="after" />
		</div>
	</div>
	{#if type === 'color'}
		<div>
			<div id="color" style="background: {value}" />
		</div>
	{/if}
</div>

<style>
#color {
	height: 1.5rem;
	width: 1.5rem;
	border-radius: 999px;
	border: 1px solid black;
}
#container {
	display: flex;
	align-items: center;
	gap: 0.5rem;
	width: 100%;
}
#input-container {
	display: grid;
	grid-template-columns: auto 1fr auto;
	gap: 0.5rem;
	width: 100%;
	border-radius: var(
		--colibri-input-border-radius,
		var(--colibri-border-radius)
	);
	border: var(--colibri-input-border, var(--colibri-border));
	background: var(--colibri-input-background, var(--colibri-background-color));
	padding: var(--colibri-input-padding);
}
#input-container.disabled {
	background: var(--colibri-control-disabled-background);
	opacity: var(--colibri-control-disabled-opacity);
	filter: var(--colibri-control-disabled-filter);
	cursor: not-allowed;
}
.decoration {
	place-self: center;
}
input {
	width: 100%;
	outline: none;
	background: transparent;
}
input:disabled {
	cursor: not-allowed;
}
</style>
