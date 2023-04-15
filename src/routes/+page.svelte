<script>
import Highlighter from '$components/highlighter.svelte';
import Card from '$components/card.svelte';
import CssVariable from '$components/css-variable.svelte';

import styles from './styles.svelte?raw';
import example from './example.svelte?raw';
</script>

<svelte:head>
	<title>Colibri</title>
</svelte:head>

<div
	class="text-shadow bg-[url('/tenango.jpg')] bg-contain bg-clip-text bg-center text-center text-[130px] font-black tracking-wider text-transparent">
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

<div class="mt-5 mb-1 text-xl">Customizing styling</div>
<div class="text-lg">
	In the component documentation pages, if the component can be customized you
	will find a list of styling rules that look like this:
	<div class="my-1">
		<Card>
			<CssVariable
				variable="--colibri-border-radius"
				override="--colibri-button-border-radius"
				value="0.25rem" />
		</Card>
	</div>
	<div class="my-2 flex flex-col gap-3">
		<div>
			Colibri theming works by using a set of css variables. There are some
			variables that are general, and can apply to various components, as well
			as override variables which allow you to tweak the appearance of single
			components.
		</div>
		<div>
			The first variable you'll see is the general one. This one will be set in
			your theme file, and can be changed to update the general look of your
			whole app.
		</div>
		<div>
			The second variable is an override. If you define this variable in your
			theme file, it will take precedence over the general value.
		</div>
		<div>
			The value you see at the end is Colibri's default value for that variable.
		</div>
	</div>

	Sometimes you'll see rules which only have one variable and a value, like
	this:
	<div class="my-1">
		<Card>
			<CssVariable variable="--colibri-checkbox-size" value="18px" />
		</Card>
	</div>
	This is when there is no general rule for the value, and it is specific to that
	component.
</div>

<style>
.text-shadow {
	filter: drop-shadow(0 0 1px rgba(255, 255, 255, 0.8))
		drop-shadow(0 5px 3px rgba(0, 0, 0, 0.5));
}
</style>
