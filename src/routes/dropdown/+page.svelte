<script>
import Page from '$layouts/page.svelte';

import Dropdown from '$components/dropdown.svelte';

const template = '';
const data = {};

const options = ['one', 'two', 'three'];
</script>

<Page title="Dropdown" canStyle={true} {template} {data}>
	<svelte:fragment slot="example">
		<Dropdown {options} />
	</svelte:fragment>
</Page>
