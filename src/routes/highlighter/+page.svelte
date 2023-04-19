<script>
import Page from '$layouts/page.svelte';

import Highlighter from '$components/_highlighter.svelte';
import Prop from '$components/prop.svelte';
import CssVariable from '$components/css-variable.svelte';

import descriptions from './descriptions.js';
import examples from './examples.js';

import template from './template.svelte?raw';

import 'prismjs/components/prism-python';

const python = 'import numpy as np\nnums = np.random.normal(0, 0.1, 25)';

let code = examples.props.code;
let strict = false;

$: data = {
	props: {
		code,
		strict
	}
};
</script>

<Page title="Highlighter" {template} {data}>
	<svelte:fragment slot="description">
		A component to show highlighted code using
		<a href="https://prismjs.com/" target="_blank">Prism.js</a>. The component
		highlights the supplied code reactively, but doesn't load any languages by
		default. You can decide which languages you would like to load, as well as
		external libraries and the theme.
		<br /><br />
		It is recommended to wrap the Highlighter component in another component which
		imports the necessary languages and themes to avoid duplicated logic.
		<br /><br />
		If you have a large code sample you would like to keep separate,
		<a
			href="https://vitejs.dev/guide/assets.html#importing-asset-as-string"
			target="_blank">
			vite allows you to import files as a string.
		</a>
		For example:
		<span class="code">import code from './code.svelte?raw';</span>
	</svelte:fragment>

	<svelte:fragment slot="example">
		<div class="flex flex-col gap-2">
			<div class="overflow-hidden rounded">
				<Highlighter language="svelte" {code} {strict} />
			</div>
			<div class="overflow-hidden rounded">
				<Highlighter language="python" code={python} />
			</div>
		</div>
	</svelte:fragment>

	<svelte:fragment slot="props">
		<Prop title="language" description={descriptions.props.language}>
			string -
			<a href="https://prismjs.com/#supported-languages" target="_blank">
				Prism language
			</a>
		</Prop>
		<Prop
			title="code"
			type="textarea"
			description={descriptions.props.code}
			example={examples.props.code}
			bind:value={code} />
		<Prop title="format" description={descriptions.props.format}>
			function(code: string): string
		</Prop>
		<Prop
			title="strict"
			type="boolean"
			description={descriptions.props.strict}
			bind:value={strict} />
	</svelte:fragment>

	<svelte:fragment slot="styling">
		<CssVariable variable="--colibri-highlighter-background" type="color" />
		<CssVariable variable="--colibri-highlighter-font-color" type="color" />
		<CssVariable variable="--colibri-highlighter-paddng" value="1rem" />
		<CssVariable variable="--colibri-highlighter-max-height" value="600px" />
	</svelte:fragment>
</Page>
