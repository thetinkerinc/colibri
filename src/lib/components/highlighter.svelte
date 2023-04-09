<script>
export let language;
export let code;

import { onMount } from 'svelte';
import prism from 'prismjs';

import 'prism-svelte';

import 'prismjs/themes/prism-okaidia.min.css';

let highlighted = false;
let elem;
let html = code;

$: hl(elem, code);

async function hl() {
	if (!elem) {
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
	const formatted = await resp.json();
	return formatted;
}
</script>

<style>
pre {
	background: #272822;
	color: white;
	padding: 1rem;
	margin: 0;
	border-radius: unset;
	overflow: auto;
}
</style>

<pre><code bind:this={elem}
		>{#if highlighted}{@html html}{:else}{code}{/if}</code></pre>
