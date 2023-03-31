<script>
export let language;
export let code;
export { _class as class };

import { onMount } from 'svelte';
import prism from 'prismjs';

import 'prism-svelte';

import 'prismjs/themes/prism-okaidia.min.css';

onMount(() => {
	prism.highlightElement(elem);
});

let _class = '';
let elem;
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

<pre class={_class}><code class="language-{language}" bind:this={elem}>{code}</code></pre>
