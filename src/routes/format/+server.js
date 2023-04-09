import { json } from '@sveltejs/kit';
import prettier from 'prettier';
import svelte from 'prettier-plugin-svelte';

async function POST({ request }) {
	const body = await request.json();
	const formatted = prettier.format(body.code, {
		parser: 'svelte',
		plugins: [svelte],
		useTabs: true,
		singleQuote: true,
		trailingComma: 'none',
		printWidth: 60,
		bracketSameLine: true,
		htmlWhitespaceSensitivity: 'ignore',
		svelteSortOrder: 'options-scripts-styles-markup',
		svelteIndentScriptAndStyle: false
	});
	return json(formatted);
}

export { POST };
