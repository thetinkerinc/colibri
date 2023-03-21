<script>
export let code;
export { _class as class };

import Highlighter from '$components/_highlighter.svelte';

import hljs from 'highlight.js/lib/core';
import js from 'highlight.js/lib/languages/javascript';
import css from 'highlight.js/lib/languages/css';
import xml from 'highlight.js/lib/languages/xml';

import 'highlight.js/styles/atom-one-dark.css';

hljs.registerLanguage('javascript', js);
hljs.registerLanguage('css', css);
hljs.registerLanguage('xml', xml);

let _class = '';
</script>

<Highlighter {code} class={_class} />
