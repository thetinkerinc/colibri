<script>
export let language;
export let code;

import { onMount } from 'svelte';
import { BROWSER } from 'esm-env';
import prism from 'prismjs';

import 'prism-svelte';

import 'prismjs/themes/prism-okaidia.min.css';

let highlighted = false;
let html = code;

$: hl(code);

async function hl() {
	if (!BROWSER) {
		return;
	}
	const formatted = await format();
	html = prism.highlight(formatted, prism.languages[language], language);
	highlighted = true;
}

async function format() {
	const resp = await fetch('/format', {
		method: 'POST',
		headers: {
			'content-type': 'application/json'
		},
		body: JSON.stringify({
			code
		})
	});
	return await resp.json();
}
</script>

<!-- prettier-ignore -->
<pre><code>{#if highlighted}{@html html}{:else}{code}{/if}</code></pre>

<style>
pre {
	background: #272822;
	color: white;
	padding: 1rem;
	margin: 0;
	border-radius: unset;
	max-height: 600px;
	overflow: auto;
}
</style>
