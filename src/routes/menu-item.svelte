<script>
export let title;

import { page } from '$app/stores';

let href = title.toLowerCase().replace(' ', '-');

$: active = $page.url.pathname === '/' + title.toLowerCase();
</script>

<div>
	<a class={active && 'underline'} {href}>{title}</a>
</div>

<style>
a {
	color: unset;
}
</style>
