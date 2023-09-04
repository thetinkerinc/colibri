<script>
import { getContext } from 'svelte';
import * as colors from 'color2k';
import { Files, FileDown, ChevronUp, ChevronDown } from 'lucide-svelte';

import dom from '$utils/dom.js';
import toaster from '$utils/toasts.js';

import Highlighter from '$components/highlighter.svelte';
import Masonry from '$components/masonry.svelte';
import Card from '$components/card.svelte';
import ThemeVariable from '$components/theme-variable.svelte';
import Info from '$components/info.svelte';
import Button from '$components/button.svelte';

const { userThemeObject } = getContext('theme');

let highlighter;
let themeOpen = false;

$: themeObject = `export default ${JSON.stringify($userThemeObject)}`;

function copy() {
	navigator.clipboard.writeText(highlighter.innerText);
	toaster.success('Theme object copied!');
}

function download() {
	dom.download('theme.js', highlighter.innerText);
}

function calculateShades() {
	const primary = $userThemeObject.variables.primaryColor;
	$userThemeObject.variables.primaryColorLight = colors.toHex(
		colors.lighten(primary, 0.07)
	);
	$userThemeObject.variables.primaryColorDark = colors.toHex(
		colors.darken(primary, 0.07)
	);

	const secondary = $userThemeObject.variables.secondaryColor;
	$userThemeObject.variables.secondaryColorLight = colors.toHex(
		colors.lighten(secondary, 0.07)
	);
	$userThemeObject.variables.secondaryColorDark = colors.toHex(
		colors.darken(secondary, 0.07)
	);
}

function calculateNeutralShades() {
	const base = $userThemeObject.variables.neutralColor;
	for (let i = 2; i > 0; i--) {
		$userThemeObject.variables[`neutralColorDark${i}`] = colors.toHex(
			colors.darken(base, 0.15 * i)
		);
	}
	for (let i = 2; i > 0; i--) {
		$userThemeObject.variables[`neutralColorLight${i}`] = colors.toHex(
			colors.lighten(base, 0.15 * i)
		);
	}
}
</script>

<svelte:head>
	<title>Theme editor</title>
</svelte:head>

<div class="text-3xl">Theme editor</div>

<div class="my-2 text-lg">
	Welcome to the Colibri theme editor! Here you'll be able to edit and download
	your theme file to apply styles globally to your whole project.
	<div class="my-2" />
	To learn more about how styling works in Colibri, check out
	<a href="/styling">getting started with styling</a>
	.
	<div class="my-2" />
	Edit the values below and use the example below to integrate your custom theme
	into your project. To update the styling of individual components, you can go to
	that component's documentation page.
	<div class="my-2" />
	Any changes you make will be preserved while navigating. Come back here once you're
	happy with how things look to get your theme file.
</div>

<div
	class="mb-4 rounded border border-gray-300 bg-[--colibri-element-background-color] px-4 py-2">
	<div
		class="block w-full text-left"
		role="button"
		tabindex="0"
		on:click={() => (themeOpen = !themeOpen)}
		on:keydown={() => (themeOpen = !themeOpen)}>
		<div class="flex items-center gap-4">
			<div class="flex-auto text-lg font-medium">Theme object</div>
			<button
				class="text-[--colibri-font-color] opacity-80 hover:opacity-100"
				title="Copy theme object"
				on:click|stopPropagation={copy}>
				<Files />
			</button>
			<button
				class="text-[--colibri-font-color] opacity-80 hover:opacity-100"
				title="Download theme object"
				on:click|stopPropagation={download}>
				<FileDown />
			</button>
			{#if themeOpen}
				<ChevronUp />
			{:else}
				<ChevronDown />
			{/if}
		</div>
	</div>
	<div
		class="overflow-hidden rounded transition-[max-height] duration-300
               {!themeOpen && 'max-h-0'}
               {themeOpen && 'mt-2 max-h-[350px]'}">
		<Highlighter
			language="js"
			code={themeObject}
			style={{ body: { maxHeight: '300px' } }}
			bind:element={highlighter} />
	</div>
</div>

<Masonry class="flex flex-wrap gap-6" itemSelector=".theme-section">
	<div class="theme-section">
		<Card>
			<div class="text-lg">Theme colors</div>
			<div class="mb-4 mt-2 flex flex-col gap-1">
				<ThemeVariable variable="bodyBackgroundColor" />
				<ThemeVariable variable="elementBackgroundColor" />
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
				<Button on:click={calculateShades}>Calculate shades</Button>
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
			<div class="mb-4 mt-2 flex flex-col gap-1">
				<ThemeVariable variable="neutralColorDark2" />
				<ThemeVariable variable="neutralColorDark1" />
				<ThemeVariable variable="neutralColor" />
				<ThemeVariable variable="neutralColorLight1" />
				<ThemeVariable variable="neutralColorLight2" />
			</div>
			<div class="flex items-center gap-2">
				<Button on:click={calculateNeutralShades}>Calculate shades</Button>
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
			<div class="mb-2 mt-2 flex flex-col gap-1">
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
			<div class="mb-2 mt-2 flex flex-col gap-1">
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
			<div class="mb-2 mt-2 flex flex-col gap-1">
				<ThemeVariable variable="shadow" />
				<ThemeVariable variable="fontSizeLg" />
			</div>
		</Card>
	</div>
</Masonry>

<style lang="postcss">
.theme-section {
	@apply mb-[20px] w-full lg:w-[48%];
}
</style>
