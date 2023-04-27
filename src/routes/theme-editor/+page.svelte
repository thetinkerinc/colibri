<script>
import css from '$utils/css.js';
import dom from '$utils/dom.js';
import { themeVariables, themeObject } from '$utils/theme.js';

function download() {
	dom.download('theme.css', css.stringifyTheme($themeVariables));
}
</script>

<svelte:head>
	<title>Theme editor</title>
</svelte:head>

<div>{JSON.stringify($themeObject)}</div>
<div on:click={download}>download</div>
