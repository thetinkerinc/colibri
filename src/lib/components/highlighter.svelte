<script>
export let language;
export let code;
export let strict = false;

import prettier from 'prettier';
import babel from 'prettier/parser-babel';
import postcss from 'prettier/parser-postcss';

import svelte from '$utils/prettier-plugin-svelte-browser.js';

import Highlighter from '$components/_highlighter.svelte';

import 'prismjs/components/prism-bash';
import 'prism-svelte';

import 'prismjs/themes/prism-okaidia.min.css';

function format(code) {
	const formatters = {
		js: formatJs,
		svelte: formatSvelte
	};
	return formatters[language](code);
}

function formatJs(code) {
	return prettier.format(code, {
		parser: 'babel',
		plugins: [babel],
		useTabs: true,
		singleQuote: true,
		trailingComma: 'none',
		printWidth: 50
	});
}

function formatSvelte(code) {
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

<Highlighter {language} {code} {strict} {format} />
