<script>
export let code;

import Highlighter from '$components/highlighter.svelte';
</script>

<div class="grid grid-cols-2 overflow-hidden rounded-lg shadow-lg">
	<div>
		<Highlighter class="h-full" {code} />
	</div>
	<div class="rounded-tr-lg rounded-br-lg border border-[#282c36] bg-slate-50 p-3">
		<slot />
	</div>
</div>
