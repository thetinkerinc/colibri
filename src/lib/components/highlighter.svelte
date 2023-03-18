<script>
export { _class as class };

import { onMount } from 'svelte';
import hljs from 'highlight.js/lib/core';
import js from 'highlight.js/lib/languages/javascript';
import xml from 'highlight.js/lib/languages/xml';

import 'highlight.js/styles/atom-one-dark.css';

onMount(() => {
	const leading = elem.textContent.match(/([ \t]+)/);
	if (leading) {
		const spaces = leading[1];
		const re = new RegExp('^' + spaces);
		elem.textContent = elem.textContent
			.split('\n')
			.map((line) => line.replace(re, ''))
			.join('\n')
			.trim();
	} else {
		elem.textContent = elem.textContent.trim();
	}
	hljs.registerLanguage('xml', xml);
	hljs.registerLanguage('javascript', js);
	hljs.highlightElement(elem);
});

let elem;
let _class = '';
</script>

<style>
pre {
	color: #abb2bf;
	background: #282c34;
	padding: 1rem;
}
</style>

<pre class={_class} bind:this={elem}>
<code>
<slot />
</code>
</pre>
