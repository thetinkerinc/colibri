<script>
import { isDark } from '$utils/theme.js';

import Highlighter from '$components/highlighter.svelte';
import Card from '$components/card.svelte';

import styles from './styles.svelte?raw';
import example from './example.svelte?raw';

$: src = $isDark ? '/tenango-dark.jpg' : '/tenango.jpg';
</script>

<svelte:head>
	<title>Colibri</title>
</svelte:head>

<div
	class="text-shadow bg-[url('{src}')] bg-contain bg-clip-text bg-center
           text-center text-[80px] font-black tracking-wider text-transparent md:text-[100px] lg:text-[130px]">
	COLIBRI
</div>

<div class="text-center text-xl">
	Colibri is a lightweight, customizable component library for Svelte apps. Our
	goal is to provide you with a set of components for the majority of common use
	cases, letting you build on top of that to realize your ideas without worrying
	about finding or building basic interactive elements. We also want to give you
	the flexibility to style the components however you want while keeping things
	consistent for you.
</div>

<div class="mt-4 mb-2 text-xl">Getting started</div>
<div class="flex flex-col gap-3">
	<div>
		<div class="text-lg">1. Install the library</div>
		<div class="overflow-hidden rounded">
			<Highlighter
				language="bash"
				code="$> npm install @thetinkerinc/colibri" />
		</div>
	</div>

	<div>
		<div class="text-lg">
			2. Import the base styles and a theme somehwere that will apply to all
			pages of your app.
			<br />
			For SvelteKit this will usually be in your root +layout.svelte file
		</div>
		<div class="overflow-hidden rounded">
			<Highlighter language="svelte" code={styles} />
		</div>
	</div>

	<div>
		<div class="text-lg">3. Start using components</div>
		<div class="overflow-hidden rounded">
			<Highlighter language="svelte" code={example} />
		</div>
	</div>
</div>

<style>
.text-shadow {
	filter: drop-shadow(0 0 1px rgba(255, 255, 255, 0.8))
		drop-shadow(0 5px 3px rgba(0, 0, 0, 0.5));
}
</style>
