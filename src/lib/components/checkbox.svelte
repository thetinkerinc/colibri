<script>
export let checked = false;
export let disabled = false;
export let element;

import Checkbox from '$components/_checkbox.svelte';
</script>

<Checkbox {disabled} bind:checked bind:element>
	<slot />
</Checkbox>
