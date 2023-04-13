<script>
export let title;

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
</div>
