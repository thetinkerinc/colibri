<script>
export let style = undefined;

import { onMount, getContext } from 'svelte';
import { slide } from 'svelte/transition';
import { ChevronUp, ChevronDown } from 'lucide-svelte';
import { BROWSER } from 'esm-env';

import theme from '$utils/theme.js';

onMount(()=>{
	$count++;
});

let { section, allowMultiple, count } = getContext('accordian');

let id={};
let num=0;
let total;
let elem;

let open = false;

$: userStyles = theme.makeUserStyles(
	'accordian',
	['item', 'header', 'panel'],
	style
);

$: getPosition($count);
$: checkShouldOpen($section);
$: handleCloseMultiple($allowMultiple);

function getPosition(){
	if (!BROWSER){
		return;
	}
	const elems=Array.from(document.querySelectorAll('[id^="accordian-header"]'));
	num=elems.indexOf(elem)+1;
	total=elems.length;
}

function handleClick() {
	if ($allowMultiple) {
		open = !open;
	} else {
		if ($section!==id){
			$section = id;
		}
		else {
			$section=undefined;
		}
	}
}

function checkShouldOpen() {
	open = !open && $section === id;
}

function handleCloseMultiple() {
	if (!$allowMultiple) {
		open = false;
	}
}

function handleKeydown(evt){
	if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(evt.key)){
		return;
	}
	evt.preventDefault();
	const actions={
		ArrowDown() {
			const toFocus=Math.min(total, num+1);
			document.getElementById(`accordian-header-${toFocus}`).focus();
		},
		ArrowUp(){
			const toFocus=Math.max(1, num-1);
			document.getElementById(`accordian-header-${toFocus}`).focus();
		},
		Home(){
			document.getElementById(`accordian-header-1`).focus();
		},
		End(){
			document.getElementById(`accordian-header-${total}`).focus();
		}
	};
	actions[evt.key]();
}
</script>

<div
	class="colibri-accordian-item {$userStyles.item.class}"
	style={$userStyles.item.inlines}>
	<button id="accordian-header-{num}"
			class="colibri-accordian-item-header-button"
			aria-expanded={open}
			aria-controls="accordian-panel-{num}"
			bind:this={elem}
			on:click={handleClick}
			on:keydown={handleKeydown}>
		<div class="colibri-accordian-item-header-container {$userStyles.header.class}"
					style={$userStyles.header.inlines}>
			<div class="colibri-accordian-item-header">
				<slot name="header" />
			</div>
			{#if open}
				<ChevronUp aria-hidden={true} />
			{:else}
				<ChevronDown aria-hidden={true} />
			{/if}
		</div>
	</button>
	{#if open}
		<div
			id="accordian-panel-{num}"
			class="colibri-accordian-item-panel {$userStyles.panel.class}"
				style={$userStyles.panel.inlines}
			aria-labelledby="accordian-header-{num}"
			transition:slide>
			<slot />
		</div>
	{/if}
</div>
