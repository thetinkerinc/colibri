<script>
export let checked = false;

import { createEventDispatcher } from 'svelte';

const dispatch = createEventDispatcher();

function handleClick() {
	checked = !checked;
	dispatch('click', checked);
}
</script>

<div
	class="relative h-[30px] w-[56px]
           cursor-pointer rounded-full p-[2px] transition-all
           {!checked && 'bg-gray-300'}
           {checked && 'bg-blue-500'}"
	on:click={handleClick}
	on:keyup={handleClick}>
	<div
		class="h-[26px] w-[26px] rounded-full bg-white transition-all
               {!checked && 'translate-x-[26px]'}
               {checked && 'translate-x-0'}" />
</div>
