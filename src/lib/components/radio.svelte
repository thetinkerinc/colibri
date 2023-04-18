<script>
export let value;
export let group;
export let allowMultiple;
export let clearable;
export let disabled;
export let element;

import Checkbox from '$components/_checkbox.svelte';
</script>

<Checkbox
	{value}
	{allowMultiple}
	{clearable}
	{disabled}
	bind:group
	bind:element>
	<slot />
</Checkbox>
