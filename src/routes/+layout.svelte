<script>
import MenuSection from './menu-section.svelte';
import MenuItem from './menu-item.svelte';

import '../lib/styles/all.css';
import '../lib/themes/colibri.css';
import '../app.css';

let menuOpen = false;
</script>

<div class="grid grid-cols-1 gap-8 lg:grid-cols-[auto_1fr]">
	<i
		class="fa-solid fa-bars fa-2xl absolute top-10 left-6 lg:hidden"
		on:click={() => (menuOpen = true)}
		on:keyup={() => (menuOpen = true)} />
	<div
		class="fixed top-0 left-0 z-30 -translate-x-full bg-white transition
			   {menuOpen && 'translate-x-0'} inline-flex h-screen flex-col
               gap-2 overflow-y-auto px-8 py-4 text-xl shadow-xl lg:sticky lg:translate-x-0">
		<div class="text-right lg:hidden">
			<i
				class="fa-solid fa-x"
				on:click={() => (menuOpen = false)}
				on:keyup={() => (menuOpen = false)} />
		</div>
		<a class="mb-2" href="/">
			<img class="mx-auto w-16" src="/colibri.svg" alt="Humming bird logo" />
		</a>
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
		<div class="w-full border-t-[3px] border-t-gray-300" />
		<MenuSection title="Styling">
			<MenuItem title="Getting started" />
			<MenuItem title="Themes" />
			<MenuItem title="Editor" />
		</MenuSection>
	</div>
	<div class="mt-12 p-6 pb-10 lg:mt-0">
		<slot />
	</div>
</div>

<style>
:global(a:hover) {
	@apply underline;
}
a {
	color: unset;
}
</style>
