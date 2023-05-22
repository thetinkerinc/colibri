<script>
import Page from '$layouts/page.svelte';

import RichText from '$components/rich-text.svelte';

import template from './template.svelte?raw';

$: data = {};
</script>

<Page title="RichText" {template} {data}>
	<svelte:fragment slot="example">
		<RichText />
	</svelte:fragment>
</Page>
