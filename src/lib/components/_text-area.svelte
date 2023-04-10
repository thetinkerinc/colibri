<script>
export let value = undefined;
export let label = '';
export let hint = '';
export let required = false;
export let expand = true;

let focused = false;
let elem;

$: rows = expand ? value?.split('\n').length + 1 : undefined;
$: empty = !value;
$: active = focused || !empty;
</script>

<div
	class="relative grid w-full rounded
           border border-gray-200 bg-white px-2 pb-1
           {label && 'pt-5'}"
	on:click={() => elem.focus()}
	on:keyup={() => elem.focus()}>
	<div
		class="cell-1 absolute text-gray-400 transition-all
               {hint && empty && 'text-black'}
               {!active && '-translate-y-2'}
               {(active || hint) &&
			'-translate-x-[5%] -translate-y-5 scale-90'}">
		{label}
		{#if required}
			<span class="text-red-500">*</span>
		{/if}
	</div>
	<textarea
		class="cell-1 min-h-[1.5rem] outline-none"
		on:focus={() => (focused = true)}
		on:blur={() => (focused = false)}
		bind:this={elem}
		bind:value
		{rows} />
</div>
