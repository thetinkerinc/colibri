<script>
export let title;
export let link = undefined;

import { page } from '$app/stores';

import utils from '$utils/general.js';

const href = link ?? utils.slugify(title);

$: active = $page.url.pathname === '/' + href;
</script>

<div>
	<a class={active && 'underline'} href="/{href}">{title}</a>
</div>

<style>
a {
	color: unset;
}
</style>
