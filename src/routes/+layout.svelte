<script>
import MenuItem from './menu-item.svelte';

import '../app.css';
import '../theme.css';
</script>

<style>
:global(a:hover) {
	@apply underline;
}
ul {
	@apply ml-6;
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
		<MenuItem title="Anchored">
			<ul>
				<li><a href="#basic">Basic usage</a></li>
				<li><a href="#props">Props</a></li>
				<ul>
					<li><a href="#open">open</a></li>
					<li><a href="#anchor">anchor</a></li>
					<li><a href="#position">position</a></li>
					<li><a href="#nudge">nudge</a></li>
				</ul>
				<li><a href="#slots">Slots</a></li>
				<ul>
					<li><a href="default">default</a></li>
					<li><a href="decoration">decoration</a></li>
				</ul>
			</ul>
		</MenuItem>
		<MenuItem title="Accordian">
			<ul>
				<li><a href="#basic">Basic usage</a></li>
				<li><a href="#props">Props</a></li>
				<ul>
					<li><a href="#multiple">multiple</a></li>
				</ul>
				<!-- slots -->
				<li><a href="#styling">Styling</a></li>
			</ul>
		</MenuItem>
		<MenuItem title="Button" />
		<MenuItem title="Modal" />
		<MenuItem title="Portal">
			<ul>
				<li><a href="#basic">Basic usage</a></li>
				<!-- slots -->
			</ul>
		</MenuItem>
	</div>
	<div class="p-6 pb-10">
		<slot />
	</div>
</div>
