<script>
export let theme;

import * as colors from 'color2k';

import css from '$utils/css.js';
import { styleObject, isDark } from '$utils/theme.js';

$: variables = css.stringifyTheme(theme);
$: $styleObject = theme;
$: $isDark = colors.getLuminance(theme.variables.backgroundColor) < 0.5;
</script>

<svelte:head>
	{@html `<` + `style>${variables}</style>`}
</svelte:head>
