<script>
export let component;

import dom from '$utils/dom.js';
import css from '$utils/css.js';
import utils from '$utils/general.js';
import { themeVariables, themeObject } from '$utils/theme.js';

import Input from '$components/input.svelte';

const definitions = css.getVariableDefinitions(component);

const data = {};

definitions.map((d) => {
	const variable = d.isOverride ? d.baseVariable : d.variable;
	const value = getValue(d.props);
	const fallback = css.getValue(variable);
	data[d.props.component] = {
		value: value ?? fallback,
		default: fallback
	};
});

$: mergeStyles(data);

function getValue(props) {
	return $themeVariables[props.theme] ?? $themeVariables[props.base];
}

function mergeStyles() {
	const localVariables = {};
	for (let d of definitions) {
		const current = data[d.props.component];
		const isDifferent = current.value !== current.default;
		if (isDifferent) {
			$themeVariables[d.props.theme] = current.value;
			localVariables[d.props.component] = current.value;
		} else {
			delete $themeVariables[d.props.theme];
		}
	}
	$themeObject[component] = $themeObject[component] ?? {};
	$themeObject[component].variables = localVariables;
	$themeObject = utils.clean($themeObject);
}
</script>

<div class="flex flex-col gap-3">
	{#each definitions as def}
		{@const prop = def.props.component}
		{@const isColor = dom.isColor(data[prop].default)}
		<div>
			<div class="mb-1 flex items-center gap-2">
				<div class="font-medium">{prop}:</div>
				<Input type="text" bind:value={data[prop].value}>
					<svelte:fragment slot="after">
						{#if data[prop].value !== data[prop].default}
							<i
								class="fa-solid fa-rotate-left text-gray-400 hover:text-gray-500"
								on:click={() => (data[prop].value = data[prop].default)} />
						{/if}
					</svelte:fragment>
				</Input>
				{#if isColor}
					<div>
						<div
							class="h-6 w-6 rounded-full border border-black"
							style="background: {data[prop].value}" />
					</div>
				{/if}
			</div>
			{#if def.isOverride}
				<div class="ml-4 flex items-center gap-2">
					<i class="fa-solid fa-turn-up fa-rotate-90 text-gray-500" />
					<div class="text-gray-500">Overrides:</div>
					<a href="/theme-editor#{def.baseVariable}">
						<div class="code text-rose-500">{def.baseVariable}</div>
					</a>
				</div>
			{/if}
		</div>
	{/each}
</div>
