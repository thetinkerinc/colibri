<script>
export let theme;

import { setContext } from 'svelte';
import { writable } from 'svelte/store';

import css from '$utils/css.js';

import Html from '$components/html.svelte';

const styleObject = writable({});

setContext('_colibri-theme', {
	styleObject
});

$: variables = css.stringifyTheme(theme);
$: $styleObject = theme;
</script>

<svelte:head>
	<Html html={`<`+`style>${variables}</style>`} />
</svelte:head>
<slot />
