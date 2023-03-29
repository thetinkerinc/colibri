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
	background: white;
	border: 1px solid #d1d5db;
	border-radius: 0.25rem;
	padding: 0.5rem 1rem;
}
</style>

<div id="accordian">
	<slot />
</div>
