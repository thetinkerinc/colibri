<script>
import { getContext } from 'svelte';

import Highlighter from '$components/highlighter.svelte';

import Theme from './theme.svelte';

import example from './example.svelte?raw';

const { selectedThemeName } = getContext('theme');

const themes = getThemes();

$: code = example.replace('[[theme]]', $selectedThemeName);

function getThemes() {
	const modules = import.meta.glob('../../lib/themes/*.js');
	return Object.keys(modules)
		.map((f) => ({
			name: f.split('/').at(-1).replace('.js', ''),
			loader: modules[f]
		}))
		.sort((a, b) => a.name.localeCompare(b.name));
}
</script>

<svelte:head>
	<title>Themes</title>
</svelte:head>
<div class="text-3xl">Colibri themes</div>
<div class="my-2 text-xl">
	Here you'll find a list of the themes bundled with Colibri. We're always
	working on adding more, but if you have created a theme you'd like to share,
	please open up an issue or a pull request on our
	<a href="https://github.com/thetinkerinc/colibri" target="_blank">GitHub</a>!
</div>

<div class="mb-4 text-xl">
	You can include a theme by importing the
	<span class="code text-black">Themer</span> component and passing it your desired
	theme object. This should be done somewhere where it is accessible by all pages.
	In SvelteKit, this will likely be in your root +layout.svelte file.
</div>

<div class="text-lg font-medium">Importing</div>
<div class="mb-4 overflow-hidden rounded">
	<Highlighter language="svelte" {code} />
</div>

<div class="text-lg font-medium">Themes</div>
<div class="flex flex-col gap-3">
	{#each themes as theme}
		<Theme {...theme} />
	{/each}
</div>
