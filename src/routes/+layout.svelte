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
		class="inline-flex flex-col gap-2 text-xl
               h-screen sticky top-0 pt-4 px-8 shadow-xl">
		<a class="mb-2" href="/">
			<img class="w-16 mx-auto" src="/colibri.svg" alt="Humming bird logo" />
		</a>
		<a href="/getting-started">Getting started</a>
		<div>
			<a href="/button">Button</a>
			<ul class="text-lg text-gray-500">
				<li><a href="#">Basic usage</a></li>
				<li><a href="#">Props</a></li>
				<ul>
					<li><a href="#">type</a></li>
					<li><a href="#">disabled</a></li>
					<li><a href="#">loading</a></li>
					<li><a href="#">rounded</a></li>
					<li><a href="#">href</a></li>
					<li><a href="#">external</a></li>
					<li><a href="#">confirm</a></li>
					<li><a href="#">class</a></li>
				</ul>
				<li><a href="#">Events</a></li>
				<ul>
					<li><a href="#">click</a></li>
					<li><a href="#">disabledClick</a></li>
				</ul>
				<li><a href="#">Styling</a></li>
			</ul>
		</div>
		<a href="/modal">Modal</a>
		<a href="/portal">Portal</a>
	</div>
	<div class="p-6 pb-10">
		<slot />
	</div>
</div>
