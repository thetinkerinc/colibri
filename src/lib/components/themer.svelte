<script>
import css from '$utils/css.js';

import fallback from '../themes/colibri.css?inline';

import { themeFile, themeVariables } from '$utils/theme';

const modules = import.meta.glob('../themes/*.css', { query: '?inline' });

let chosen;

$: updateTheme($themeFile);
$: theme = chosen ?? fallback;
$: $themeVariables = css.parseTheme(theme);

async function updateTheme() {
	if (!$themeFile) {
		return;
	}
	const module = await modules[`../themes/${$themeFile}`]();
	chosen = module.default;
}
</script>

<svelte:head>
	{@html `<` + `style>${theme}</style>`}
</svelte:head>
