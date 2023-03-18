<script>
	import '../app.css';
	import '../theme.css';
</script>

<div class="grid grid-cols-[auto_1fr] gap-8">
	<div
		class="inline-flex flex-col gap-2 text-2xl
                h-screen pt-4 px-8 shadow-xl"
	>
		<a class="mb-2" href="/">
			<img class="w-16 mx-auto" src="/colibri.svg" alt="Humming bird logo" />
		</a>
		<a href="/getting-started">Getting started</a>
		<a href="/button">Button</a>
		<a href="/modal">Modal</a>
		<a href="/portal">Portal</a>
	</div>
	<div class="p-6">
		<slot />
	</div>
</div>

<style>
	:global(a:hover) {
		@apply underline;
	}
</style>
