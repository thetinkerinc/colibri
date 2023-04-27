<script>
import css from '$utils/css.js';

import fallback from '../themes/colibri.css?inline';

import { themeFile, themeFileCSS, themeVariables } from '$utils/theme';

const modules = import.meta.glob('../themes/*.css', { query: '?inline' });

$themeFileCSS = fallback;

$: updateTheme($themeFile);
$: $themeVariables = css.parseTheme($themeFileCSS);

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
