<script context="module">
import AccordianItem from '$components/_accordian-item.svelte';

export { AccordianItem };
</script>

<script>
export let multiple = false;
export let element;
export let style = undefined;

import { setContext } from 'svelte';
import { writable } from 'svelte/store';

import theme from '$utils/theme.js';

let section = writable();
let count = writable(0);
let allowMultiple = writable(multiple);

$: userStyles = theme.makeUserStyles('accordian', ['container'], style);

$: allowMultiple.set(multiple);

setContext('accordian', {
	section,
	count,
	allowMultiple
});
</script>

<div
	class="colibri-accordian-container {$userStyles.container.class}"
	style={$userStyles.container.inlines}
	bind:this={element}>
	<slot />
</div>
