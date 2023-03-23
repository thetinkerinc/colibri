<script>
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
</style>

<div class="grid grid-cols-[auto_1fr] gap-8">
	<div
		class="sticky top-0 inline-flex h-screen
               flex-col gap-2 px-8 pt-4 text-xl shadow-xl">
		<a class="mb-2" href="/">
			<img class="mx-auto w-16" src="/colibri.svg" alt="Humming bird logo" />
		</a>
		<a href="/getting-started">Getting started</a>
		<div>
			<a href="/button">Button</a>
			<ul class="text-lg text-gray-500">
				<li><a href="#basic">Basic usage</a></li>
				<li><a href="#props">Props</a></li>
				<ul>
					<li><a href="#type">type</a></li>
					<li><a href="#disabled">disabled</a></li>
					<li><a href="#loading">loading</a></li>
					<li><a href="#rounded">rounded</a></li>
					<li><a href="#href">href</a></li>
					<li><a href="#external">external</a></li>
					<li><a href="#confirm">confirm</a></li>
					<li><a href="#class">class</a></li>
				</ul>
				<li><a href="#slots">Slots</a></li>
				<ul>
					<li><a href="#default">default</a></li>
					<li><a href="#confirm">confirm</a></li>
				</ul>
				<li><a href="#events">Events</a></li>
				<ul>
					<li><a href="#click">click</a></li>
					<li><a href="#disabledClick">disabledClick</a></li>
				</ul>
				<li><a href="#styling">Styling</a></li>
			</ul>
		</div>
		<a href="/modal">Modal</a>
		<a href="/portal">Portal</a>
	</div>
	<div class="p-6 pb-10">
		<slot />
	</div>
</div>
