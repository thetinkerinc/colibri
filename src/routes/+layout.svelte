<script>
export let data;

import { onMount, setContext } from 'svelte';
import { dev } from '$app/environment';
import { inject } from '@vercel/analytics';

import theme from '$utils/theme.js';

import Themer from '$components/themer.svelte';
import ThemeUtils from '$components/theme-utils.svelte';
import Toasts from '$components/toasts.svelte';

import MenuSection from './menu-section.svelte';
import MenuItem from './menu-item.svelte';

import '../lib/styles/all.css';
import '../app.css';

const themeContext = theme.makeThemeContext(data.userThemeName, data.userTheme);

setContext('theme', themeContext);

onMount(async () => {
	await import('../lib/utils/tailwind-playground.js');
});

inject({ mode: dev ? 'development' : 'production' });

const { userThemeObject, isDark } = themeContext;

let menuOpen = false;

$: src = $isDark ? '/colibri-dark.svg' : '/colibri.svg';
</script>

<svelte:window
	on:click={() => (menuOpen = false)}
	on:keyup={() => (menuOpen = false)} />
<Themer theme={$userThemeObject}>
	<ThemeUtils />
	<Toasts />
	<div class="relative grid grid-cols-1 gap-8 lg:grid-cols-[auto_1fr]">
		<i
			class="fa-solid fa-bars fa-2xl absolute left-6 top-10 lg:hidden"
			on:click|stopPropagation={() => (menuOpen = true)}
			on:keyup|stopPropagation={() => (menuOpen = true)} />
		<div
			class="fixed left-0 top-0 z-10 -translate-x-full bg-[--colibri-body-background-color] transition-transform
			       {menuOpen && 'translate-x-0'} inline-flex h-screen flex-col
                   gap-2 py-8 text-xl shadow-xl lg:sticky lg:translate-x-0">
			<div class="absolute right-[20px] top-[15px] lg:hidden">
				<div
					class="cursor-default text-[45px] leading-[0.5]"
					on:click={() => (menuOpen = false)}
					on:keyup={() => (menuOpen = false)}>
					&times;
				</div>
			</div>
			<a class="mb-2" href="/">
				<img class="mx-auto w-16" {src} alt="Humming bird logo" />
			</a>
			<div class="overflow-y-auto px-8">
				<MenuSection title="Display">
					<MenuItem title="Accordian" />
					<MenuItem title="Card" />
					<MenuItem title="Modal" />
					<MenuItem title="Toast" />
					<MenuItem title="Tooltip" />
				</MenuSection>
				<MenuSection title="Form">
					<MenuItem title="Button" />
					<MenuItem title="Checkbox" />
					<MenuItem title="DatePicker" />
					<MenuItem title="Input" />
					<MenuItem title="Radio" />
					<MenuItem title="TimePicker" />
					<MenuItem title="Toggle" />
				</MenuSection>
				<MenuSection title="Utility">
					<MenuItem title="Anchored" />
					<MenuItem title="Highlighter" />
					<MenuItem title="Portal" />
				</MenuSection>
				<div class="my-2 w-full border-t-[3px] border-t-gray-300" />
				<MenuSection title="Styling">
					<MenuItem title="Getting started" link="styling" />
					<MenuItem title="Themes" />
					<MenuItem title="Editor" link="theme-editor" />
				</MenuSection>
			</div>
		</div>
		<div class="mt-12 p-6 pb-10 lg:mt-0">
			<slot />
		</div>
	</div>
</Themer>

<style>
:global(a:hover) {
	@apply underline;
}
a {
	color: unset;
}
</style>
