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

function hl() {
	if (!elem) {
		return;
	}
	html = prism.highlight(code, prism.languages[language], language);
	highlighted = true;
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
