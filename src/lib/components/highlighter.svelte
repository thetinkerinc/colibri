<script>
export let language;
export let code;
export let strict = false;
export let element;
export let style = {
	body: {
		maxHeight: '600px'
	}
};

import * as prettier from 'prettier';
import babel from 'prettier/plugins/babel';
import estree from 'prettier/plugins/estree';
import postcss from 'prettier/plugins/postcss';

import svelte from '$utils/prettier-plugin-svelte-browser.js';

import Highlighter from '$components/_highlighter.svelte';

import 'prismjs/components/prism-bash';
import 'prism-svelte';

import 'prismjs/themes/prism-okaidia.min.css';

async function format(code) {
	const formatters = {
		js: formatJs,
		svelte: formatSvelte
	};
	return (await formatters?.[language]?.(code)) ?? code;
}

async function formatJs(code) {
	return await prettier.format(code, {
		parser: 'babel',
		plugins: [babel, estree],
		useTabs: true,
		singleQuote: true,
		trailingComma: 'none',
		printWidth: 50
	});
}

async function formatSvelte(code) {
	return await prettier.format(code, {
		parser: 'svelte',
		plugins: [babel, estree, postcss, svelte],
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

<Highlighter {language} {code} {strict} {format} {style} bind:element />
