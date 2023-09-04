<script>
export let title;
export let component = undefined;
export let canStyle = false;
export let template;
export let data;

import { Github } from 'lucide-svelte';

import utils from '$utils/general.js';

import Example from '$components/example.svelte';
import Prop from '$components/prop.svelte';

const slug = component ?? utils.slugify(title);
const styleDescription =
	'A style object to override theme ' +
	'values for a component. See the styling ' +
	'section below to construct a style object ' +
	'and for more information on how to use it.';
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<div class="flex items-center gap-5">
	<div class="text-3xl">{title}</div>
	<a
		href="https://github.com/thetinkerinc/colibri/blob/main/src/lib/components/{slug}.svelte"
		target="_blank">
		<Github class="text-gray-400 hover:text-black" />
	</a>
</div>

<div class="my-2 text-lg">
	<slot name="description" />
</div>

<Example {template} {data}>
	<slot name="example" />
</Example>

<div class="mt-4 rounded-lg border border-gray-300 px-4 py-2">
	<div class="grid grid-cols-1 gap-4 xl:grid-cols-2">
		<div>
			<div class="mb-1 rounded-t bg-gray-200 px-2 py-1 text-xl text-black">
				Props
			</div>
			<div class="ml-6">
				<slot name="props">
					{#if !canStyle}
						<div class="text-gray-500">
							This component doesn't have any props
						</div>
					{/if}
				</slot>
				{#if canStyle}
					<Prop title="style" description={styleDescription}>Object</Prop>
				{/if}
			</div>
		</div>

		<div>
			<div class="mb-1 rounded-t bg-gray-200 px-2 py-1 text-xl text-black">
				Slots
			</div>
			<div class="ml-4">
				<slot name="slots">
					<div class="text-gray-500">This component doesn't have any slots</div>
				</slot>
			</div>
		</div>
	</div>

	<div class="mb-1 mt-4 rounded-t bg-gray-200 px-2 py-1 text-xl text-black">
		Events
	</div>
	<div class="ml-4 flex flex-wrap gap-3">
		<slot name="events">
			<div class="text-gray-500">This component doesn't emit any events</div>
		</slot>
	</div>

	<div class="mb-1 mt-4 rounded-t bg-gray-200 px-2 py-1 text-xl text-black">
		Styling
	</div>
	<div class="ml-4">
		<slot name="styling">
			<div class="text-gray-500">
				This component doesn't have any custom styling
			</div>
		</slot>
	</div>
</div>
