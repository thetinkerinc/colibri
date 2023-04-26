<script>
export let component;
export let variables;

import dom from '$utils/dom.js';
import css from '$utils/css.js';
import utils from '$utils/general.js';
import { themeVariables } from '$utils/theme';

import Input from '$components/input.svelte';

const definitions = css.getVariableDefinitions(component);

const data = {};

definitions.map((d) => {
	const value = getValue(d.props.override, d.props.global);
	data[d.props.local] = {
		value: variables?.[d.props.local] ?? value,
		default: value
	};
});

$: variables = makeVariables(data);
$: $themeVariables = mergeStyles(variables);

function getValue(base, override) {
	return $themeVariables[base] ?? $themeVariables[override];
}

function makeVariables() {
	const out = {};
	for (let [k, v] of Object.entries(data)) {
		if (v.value && v.value !== v.default) {
			out[k] = v.value;
		}
	}
	return out;
}

function mergeStyles() {
	const out = utils.clone($themeVariables);
	for (let d of definitions) {
		const isDifferent =
			data[d.props.local].value !== data[d.props.local].default;
		if (isDifferent || !d.isOverride) {
			out[d.props.global] = data[d.props.local].value;
		} else {
			delete out[d.props.global];
		}
	}
	return out;
}
</script>

<div class="flex flex-col gap-3">
	{#each definitions as def}
		{@const isColor = dom.isColor(data[def.props.local].default)}
		<div>
			<div class="mb-1 flex items-center gap-2">
				<div class="font-medium">{def.props.local}:</div>
				<Input type="text" bind:value={data[def.props.local].value}>
					<svelte:fragment slot="after">
						{#if data[def.props.local].value !== data[def.props.local].default}
							<i
								class="fa-solid fa-rotate-left text-gray-400 hover:text-gray-500"
								on:click={() =>
									(data[def.props.local].value =
										data[def.props.local].default)} />
						{/if}
					</svelte:fragment>
				</Input>
				{#if isColor}
					<div>
						<div
							class="h-6 w-6 rounded-full border border-black"
							style="background: {data[def.props.local].value}" />
					</div>
				{/if}
			</div>
			{#if def.isOverride}
				<div class="ml-4 flex items-center gap-2">
					<i class="fa-solid fa-turn-up fa-rotate-90 text-gray-500" />
					<div class="text-gray-500">Overrides:</div>
					<a href="/theme-editor#{def.override}">
						<div class="code text-rose-500">{def.override}</div>
					</a>
				</div>
			{/if}
		</div>
	{/each}
</div>
