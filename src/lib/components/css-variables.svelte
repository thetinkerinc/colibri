<script>
export let component;

import { getContext } from 'svelte';
import { RotateCcw, CornerDownRight } from 'lucide-svelte';

import dom from '$utils/dom.js';
import css from '$utils/css.js';
import utils from '$utils/general.js';

import Input from '$components/input.svelte';

const { selectedThemeObject, userThemeObject } = getContext('theme');

const definitions = css.getVariableDefinitions(component);

const data = {};

definitions.map((d) => {
	const value = getValue(d.prop) ?? getBaseValue(d.bsaeProp);
	const fallback = getDefault(d.prop) ?? getBaseDefault(d.baseProp);
	data[d.prop] = {
		value: value ?? fallback,
		default: fallback,
		valueWasFromBase: d.isOverride && !getDefault(d.prop)
	};
});

$: mergeStyles(data);

function getValue(prop) {
	return $userThemeObject[component]?.variables?.[prop];
}

function getBaseValue(prop) {
	return $userThemeObject.variables[prop];
}

function getDefault(prop) {
	return $selectedThemeObject[component]?.variables?.[prop];
}

function getBaseDefault(prop) {
	return $selectedThemeObject.variables[prop];
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
		if (current.valueWasFromBase && !isDifferent) {
			delete $userThemeObject[component].variables[d.prop];
		}
	}
	$userThemeObject = utils.clean($userThemeObject);
}
</script>

<div class="flex flex-col gap-3">
	{#each definitions as def}
		{@const isColor = dom.isColor(data[def.prop].default)}
		{@const reset = () => (data[def.prop].value = data[def.prop].default)}
		<div>
			<div class="mb-1 flex items-center gap-2">
				<div class="font-medium">{def.prop}:</div>
				<Input
					type={isColor ? 'color' : 'text'}
					bind:value={data[def.prop].value}>
					<svelte:fragment slot="after">
						{#if data[def.prop].value !== data[def.prop].default}
							<button
								class="text-gray-400 hover:text-gray-500"
								on:click={reset}>
								<RotateCcw size={20} />
							</button>
						{/if}
					</svelte:fragment>
				</Input>
			</div>
			{#if def.isOverride}
				<div class="ml-4 flex items-center gap-2">
					<CornerDownRight class="text-gray-500" />
					<div class="text-gray-500">Overrides:</div>
					<a href="/theme-editor#{def.baseVariable}">
						<div class="code text-rose-500">{def.baseVariable}</div>
					</a>
				</div>
			{/if}
		</div>
	{:else}
		<div class="text-gray-500">
			This component doesn't have any custom variables
		</div>
	{/each}
</div>
