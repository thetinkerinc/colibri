<script>
export let type = undefined;
export let variable;
export let override = undefined;
export let value = undefined;
</script>

<div class="flex items-center gap-2">
	<div class="code text-rose-500">{variable}</div>
	{#if override}
		<div>/</div>
		<div class="code text-rose-500">{override}</div>
	{/if}
	{#if type === 'color'}
		<div class="w-6 h-6 rounded-full border border-black" style="background: var({variable})" />
	{:else}
		<div>{value}</div>
	{/if}
</div>
