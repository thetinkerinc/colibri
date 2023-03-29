<script>
import { getContext } from 'svelte';
import { slide } from 'svelte/transition';

let { section, multiple } = getContext('accordian');

const id = {};

let open = false;

$: checkShouldOpen($section);

function handleClick() {
	if (multiple) {
		open = !open;
	} else {
		$section = id;
	}
}

function checkShouldOpen() {
	open = !open && $section === id;
}
</script>

<style>
#item:not(:last-child) {
	margin-bottom: 0.3rem;
}
#title-container {
	cursor: default;
	display: flex;
	align-items: center;
}
#title {
	flex: auto;
	font-size: 1.125rem;
}
#content {
	margin-bottom: 0.3rem;
}
</style>

<div id="item">
	<div id="title-container" on:click={handleClick} on:keyup={handleClick}>
		<div id="title">
			<slot name="title" />
		</div>
		<div class="colibri-chevron colibri-chevron-{open ? 'up' : 'down'}" />
	</div>
	{#if open}
		<div id="content" transition:slide>
			<slot />
		</div>
	{/if}
</div>
