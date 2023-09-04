<script>
export let html;

import * as dompurify from 'isomorphic-dompurify';

$: clean = dompurify.sanitize(html, {
	FORCE_BODY: true,
	ALLOWED_ATTR: ['style', 'class', 'type', 'href', 'rel']
});
</script>

<!-- eslint-disable-next-line svelte/no-at-html-tags -->
{@html clean}
