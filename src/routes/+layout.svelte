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
		<div>
			<a href="/modal">Modal</a>
			<ul class="text-lg text-gray-500">
				<li><a href="#basic">Basic usage</a></li>
				<li><a href="#props">Props</a></li>
				<ul>
					<li><a href="#open">open</a></li>
					<li><a href="#slim">slim</a></li>
					<li><a href="#fit">fit</a></li>
				</ul>
				<li><a href="#slots">Slots</a></li>
				<ul>
					<li><a href="#default">default</a></li>
					<li><a href="#title">title</a></li>
					<li><a href="#actions">actions</a></li>
				</ul>
				<li><a href="#events">Events</a></li>
				<ul>
					<li><a href="#close">close</a></li>
				</ul>
				<li><a href="#styling">Styling</a></li>
			</ul>
		</div>
		<a href="/portal">Portal</a>
	</div>
	<div class="p-6 pb-10">
		<slot />
	</div>
</div>
