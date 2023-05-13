<script>
export let theme;

import { getContext } from 'svelte';
import * as colors from 'color2k';

import css from '$utils/css.js';

const { styleObject, isDark } = getContext('theme');

$: variables = css.stringifyTheme(theme);
$: $styleObject = theme;
$: $isDark = colors.getLuminance(theme.variables.backgroundColor) < 0.5;
</script>

<svelte:head>
	{@html `<` + `style>${variables}</style>`}
</svelte:head>
