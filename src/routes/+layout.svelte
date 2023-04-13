<script>
import MenuSection from './menu-section.svelte';
import MenuItem from './menu-item.svelte';

import '../app.css';
import '../theme.css';
</script>

<style>
:global(a:hover) {
	@apply underline;
}
a {
	color: unset;
}
</style>

<div class="grid grid-cols-[auto_1fr] gap-8">
	<div
		class="sticky top-0 inline-flex h-screen flex-col
               gap-2 overflow-y-auto px-8 py-4 text-xl shadow-xl">
		<a class="mb-2" href="/">
			<img class="mx-auto w-16" src="/colibri.svg" alt="Humming bird logo" />
		</a>
		<MenuItem title="Getting started" />
		<MenuSection title="Display">
			<MenuItem title="Accordian" />
			<MenuItem title="Modal" />
			<MenuItem title="Tooltip" />
		</MenuSection>
		<MenuSection title="Form">
			<MenuItem title="Button" />
		</MenuSection>
		<MenuSection title="Utility">
			<MenuItem title="Anchored" />
			<MenuItem title="Portal" />
		</MenuSection>
	</div>
	<div class="p-6 pb-10">
		<slot />
	</div>
</div>
