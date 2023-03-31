<script>
export let code;

import Highlighter from '$components/highlighter.svelte';
</script>

<div class="grid max-h-[600px] grid-cols-2 overflow-hidden rounded-lg shadow-lg">
	<div>
		<Highlighter class="h-full max-h-[600px]" language="svelte" {code} />
	</div>
	<div class="rounded-tr-lg rounded-br-lg border border-[#272822] bg-slate-50 p-3">
		<slot />
	</div>
</div>
