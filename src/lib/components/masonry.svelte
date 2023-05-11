<script>
export let itemSelector;
export { _class as class };

import { onMount } from 'svelte';

onMount(async () => {
	const module = await import('masonry-layout');
	const Masonry = module.default;
	new Masonry(element, {
		itemSelector,
		gutter: 15
	});
});

let element;
let _class = '';
</script>

<div class={_class} bind:this={element}>
	<slot />
</div>
