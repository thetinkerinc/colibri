<script>
export let name;
export let loader;

import { selectedThemeName, selectedThemeObject, userThemeObject } from '$utils/theme.js';

import Highlighter from '$components/highlighter.svelte';

$: active = $selectedThemeName===name;

async function loadTheme(){
    const t=await loader();
    $selectedThemeObject=t.default;
    $selectedThemeName=name;
    $userThemeObject=t.default;
}
</script>

<div
	class="cursor-default overflow-hidden rounded transition
           {!active && 'opacity-60 hover:-translate-y-1 hover:opacity-80'}"
	on:click={loadTheme}>
	<Highlighter language="js" code="'{name}'" />
</div>
