<script>
import { page } from '$app/stores';
</script>

<svelte:head>
    <title>Error</title>
</svelte:head>
<div class="text-center text-8xl mt-5">{$page.status}</div>
<div class="text-center w-[500px] mx-auto mt-5 text-lg">
    Seems like one of us is not where we're supposed to be.
    We can help you find your way back
    <a href="/">home</a>, or if you think we've made a
    mistake, please reach out to us on our
    <a href="https://github.com/thetinkerinc/colibri" target="_blank">GitHub</a>
</div>
