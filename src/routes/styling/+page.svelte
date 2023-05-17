<script>
import Highlighter from '$components/highlighter.svelte';

import example from './example.svelte?raw';
import styles from './styles.svelte?raw';
</script>

<svelte:head>
	<title>Styling</title>
</svelte:head>

<div class="text-3xl">Styling with Colibri</div>

<div class="my-2 text-lg">
	Styling in Colibri works using JavaScript style objects. They can be applied
	globally by using a theme file, or to individiual instances of a component, or
	a mixture of both.
	<div class="my-2" />
	Colibri provides a set of themes ready for you to use, and we're always working
	on adding more. You can also modify any of our themes or make your own using the
	<a href="/theme-editor">theme editor</a>.
</div>

<div class="mt-4 text-lg font-medium">Importing a theme</div>
<div class="mb-1">
	In your root +layout.svelte file, import the Themer component as well as the
	theme you'd like, then wrap your app.
</div>
<div class="overflow-hidden rounded">
	<Highlighter language="svelte" code={example} />
</div>

<div class="mt-4 text-lg font-medium">Customizing styling</div>
<div>
	Colibri gives you the flexibility to build off of any of our themes to changes
	the overall appearance of your app, as well as inject arbitrary styling into
	components.
	<div class="my-2" />
	Head to the
	<a href="/theme-editor">theme editor</a>
	to edit theme wide variables and see how they look as you make changes.
	<div class="my-2" />
	For more fine grained control, Colibri also gives you the ability to add styling
	on the component level. On the component documentation pages you'll find a styling
	section with two tabs: variables and properties.
	<div class="my-2" />
	Variables are an easy way to update certain aspects of a component's style without
	having to know about the structure of the component or add your own styling rules.
	<div class="my-2" />
	The variables listed in the component documentation page are specific to that component.
	Often though, the variables will override more general variables which can be found
	in the
	<a href="/theme-editor">theme editor</a>. These general variables will apply
	to multiple components.
	<div class="my-2" />
	Generally, it is recommended to use variables if possible to achieve your desired
	effect.
	<div class="my-2" />
	When variables aren't enough, you can also add arbitrary classes and inline styles
	to the individual parts of a component. In the properties tab you'll find the breakdown
	of sections and the ability to add classes and CSS rules to each one.
</div>

<div class="mt-4 text-lg font-medium">Applying component styles</div>
<div>
	On the component documentation pages, as you're editing the variables and
	properties, you'll see that there is a style object that dynamically update as
	you type. The values you enter are saved as you navigate, and will be part of
	your custom theme file if you choose to download and apply it. However this
	object can also be passed as a prop to individual components, which will
	override any theme styling and give you the ability to do targeted styling.
	The documentation pages show examples of how to integrate style objects.
</div>

<div class="mt-4 text-lg font-medium">Use with TailwindCSS</div>
<div>
	Colibri styling is compatible with TailwindCSS, and any other CSS utility
	framework you use. This documentation site has Tailwind Playground installed
	which lets you experiment with arbitrary Tailwind classes on the component
	documentation pages.
	<div class="my-2" />
	The only consideration to make when using a utility CSS library is to load the
	styles after you load Colibri's to make sure you have the right precedence. This
	is usually as simple as importing your app's styling after importing Colibri's
	all.css file.
</div>
<div class="overflow-hidden rounded">
	<Highlighter language="svelte" code={styles} />
</div>
