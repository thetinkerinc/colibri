<script>
export let component;

import { getContext } from 'svelte';

import dom from '$utils/dom.js';
import css from '$utils/css.js';
import utils from '$utils/general.js';

import Input from '$components/input.svelte';

const { selectedThemeObject, userThemeObject } = getContext('theme');

const definitions = css.getVariableDefinitions(component);

const data = {};

definitions.map((d) => {
	const value = getValue(d.prop, d.baseProp);
	const fallback = getFallback(d.prop, d.baseProp);
	data[d.prop] = {
		value: value ?? fallback,
		default: fallback
	};
});

$: mergeStyles(data);

function getValue(prop, baseProp) {
	return (
		$userThemeObject[component]?.variables?.[prop] ??
		$userThemeObject.variables[baseProp]
	);
}

function getFallback(prop, baseProp) {
	return (
		$selectedThemeObject[component]?.variables?.[prop] ??
		$selectedThemeObject.variables[baseProp]
	);
}

function mergeStyles() {
	$userThemeObject[component] = $userThemeObject[component] ?? {};
	$userThemeObject[component].variables =
		$userThemeObject[component].variables ?? {};
	for (let d of definitions) {
		const current = data[d.prop];
		const isDifferent = current.value !== current.default;
		if ((d.isOverride && isDifferent) || !d.isOverride) {
			$userThemeObject[component].variables[d.prop] = current.value;
		}
		if (d.isOverride && !isDifferent) {
			delete $userThemeObject[component].variables[d.prop];
		}
	}
	$userThemeObject = utils.clean($userThemeObject);
}
</script>

<div class="flex flex-col gap-3">
	{#each definitions as def}
		{@const isColor = dom.isColor(data[def.prop].default)}
		<div>
			<div class="mb-1 flex items-center gap-2">
				<div class="font-medium">{def.prop}:</div>
				<Input
					type={isColor ? 'color' : 'text'}
					bind:value={data[def.prop].value}>
					<svelte:fragment slot="after">
						{#if data[def.prop].value !== data[def.prop].default}
							<i
								class="fa-solid fa-rotate-left text-gray-400 hover:text-gray-500"
								on:click={() =>
									(data[def.prop].value = data[def.prop].default)} />
						{/if}
					</svelte:fragment>
				</Input>
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
