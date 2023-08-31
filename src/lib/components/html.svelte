<script>
export let html;

import { sanitize } from 'isomorphic-dompurify';

$: clean=sanitize(html, {FORCE_BODY: true, ALLOWED_ATTR: ['style', 'class', 'type', 'href', 'rel']});
</script>

<!-- eslint-disable-next-line svelte/no-at-html-tags -->
{@html clean}
