<script>
export let code;

import Highlighter from '$components/highlighter.svelte';
</script>

<div class="grid grid-cols-2 rounded-lg overflow-hidden shadow-lg">
	<div>
		<Highlighter class="h-full" {code} />
	</div>
	<div class="border border-[#282c36] rounded-tr-lg rounded-br-lg p-3 bg-slate-50">
		<slot />
	</div>
</div>
