<script>
import Theme from '$components/theme.svelte';
</script>

<div class="text-3xl">Colibri themes</div>
<div class="my-2 text-xl">
	Here you'll find a list of the themes bundled with Colibri. We're always
	working on adding more, but if you have created a theme you'd like to share,
	please open up an issue or a pull request on our
	<a href="https://github.com/thetinkerinc/colibri" target="_blank">GitHub</a>!
</div>

<div class="mb-8 text-xl">
	You can include a theme by importing the css file into your app somewhere it
	is accessible by all pages. In SvelteKit, this will likely be in your root
	+layout.svelte file.
</div>

<div class="flex flex-col gap-3">
	<Theme name="colibri" />
	<Theme name="colibri-dark" />
</div>
