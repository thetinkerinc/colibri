<script>
export let style = undefined;

import { getContext } from 'svelte';
import { slide } from 'svelte/transition';

import theme from '$utils/theme.js';

let { section, allowMultiple } = getContext('accordian');

const id = {};

let open = false;

$: userStyles = theme.makeUserStyles(
	'accordian',
	['item', 'title', 'content'],
	style
);

$: checkShouldOpen($section);
$: handleCloseMultiple($allowMultiple);

function handleClick() {
	if ($allowMultiple) {
		open = !open;
	} else {
		$section = id;
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
</script>

<div
	class="colibri-accordian-item {$userStyles.item.class}"
	style={$userStyles.item.inlines}>
	<div
		class="colibri-accordian-item-title-container {$userStyles.title.class}"
		style={$userStyles.title.inlines}
		on:click={handleClick}
		on:keyup={handleClick}>
		<div class="colibri-accordian-item-title">
			<slot name="title" />
		</div>
		<div class="colibri-chevron colibri-chevron-{open ? 'up' : 'down'}" />
	</div>
	{#if open}
		<div
			class="colibri-accordian-item-content {$userStyles.content.class}"
			style={$userStyles.content.inlines}
			transition:slide>
			<slot />
		</div>
	{/if}
</div>
