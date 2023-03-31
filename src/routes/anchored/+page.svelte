<script>
import { onMount } from 'svelte';

import Anchored from '$components/_anchored.svelte';
import Example from '$components/example.svelte';

import basic from './basic.svelte?raw';

onMount(() => {
	container.scrollBy(300, 150);
});

let container;
let elem;
let open = false;
</script>

<svelte:head>
	<title>Anchored</title>
</svelte:head>
<div class="mb-1 text-3xl">Anchored</div>
A utility component which anchors content to another element. Anchored is meant to be a base from which
you can build any component which needs to be positioned relative to another. Some examples in Colibri
are the tooltip (documentation, source code) and the date picker (documentation, source code).
<br /><br />
Anchored will position content around, or centered on top of another element, and keep it aligned when
scrolling or resizing even when placed inside nested scrollable containers. The content will attempt
to stay visible as long as possible when scrolling or resizing, but will close automatically if it lies
mostly out of frame.
<br /><br />
<div class="font-bold">Important notes</div>
<ul class="list-inside list-disc">
	<li>
		For any components where you can't <span class="code">bind:this</span>, you can wrap the
		component in a native DOM node and use that. All Colibri components export a
		<span class="code">this</span>
		which is the outermost container node of the component.
	</li>
	<li>
		If you are using a click or a tap as a trigger to open anchored content, make sure to use
		<span class="code">on:click|stopPropagation</span>. Otherwise, the event will bubble up to the
		window which will then immediately close the content.
	</li>
</ul>
<div class="text-lg" />

<div id="basic" class="mt-4 text-2xl">Basic usage</div>
<Example code={basic}>
	<div class="max-h-[580px] overflow-auto" bind:this={container}>
		<div class="ml-[400px] mt-[400px] h-[800px] w-[800px]">
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
		<div class="rounded border border-gray-300 bg-emerald-200 py-2 px-4">
			Scroll around to see how I react
		</div>
	</Anchored>
</Example>
