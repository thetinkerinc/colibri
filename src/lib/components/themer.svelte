<script>
import * as colors from 'color2k';

import css from '$utils/css.js';

import fallback from '../themes/colibri.css?inline';

import { themeFile, themeFileCSS, themeVariables, isDark } from '$utils/theme';

const modules = import.meta.glob('../themes/*.css', { query: '?inline' });

$themeFileCSS = fallback;

$: updateTheme($themeFile);
$: $themeVariables = css.parseTheme($themeFileCSS);
$: $isDark = colors.getLuminance($themeVariables.backgroundColor) < 0.5;

async function updateTheme() {
	if (!$themeFile) {
		return;
	}
	const module = await modules[`../themes/${$themeFile}`]();
	$themeFileCSS = module.default;
}
</script>

<svelte:head>
	{@html `<` + `style>${$themeFileCSS}</style>`}
</svelte:head>
