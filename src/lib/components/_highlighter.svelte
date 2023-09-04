<script>
export let language;
export let code;
export let format = (c) => c;
export let strict = false;
export let element;
export let style = undefined;

import { BROWSER } from 'esm-env';
import prism from 'prismjs';

import theme from '$utils/theme.js';

import Html from '$components/html.svelte';

let highlighted = false;
let html = code;

$: userStyles = theme.makeUserStyles('highlighter', ['body'], style);

$: hl(code);

async function hl() {
	if (!BROWSER) {
		return;
	}
	if (!code) {
		html = '';
	}
	try {
		const formatted = await format(code);
		html = prism.highlight(formatted, prism.languages?.[language], language);
		highlighted = true;
	} catch (err) {
		console.log(err);
		if (strict) {
			throw err;
		}
	}
}
</script>

<!-- prettier-ignore -->
<pre class="colibri-highlighter-body {$userStyles.body.class}"
     style={$userStyles.body.inlines} bind:this={element}><code>{#if highlighted}<Html {html} />{:else}{code}{/if}</code></pre>
