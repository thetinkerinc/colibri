<script>
export let title;
export let template;
export let data;

import Example from '$components/example.svelte';
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>
<div class="text-3xl">{title}</div>
<div class="my-2 text-lg">
	<slot name="description" />
</div>

<Example {template} {data}>
	<slot name="example" />
</Example>

<div class="mt-4 rounded-lg border border-gray-300 py-2 px-4">
	<div class="grid grid-cols-1 gap-4 xl:grid-cols-2">
		<div>
			<div class="mb-1 rounded-t bg-gray-200 py-1 px-2 text-xl">Props</div>
			<div class="ml-6">
				<slot name="props">
					<div class="text-gray-500">This component doesn't have any props</div>
				</slot>
			</div>
		</div>

		<div>
			<div class="mb-1 rounded-t bg-gray-200 py-1 px-2 text-xl">Slots</div>
			<div class="ml-4">
				<slot name="slots">
					<div class="text-gray-500">This component doesn't have any slots</div>
				</slot>
			</div>
		</div>
	</div>

	<div class="mt-4 mb-1 rounded-t bg-gray-200 py-1 px-2 text-xl">Events</div>
	<div class="ml-4 flex flex-wrap gap-3">
		<slot name="events">
			<div class="text-gray-500">This component doesn't emit any events</div>
		</slot>
	</div>

	<div class="mt-4 mb-1 rounded-t bg-gray-200 py-1 px-2 text-xl">Styling</div>
	<div class="ml-4">
		<slot name="styling">
			<div class="text-gray-500">
				This component doesn't have any custom styling
			</div>
		</slot>
	</div>
</div>
