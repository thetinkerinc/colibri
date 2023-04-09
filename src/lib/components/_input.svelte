<script>
export let value = undefined;
export let type;
export let min = undefined;
export let max = undefined;
export let integer = false;
export let label = '';
export let hint = '';
export let required = false;
export let disabled = false;
export let disabledHint = '';
export let autofocus = false;

import { onMount, createEventDispatcher } from 'svelte';

import utils from '$utils/general.js';

onMount(() => {
	if (autofocus) {
		elem.focus();
	}
});

const dispatch = createEventDispatcher();
const KEY_ENTER = 13;

let focused = false;
let elem;
let numStr = value?.toString();

$: hasOptions = !utils.nil(integer) || !utils.nil(min) || !utils.nil(max);
$: cleanNumberInput(numStr);
$: empty = !hasValue(value);
$: active = focused || !empty;
$: handleFocus(focused);

function handleKeyUp(evt) {
	if (evt.keyCode === KEY_ENTER) {
		dispatch('enter');
	} else {
		dispatch('change');
	}
}

function hasValue() {
	if (type === 'number') {
		return value != undefined;
	}
	return !!value;
}

function handleFocus() {
	if (focused) {
		dispatch('focus');
	} else {
		dispatch('blur');
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
	if (hasOptions) {
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

<div
	class="relative grid grid-cols-[auto_1fr_auto] rounded
            border border-gray-200 bg-white px-2
            {label && 'pt-5 pb-1'}
            {!label && 'py-1'}"
	on:click={() => elem.focus()}
	on:keyup={() => elem.focus()}>
	<div class="mr-2 -translate-y-2 place-self-center">
		<slot name="before" />
	</div>
	<label
		for={label}
		class="cell-2 absolute text-gray-400 transition-all
               {hint && empty && 'text-black'}
               {!active && '-translate-y-2'}
               {(active || hint) &&
			'-translate-x-[5%] -translate-y-5 scale-90'}">
		{label}
		{#if required}
			<span class="text-red-500">*</span>
		{/if}
	</label>
	{#if type === 'text'}
		<input
			type="text"
			name={label}
			autocomplete="off"
			autocorrect="off"
			autocapitalize="off"
			spellcheck="false"
			placeholder={hint}
			{disabled}
			class="cell-2 w-full outline-none"
			on:focus={() => (focused = true)}
			on:blur={() => (focused = false)}
			on:keyup={handleKeyUp}
			bind:this={elem}
			bind:value />
	{:else if type === 'email'}
		<input
			type="email"
			name={label}
			inputmode="email"
			placeholder={hint}
			{disabled}
			title={disabledHint}
			class="cell-2 w-full outline-none"
			on:focus={() => (focused = true)}
			on:blur={() => (focused = false)}
			on:keyup={handleKeyUp}
			bind:this={elem}
			bind:value />
	{:else if type === 'number'}
		<!--
             NOTE: type="text" is necessary because both Firefox and Safari
             handle type="number" poorly, they'd return null for an invalid
             input but let the user type anything
        -->
		<input
			type="text"
			name={label}
			inputmode="decimal"
			step={integer ? '1' : 'any'}
			min={min ?? 'any'}
			max={max ?? 'any'}
			placeholder={hint}
			{disabled}
			class="cell-2 w-full outline-none"
			on:focus={() => (focused = true)}
			on:blur={() => (focused = false)}
			on:keyup={handleKeyUp}
			bind:this={elem}
			bind:value={numStr} />
	{:else if type === 'password'}
		<input
			type="password"
			name={label}
			placeholder={hint}
			{disabled}
			class="cell-2 w-full outline-none"
			on:focus={() => (focused = true)}
			on:blur={() => (focused = false)}
			on:keyup={handleKeyUp}
			bind:this={elem}
			bind:value />
	{/if}
	<div class="mr-1 -translate-y-2 place-self-center">
		<slot name="after" />
	</div>
</div>
