<script>
export let component;
export let variables;

import dom from '$utils/dom.js';
import utils from '$utils/general.js';

import Input from '$components/input.svelte';

import styles from '../styles/all.css?inline';
import theme from '../themes/colibri.css?inline';

const override = new RegExp(
	`var\\(\\s*(--colibri-${component}-([a-z-]+)),\\s*var\\((--colibri-([a-z-]+))\\)\\s*\\);`,
	'g'
);
const custom = new RegExp(
	`var\\(\\s*(--colibri-${component}-([a-z-]+))\\s*\\);`,
	'g'
);

const definitions = [
	...utils.unique([...styles.matchAll(override)], (v) => v[1]),
	...styles.matchAll(custom)
];

const data = {};

definitions.map((d) => {
	const prop = utils.kebab2camel(d[2]);
	const value = getValue(d[3], d[1]);
	data[prop] = {
		value: variables?.[prop] ?? value,
		default: value
	};
});

$: variables = makeVariables(data);

function makeVariables() {
	const out = {};
	for (let [k, v] of Object.entries(data)) {
		if (v.value !== v.default) {
			out[k] = v.value;
		}
	}
	return out;
}

function getValue(base, override) {
	const re = new RegExp((base ?? override) + ':\\s*([\\s\\S]*?);', 'g');
	const result = re.exec(theme);
	return result[1].replace(/\n/g, '');
}
</script>

<div class="flex flex-col gap-3">
	{#each definitions as def}
		{@const prop = utils.kebab2camel(def[2])}
		{@const isOverride = def.length === 5}
		{@const isColor = dom.isColor(data[prop].default)}
		<div>
			<div class="mb-1 flex items-center gap-2">
				<div class="font-medium">{prop}:</div>
				<Input type="text" bind:value={data[prop].value} />
				{#if isColor}
					<div>
						<div
							class="h-6 w-6 rounded-full border border-black"
							style="background: {data[prop].value}" />
					</div>
				{/if}
			</div>
			{#if isOverride}
				<div class="ml-4 flex items-center gap-2">
					<i class="fa-solid fa-turn-up fa-rotate-90 text-gray-500" />
					<div class="text-gray-500">Overrides:</div>
					<a href="/editor#{def[3]}">
						<div class="code text-rose-500">{def[3]}</div>
					</a>
				</div>
			{/if}
		</div>
	{/each}
</div>
