<script>
import { onMount } from 'svelte';

import css from '$utils/css.js';
import dom from '$utils/dom.js';
import { themeVariables, themeObject } from '$utils/theme.js';

import Accordian, { AccordianItem } from '$components/accordian.svelte';
import Highlighter from '$components/highlighter.svelte';
import Card from '$components/card.svelte';
import CssVariable from '$components/css-variable.svelte';
import Input from '$components/input.svelte';
import Info from '$components/info.svelte';
import Button from '$components/button.svelte';

onMount(async () => {
	const module = await import('masonry-layout');
	const Masonry = module.default;
	new Masonry(grid, {
		itemSelector: '.theme-section',
		gutter: 15
	});
});

let grid;

$: styleExample = [
	"import { setStyle } from '@thetinkerinc/colibri';",
	`const customStyles = ${JSON.stringify($themeObject)}`,
	'setStyle(customStyles);'
].join('\n\n');

function download() {
	dom.download('theme.css', css.stringifyTheme($themeVariables));
}
</script>

<svelte:head>
	<title>Theme editor</title>
</svelte:head>

<div class="text-3xl">Theme editor</div>

<div class="my-2 text-lg">
	Welcome to the Colibri theme editor! Here you'll be able to edit and download
	your CSS theme file, or see how to integrate your global style object.
	<div class="my-2" />
	To learn more about how styling works and which method is right for you, check
	out
	<a href="/styling">getting started with styling</a>.
	<div class="my-2" />
	Use the code example below to integrate a custom style object into your project,
	or edit whichever variables you like and download the corresponding theme file.
	<div class="my-2" />
	To update the styling of individual components, you can go to that component's
	documentation page.
</div>

<Accordian>
	<AccordianItem>
		<div slot="title">Style object</div>
		<div class="mt-2 overflow-hidden rounded">
			<Highlighter language="js" code={styleExample} />
		</div>
	</AccordianItem>
</Accordian>

<div class="my-3 text-center">
	<Button on:click={download}>Download theme</Button>
</div>

<div class="flex flex-wrap gap-6" bind:this={grid}>
	<div class="theme-section">
		<Card>
			<div class="text-lg">Theme colors</div>
			<div class="mt-2 mb-4 flex flex-col gap-1">
				<CssVariable variable="backgroundColor" />
				<CssVariable variable="fontColor" />
				<div class="my-1" />
				<CssVariable variable="primaryColor" />
				<CssVariable variable="primaryColorLight" />
				<CssVariable variable="primaryColorDark" />
				<div class="my-1" />
				<CssVariable variable="secondaryColor" />
				<CssVariable variable="secondaryColorLight" />
				<CssVariable variable="secondaryColorDark" />
			</div>
			<div class="flex items-center gap-2">
				<Button>Calculate shades</Button>
				<Info>
					Primary and secondary color light and dark are used for shading, for
					example hovering and clicking a button. If you would prefer not to
					manually select the shades, we can automatically calculate a slightly
					lighter and darker shade for you. Just set your desired primary and
					secondary colors and click Calculate shades.
				</Info>
			</div>
		</Card>
	</div>
	<div class="theme-section">
		<Card>
			<div class="text-lg">Neutral colors</div>
			<div class="mt-2 mb-4 flex flex-col gap-1">
				<CssVariable variable="neutralColorDark3" />
				<CssVariable variable="neutralColorDark2" />
				<CssVariable variable="neutralColorDark1" />
				<CssVariable variable="neutralColor" />
				<CssVariable variable="neutralColorLight1" />
				<CssVariable variable="neutralColorLight2" />
				<CssVariable variable="neutralColorLight3" />
			</div>
			<div class="flex items-center gap-2">
				<Button>Calculate shades</Button>
				<Info>
					Neutral colors are used for accents and highlights throughout the
					components. If you would prefer not to manually select all of the
					shades, we can automatically calculate lighter and darker shades for
					you. Just set your desired neutral color and click Calculate sahdes.
				</Info>
			</div>
		</Card>
	</div>
	<div class="theme-section">
		<Card>
			<div class="text-lg">Form controls</div>
			<div class="mt-2 mb-2 flex flex-col gap-1">
				<CssVariable variable="controlPlaceholderColor" />
				<CssVariable variable="controlDisabledBackground" />
				<CssVariable variable="controlDisabledOpacity" />
				<CssVariable variable="controlDisabledFilter" />
			</div>
		</Card>
	</div>
	<div class="theme-section">
		<Card>
			<div class="text-lg">Border</div>
			<div class="mt-2 mb-2 flex flex-col gap-1">
				<CssVariable variable="border" />
				<CssVariable variable="borderRadiusSm" />
				<CssVariable variable="borderRadius" />
				<CssVariable variable="borderRadiusLg" />
			</div>
		</Card>
	</div>
	<div class="theme-section">
		<Card>
			<div class="text-lg">Utility</div>
			<div class="mt-2 mb-2 flex flex-col gap-1">
				<CssVariable variable="shadow" />
				<CssVariable variable="fontSizeLg" />
			</div>
		</Card>
	</div>
</div>

<style>
.theme-section {
	@apply mb-[20px] w-full lg:w-[48%];
}
</style>
