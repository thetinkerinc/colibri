<script>
import css from '$utils/css.js';
import dom from '$utils/dom.js';
import { userThemeObject } from '$utils/theme.js';

import Accordian, { AccordianItem } from '$components/accordian.svelte';
import Highlighter from '$components/highlighter.svelte';
import Masonry from '$components/masonry.svelte';
import Card from '$components/card.svelte';
import ThemeVariable from '$components/theme-variable.svelte';
import Input from '$components/input.svelte';
import Info from '$components/info.svelte';
import Button from '$components/button.svelte';

$: styleExample = [
	"import { setStyle } from '@thetinkerinc/colibri';",
	`const customStyles = ${JSON.stringify($userThemeObject)}`,
	'setStyle(customStyles);'
].join('\n\n');

function download() {
	dom.download('theme.js', JSON.stringify($userThemeObject, null, 2));
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

<Masonry class="flex flex-wrap gap-6" itemSelector=".theme-section">
	<div class="theme-section">
		<Card>
			<div class="text-lg">Theme colors</div>
			<div class="mt-2 mb-4 flex flex-col gap-1">
				<ThemeVariable variable="backgroundColor" />
				<ThemeVariable variable="fontColor" />
				<div class="my-1" />
				<ThemeVariable variable="primaryColor" />
				<ThemeVariable variable="primaryColorLight" />
				<ThemeVariable variable="primaryColorDark" />
				<div class="my-1" />
				<ThemeVariable variable="secondaryColor" />
				<ThemeVariable variable="secondaryColorLight" />
				<ThemeVariable variable="secondaryColorDark" />
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
				<ThemeVariable variable="neutralColorDark3" />
				<ThemeVariable variable="neutralColorDark2" />
				<ThemeVariable variable="neutralColorDark1" />
				<ThemeVariable variable="neutralColor" />
				<ThemeVariable variable="neutralColorLight1" />
				<ThemeVariable variable="neutralColorLight2" />
				<ThemeVariable variable="neutralColorLight3" />
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
				<ThemeVariable variable="controlPlaceholderColor" />
				<ThemeVariable variable="controlDisabledBackgroundColor" />
				<ThemeVariable variable="controlDisabledOpacity" />
				<ThemeVariable variable="controlDisabledFilter" />
			</div>
		</Card>
	</div>
	<div class="theme-section">
		<Card>
			<div class="text-lg">Border</div>
			<div class="mt-2 mb-2 flex flex-col gap-1">
				<ThemeVariable variable="border" />
				<ThemeVariable variable="borderRadiusSm" />
				<ThemeVariable variable="borderRadius" />
				<ThemeVariable variable="borderRadiusLg" />
			</div>
		</Card>
	</div>
	<div class="theme-section">
		<Card>
			<div class="text-lg">Utility</div>
			<div class="mt-2 mb-2 flex flex-col gap-1">
				<ThemeVariable variable="shadow" />
				<ThemeVariable variable="fontSizeLg" />
			</div>
		</Card>
	</div>
</Masonry>

<style>
.theme-section {
	@apply mb-[20px] w-full lg:w-[48%];
}
</style>
