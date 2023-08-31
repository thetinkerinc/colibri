<script>
import Page from '$layouts/page.svelte';

import Card from '$components/card.svelte';
import Prop from '$components/prop.svelte';
import Styling from '$components/styling.svelte';
import Html from '$components/html.svelte';

import descriptions from './descriptions.js';

import template from './template.svelte?raw';

let content =
	'<div style="text-align: center">\n' +
	'Hello, I am content inside of a card.\n' +
	'<br />\n' +
	'You can put anything you want inside of me.\n' +
	'</div>';
let style;

$: data = {
	slots: {
		default: content
	}
};
</script>

<Page title="Card" canStyle={true} {template} {data}>
	<svelte:fragment slot="description">
		A simple container component to hold arbitrary content. It can be used as a
		visual separator or to call attention to pieces of information.
	</svelte:fragment>

	<svelte:fragment slot="example">
		<Card {style}>
			<Html html={content} />
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
		<Styling component="card" sections={['body']} bind:style />
	</svelte:fragment>
</Page>
