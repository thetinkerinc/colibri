<script>
export let code;
export { _class as class };

import { onMount } from 'svelte';
import hljs from 'highlight.js/lib/core';

onMount(() => {
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
	overflow-x: auto;
}
</style>

<pre class={_class} bind:this={elem}><code>{code}</code></pre>
