<script>
export let name;

import { themeFile } from '$utils/theme.js';

import Highlighter from '$components/highlighter.svelte';

const code = `import '@thetinkerinc/colibri/themes/${name}';`;

$: active = $themeFile ? $themeFile === name : name === 'colibri.css';
</script>

<div
	class="cursor-default overflow-hidden rounded transition
            {!active && 'opacity-60 hover:-translate-y-1 hover:opacity-80'}"
	on:click={() => ($themeFile = name)}>
	<Highlighter language="js" {code} />
</div>
