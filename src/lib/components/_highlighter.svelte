<script>
export let language;
export let code;
export let format = (c) => c;
export let strict = false;

import { BROWSER } from 'esm-env';
import prism from 'prismjs';

let highlighted = false;
let html = code;

$: hl(code);

function hl() {
	if (!BROWSER) {
		return;
	}
	if (!code) {
		html = '';
	}
	try {
		const formatted = format(code);
		html = prism.highlight(formatted, prism.languages?.[language], language);
		highlighted = true;
	} catch (err) {
		if (strict) {
			throw err;
		}
	}
}
</script>

<!-- prettier-ignore -->
<pre><code>{#if highlighted}{@html html}{:else}{code}{/if}</code></pre>

<style>
pre {
	height: 100%;
	background: var(--colibri-highlighter-background);
	color: var(--colibri-highlighter-font-color);
	padding: var(--colibri-highlighter-paddng);
	max-height: var(--colibri-highlighter-max-height);
	overflow: auto;
}
</style>
