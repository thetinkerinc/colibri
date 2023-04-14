<script>
export let title;

import { page } from '$app/stores';

const slug = slugify();

$: active = $page.url.pathname === '/' + slug;

function slugify() {
	return title.replace(' ', '-').replace(/([A-Z])/g, (match, letter, idx) => {
		let replacement = letter.toLowerCase();
		if (idx > 0) {
			replacement = '-' + replacement;
		}
		return replacement;
	});
}
</script>

<div>
	<a class={active && 'underline'} href="/{slug}">{title}</a>
</div>

<style>
a {
	color: unset;
}
</style>
