<script>
export let title;

import { slide } from 'svelte/transition';
import { page } from '$app/stores';

let href = title.toLowerCase().replace(' ', '-');

$: active = $page.url.pathname === '/' + title.toLowerCase();
</script>

<style>
a {
	color: unset;
}
</style>

<div>
	<a class={active && 'underline'} {href}>{title}</a>
	{#if active}
		<div class="text-lg text-gray-500" transition:slide>
			<slot />
		</div>
	{/if}
</div>
