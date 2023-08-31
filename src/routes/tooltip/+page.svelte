<script>
import Page from '$layouts/page.svelte';

import Tooltip from '$components/tooltip.svelte';
import Prop from '$components/prop.svelte';
import Styling from '$components/styling.svelte';
import Html from '$components/html.svelte';

import descriptions from './descriptions.js';

import template from './template.svelte?raw';

let element;
let open = false;
let style;

let content = "Hi! I'm in a tooltip.";

$: data = {
	props: {
		open
	},
	slots: {
		default: content
	}
};
</script>

<Page title="Tooltip" canStyle={true} {template} {data}>
	<svelte:fragment slot="description">
		Tooltips allow you to place extra information or markup in a container which
		can be opened as dismissed as necessary. Tooltips are bound to elements in
		the DOM, and are dismissed automatically when the window receives a click
		event. If you want to process a click event somewhere else without
		dismissing a tooltip, make sure to use
		<span class="code text-black">on:click|stopPropagation</span>.
	</svelte:fragment>

	<svelte:fragment slot="example">
		<div
			class="cursor-default rounded border border-gray-300 bg-white px-4 py-2 text-black"
			bind:this={element}
			on:click={() => (open = !open)}
			on:keyup={() => (open = !open)}>
			Open a tooltip
		</div>
		<Tooltip {element} {style} bind:open>
			<Html html={content} />
		</Tooltip>
	</svelte:fragment>

	<svelte:fragment slot="props">
		<div on:click|stopPropagation on:keyup|stopPropagation>
			<Prop
				title="open"
				type="boolean"
				description={descriptions.props.open}
				bind:value={open} />
			<Prop title="element" description={descriptions.props.element}>
				<a
					href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement"
					target="_blank">
					HTMLElement
				</a>
			</Prop>
		</div>
	</svelte:fragment>

	<svelte:fragment slot="slots">
		<div on:click|stopPropagation on:keyup|stopPropagation>
			<Prop
				title="default"
				type="textarea"
				description={descriptions.slots.default}
				bind:value={content} />
		</div>
	</svelte:fragment>

	<svelte:fragment slot="styling">
		<Styling component="tooltip" sections={['body', 'arrow']} bind:style />
	</svelte:fragment>
</Page>
