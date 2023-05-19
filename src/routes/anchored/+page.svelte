<script>
import { onMount } from 'svelte';

import Page from '$layouts/page.svelte';

import Anchored from '$components/_anchored.svelte';
import Prop from '$components/prop.svelte';

import pan from './pan.js';
import descriptions from './descriptions.js';
import examples from './examples.js';

import template from './template.svelte?raw';

onMount(() => {
	centerElement();
});

const positions = ['center', 'top', 'left', 'bottom', 'right'];

let container;
let elem;
let open = false;
let position;
let nudgeHorizontal;
let nudgeVertical;

let content = 'Click and drag the background to see how I react when scrolling';
let decoration;

$: data = {
	props: {
		open,
		position,
		nudgeHorizontal,
		nudgeVertical
	},
	slots: {
		default: content,
		decoration
	}
};

function centerElement() {
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
}
</script>

<Page title="Anchored" component="_anchored" {template} {data}>
	<svelte:fragment slot="description">
		A utility component which anchors content to another element. Anchored is
		meant to be a base from which you can build any component which needs to be
		positioned relative to another. Some examples in Colibri are the tooltip (
		<a href="/tooltip">docs</a>,
		<a
			href="https://github.com/thetinkerinc/colibri/blob/main/src/lib/components/tooltip.svelte"
			target="_blank">
			source
		</a>
		) and the date picker (
		<a href="/date-picker">docs</a>,
		<a
			href="https://github.com/thetinkerinc/colibri/blob/main/src/lib/components/date-picker.svelte"
			target="_blank">
			source
		</a>
		).
		<br /><br />
		Anchored will position content around, or centered on top of another element,
		and keep it aligned when scrolling or resizing even when placed inside nested
		scrollable containers. The content will attempt to stay visible as long as possible
		when scrolling or resizing, but will close automatically if it lies mostly out
		of frame.
		<br /><br />
		<div class="font-bold">Important notes</div>
		<ul class="list-inside list-disc">
			<li>
				For any components where you can't
				<span class="code text-black">bind:this</span>, you can wrap the
				component in a native DOM node and use that. All Colibri components
				export
				<span class="code text-black">element</span>
				which is the outermost container node of the component.
			</li>
			<li>
				The content is not automatically dismissed based on certain actions, for
				example clicking outside or pressing escape. This behavior will have to
				be implemented in the parent component. If you decide to dismiss on
				click events and the trigger also uses a click event, make sure to use
				<span class="code text-black">on:click|stopPropagation</span>
				on the trigger. Otherwise the event will bubble up and immediately close
				the content.
			</li>
		</ul>
	</svelte:fragment>

	<svelte:fragment slot="example">
		<i
			class="fa-solid fa-compress fa-xl absolute right-[40px] top-[20px] z-10"
			title="Center element"
			on:click={centerElement}
			on:keyup={centerElement} />
		<div
			class="relative max-h-[580px] w-full overflow-auto"
			bind:this={container}
			on:click
			on:keyup
			use:pan>
			<div class="ml-[1000px] mt-[1000px] h-[2000px] w-[1000px]">
				<div
					class="inline-block max-w-[100px] rounded border border-gray-300 bg-white px-4 py-2 text-center"
					bind:this={elem}
					on:click={() => (open = !open)}
					on:keyup={() => (open = !open)}>
					Click on me
				</div>
			</div>
		</div>
		{#if decoration}
			<Anchored
				bind:open
				anchor={elem}
				{position}
				{nudgeHorizontal}
				{nudgeVertical}>
				<div
					class="max-w-[200px] rounded border border-gray-300 bg-emerald-200 px-4 py-2 text-center">
					{@html content}
				</div>
				<svelte:fragment slot="decoration">
					{@html decoration}
				</svelte:fragment>
			</Anchored>
		{:else}
			<Anchored
				bind:open
				anchor={elem}
				{position}
				{nudgeHorizontal}
				{nudgeVertical}>
				<div
					class="max-w-[200px] rounded border border-gray-300 bg-emerald-200 px-4 py-2 text-center">
					{@html content}
				</div>
			</Anchored>
		{/if}
	</svelte:fragment>

	<svelte:fragment slot="props">
		<Prop
			title="open"
			type="boolean"
			description={descriptions.props.open}
			bind:value={open} />
		<Prop title="anchor" description={descriptions.props.anchor}>
			<a
				href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement"
				target="_blank">
				HTMLElement
			</a>
		</Prop>
		<Prop
			title="position"
			type="string"
			values={positions}
			description={descriptions.props.position}
			bind:value={position} />
		<Prop
			title="nudgeHorizontal"
			type="number"
			description={descriptions.props.nudgeHorizontal}
			bind:value={nudgeHorizontal} />
		<Prop
			title="nudgeVertical"
			type="number"
			description={descriptions.props.nudgeVertical}
			bind:value={nudgeVertical} />
	</svelte:fragment>

	<svelte:fragment slot="slots">
		<Prop
			title="default"
			type="textarea"
			description={descriptions.slots.default}
			bind:value={content} />
		<Prop
			title="decoration"
			type="textarea"
			description={descriptions.slots.decoration}
			example={examples.slots.decoration}
			bind:value={decoration} />
	</svelte:fragment>
</Page>
