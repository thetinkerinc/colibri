<script>
export let title;

import { page } from '$app/stores';

import utils from '$utils/general.js';

const slug = utils.slugify(title);

$: active = $page.url.pathname === '/' + slug;
</script>

<div>
	<a class={active && 'underline'} href="/{slug}">{title}</a>
</div>

<style>
a {
	color: unset;
}
</style>
