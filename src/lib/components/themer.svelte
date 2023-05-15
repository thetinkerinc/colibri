<script>
export let theme;

import { getContext } from 'svelte';
import * as colors from 'color2k';

import css from '$utils/css.js';

const { styleObject, isDark } = getContext('theme');

$: variables = css.stringifyTheme(theme);
$: $styleObject = theme;
$: $isDark = getIsDark(theme);

function getIsDark() {
	try {
		return colors.getLuminance(theme.variables.bodyBackgroundColor) < 0.5;
	} catch (err) {
		return false;
	}
}
</script>

<svelte:head>
	{@html `<` + `style>${variables}</style>`}
</svelte:head>
