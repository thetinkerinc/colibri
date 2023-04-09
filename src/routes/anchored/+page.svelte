<script>
import { onMount } from 'svelte';

import Anchored from '$components/_anchored.svelte';
import Example from '$components/example.svelte';

import Props from './props.svelte';

import pan from './pan.js';

import basic from './basic.svelte?raw';

onMount(() => {
	const elemBounds = elem.getBoundingClientRect();
	const containerBounds = container.getBoundingClientRect();
	container.scrollBy(
		elemBounds.x -
			containerBounds.x -
			containerBounds.width / 2 +
			elemBounds.width / 2,
		elemBounds.y -
			containerBounds.y -
			containerBounds.height / 2 +
			elemBounds.height / 2
	);
});

let container;
let elem;
let open = false;
</script>

<svelte:head>
	<title>Anchored</title>
</svelte:head>
<div class="mb-1 text-3xl">Anchored</div>
<div class="text-lg">
	A utility component which anchors content to another element. Anchored is
	meant to be a base from which you can build any component which needs to be
	positioned relative to another. Some examples in Colibri are the tooltip
	(documentation, source code) and the date picker (documentation, source code).
	<br /><br />
	Anchored will position content around, or centered on top of another element, and
	keep it aligned when scrolling or resizing even when placed inside nested scrollable
	containers. The content will attempt to stay visible as long as possible when scrolling
	or resizing, but will close automatically if it lies mostly out of frame.
	<br /><br />
	<div class="font-bold">Important notes</div>
	<ul class="list-inside list-disc">
		<li>
			For any components where you can't <span class="code">bind:this</span>,
			you can wrap the component in a native DOM node and use that. All Colibri
			components export a
			<span class="code">this</span>
			which is the outermost container node of the component.
		</li>
		<li>
			If you are using a click or a tap as a trigger to open anchored content,
			make sure to use
			<span class="code">on:click|stopPropagation</span>. Otherwise, the event
			will bubble up to the window which will then immediately close the
			content.
		</li>
	</ul>
</div>

<div id="basic" class="mt-4 text-2xl">Basic usage</div>
<Example code={basic}>
	<div
		class="max-h-[580px] overflow-auto"
		bind:this={container}
		on:click|stopPropagation
		on:keyup|stopPropagation
		use:pan>
		<div class="ml-[1000px] mt-[1000px] h-[2000px] w-[1000px]">
			<div
				class="inline-block rounded border border-gray-300 bg-white py-2 px-4"
				bind:this={elem}
				on:click|stopPropagation={() => (open = !open)}
				on:keyup|stopPropagation={() => (open = !open)}>
				Click on me to see the anchored element
			</div>
		</div>
	</div>
	<Anchored bind:open position="bottom" anchor={elem}>
		<div
			class="max-w-[300px] rounded border border-gray-300 bg-emerald-200 py-2 px-4 text-center">
			Click and drag the background to see how I react when scrolling
		</div>
	</Anchored>
</Example>

<div id="props" class="mt-4 text-2xl">Props</div>
<div class="ml-4">
	<Props />
</div>
