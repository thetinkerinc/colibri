<script context="module">
import AccordianItem from '$components/_accordian-item.svelte';

export { AccordianItem };
</script>

<script>
export let multiple = false;

import { setContext } from 'svelte';
import { writable } from 'svelte/store';

let section = writable();

setContext('accordian', {
	section,
	multiple
});
</script>

<style>
#accordian {
	background: var(--colibri-accordian-background-color, var(--colibri-background-color));
	border: var(--colibri-accordian-border, var(--colibri-border));
	border-radius: var(--colibri-accordian-border-radius, var(--colibri-border-radius));
	padding: var(--colibri-accordian-padding);
}
</style>

<div id="accordian">
	<slot />
</div>
