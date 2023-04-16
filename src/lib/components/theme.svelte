<script>
export let name;

import Highlighter from '$components/highlighter.svelte';

const code = `import '@thetinkerinc/colibri/themes/${name}.css';`;
</script>

<div class="overflow-hidden rounded">
	<Highlighter language="js" {code} />
</div>
