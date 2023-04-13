<script>
import Page from '$layouts/page.svelte';

import Card from '$components/card.svelte';
import Prop from '$components/prop.svelte';
import CssVariable from '$components/css-variable.svelte';

import descriptions from './descriptions.js';

import template from './template.svelte?raw';

let content =
	'<div style="text-align: center">\n' +
	'Hello, I am content inside of a card.\n' +
	'<br />\n' +
	'You can put anything you want inside of me.\n' +
	'</div>';

$: data = {
	slots: {
		default: content
	}
};
</script>

<Page title="Card" {template} {data}>
	<svelte:fragment slot="description">
		A simple container component to hold arbitrary content. It can be used as a
		visual separator or to call attention to pieces of information.
	</svelte:fragment>

	<svelte:fragment slot="example">
		<Card>
			{@html content}
		</Card>
	</svelte:fragment>

	<svelte:fragment slot="slots">
		<Prop
			title="default"
			type="textarea"
			description={descriptions.slots.default}
			bind:value={content} />
	</svelte:fragment>

	<svelte:fragment slot="styling">
		<CssVariable
			variable="--colibri-background-color"
			override="--colibri-card-background-color"
			type="color" />
		<CssVariable
			variable="--colibri-border"
			override="--colibri-card-border"
			value="1px solid #d1d5db" />
		<CssVariable
			variable="--colibri-border-radius-lg"
			override="--colibri-card-border-radius"
			value="0.5rem;" />
		<CssVariable variable="--colibri-padding" value="0.75rem 1.25rem" />
		<CssVariable
			variable="--colibri-shadow"
			override="--colibri-card-shadow"
			value="0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)" />
	</svelte:fragment>
</Page>
