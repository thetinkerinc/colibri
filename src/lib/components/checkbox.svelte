<script>
export let checked = false;
export let disabled = false;

import Checkbox from '$components/_checkbox.svelte';
</script>

<Checkbox {disabled} bind:checked>
	<slot />
</Checkbox>
