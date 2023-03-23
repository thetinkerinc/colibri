<script>
export let title;
</script>

<div id={title} class="pl-6 -indent-6">
	<span class="text-xl">{title}</span>
	<span>-</span>
	<span class="text-lg text-gray-500">
		<slot />
	</span>
</div>
