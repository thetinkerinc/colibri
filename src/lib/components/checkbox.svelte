<script>
export let checked = false;
export let disabled = false;
export let element;
export let style;

import Checkbox from '$components/_checkbox.svelte';
</script>

<Checkbox {disabled} {style} bind:checked bind:element>
	<slot />
</Checkbox>
