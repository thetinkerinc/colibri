<script>
export let language;
export let code;

import { BROWSER } from 'esm-env';
import prism from 'prismjs';
import prettier from 'prettier';
import babel from 'prettier/parser-babel';
import postcss from 'prettier/parser-postcss';

import svelte from '$utils/prettier-plugin-svelte-browser.js';

import 'prismjs/components/prism-bash';
import 'prism-svelte';

import 'prismjs/themes/prism-okaidia.min.css';

let highlighted = false;
let html = code;

$: hl(code);

function hl() {
	if (!BROWSER) {
		return;
	}
	const formatted = format();
	html = prism.highlight(formatted, prism.languages?.[language], language);
	highlighted = true;
}

function format() {
	return prettier.format(code, {
		parser: 'svelte',
		plugins: [babel, postcss, svelte],
		useTabs: true,
		singleQuote: true,
		trailingComma: 'none',
		printWidth: 60,
		bracketSameLine: true,
		htmlWhitespaceSensitivity: 'ignore',
		svelteSortOrder: 'options-scripts-markup-styles',
		svelteIndentScriptAndStyle: false
	});
}
</script>

<!-- prettier-ignore -->
<pre><code>{#if highlighted}{@html html}{:else}{code}{/if}</code></pre>

<style>
pre {
	height: 100%;
	background: #272822;
	color: white;
	padding: 1rem;
	margin: 0;
	border-radius: unset;
	max-height: 600px;
	overflow: auto;
}
</style>
