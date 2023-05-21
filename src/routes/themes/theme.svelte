<script>
export let name;
export let loader;

import { getContext } from 'svelte';
import cookies from 'js-cookie';

import utils from '$utils/general.js';

import Highlighter from '$components/highlighter.svelte';

const { selectedThemeName, selectedThemeObject, userThemeObject } =
	getContext('theme');

$: active = $selectedThemeName === name;

async function loadTheme() {
	const t = await loader();
	$selectedThemeName = name;
	$selectedThemeObject = utils.clone(t.default);
	$userThemeObject = utils.clone(t.default);
	cookies.set('user-theme', name, { expires: 365 });
}
</script>

<div
	class="cursor-default overflow-hidden rounded transition
           {!active && 'opacity-60 hover:-translate-y-1 hover:opacity-80'}"
	on:click={loadTheme}
	on:keyup={loadTheme}>
	<Highlighter language="js" code="'{name}'" />
</div>
