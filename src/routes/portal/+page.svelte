<script>
import Page from '$layouts/page.svelte';

import Portal from '$components/portal.svelte';
import Prop from '$components/prop.svelte';

import descriptions from './descriptions.js';
import examples from './examples.js';

import template from './template.svelte?raw';

let content = examples.slots.default;

$: data = {
	slots: {
		default: content
	}
};
</script>

<Page title="Portal" {template} {data}>
	<svelte:fragment slot="description">
		Portals are a way to render content outside of the normal DOM location where
		they would be placed. Content inside of a portal will be moved the end of
		<span class="code text-black">{'<body>'}</span>
		. This can be useful to avoid inheriting any styling or positioning rules from
		parent elements, while still being able to keep the code for related parts together.
		A page can have as many portals as you need.
	</svelte:fragment>

	<svelte:fragment slot="example">
		<div id="parent">
			<div>
				This is regular content inside of a div with styling. Look at the bottom
				of the page to see a sibling element placed in a portal.
			</div>
			<Portal>
				<div id="portal" class="text-black">
					{content}
				</div>
			</Portal>
		</div>
	</svelte:fragment>

	<svelte:fragment slot="slots">
		<Prop
			title="default"
			type="textarea"
			description={descriptions.slots.default}
			example={examples.slots.default}
			bind:value={content} />
	</svelte:fragment>
</Page>
<div class="mt-[100px]" />

<style>
#parent {
	color: red;
}
#portal {
	position: fixed;
	bottom: 0;
	margin: 2rem;
	padding: 1rem;
	border-radius: 0.25rem;
	background: #d1d5db;
	opacity: 0.4;
	z-index: 999;
	transition: opacity 0.4s;
}
#portal:hover {
	opacity: 1;
}
</style>
