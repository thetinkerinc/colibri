<script>
import { page } from '$app/stores';
</script>

<svelte:head>
	<title>Error</title>
</svelte:head>
<div class="mt-5 text-center text-8xl">{$page.status}</div>
<div class="mx-auto mt-5 w-[500px] text-center text-lg">
	Seems like one of us is not where we're supposed to be. We can help you find
	your way back
	<a href="/">home</a>
	, or if you think we've made a mistake, please reach out to us on our
	<a href="https://github.com/thetinkerinc/colibri" target="_blank">GitHub</a>
</div>
