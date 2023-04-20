<script>
export let component;

import dom from '$utils/dom.js';
import utils from '$utils/general.js';

import Input from '$components/input.svelte';

import styles from '../styles/all.css?inline';
import theme from '../themes/colibri.css?inline';

const override=new RegExp(
    `var\\(\\s*(--colibri-${component}-([a-z-]+)),\\s*var\\((--colibri-([a-z-]+))\\)\\s*\\);`,
    'g'
);
const custom=new RegExp(
    `var\\(\\s*(--colibri-${component}-([a-z-]+))\\s*\\);`,
    'g'
);

const definitions=[
    ...utils.unique(
        [...styles.matchAll(override)],
        v=>v[1]
    ),
    ...styles.matchAll(custom)
];

const variables=definitions.map(d=>getValue(d[3], d[1]));

function getValue(base, override){
    const re=new RegExp((base ?? override)+':\\s*([\\s\\S]*?);', 'g');
    const result=re.exec(theme);
    return result[1];
}
</script>

<div class="flex flex-col gap-3">
    {#each definitions as def, i}
        {@const isOverride = def.length===5}
        {@const isColor = dom.isColor(variables[i])}
        <div>
            <div class="flex items-center gap-2 mb-1">
                <div class="font-medium">{utils.kebab2camel(def[2])}:</div>
                <Input type="text" bind:value={variables[i]} />
                {#if isColor}
                    <div>
		                <div
			                class="h-6 w-6 rounded-full border border-black"
                            style="background: {variables[i]}" />
                    </div>
                {/if}
            </div>
            {#if isOverride}
                <div class="flex items-center gap-2 ml-4">
                    <i class="fa-solid fa-turn-up fa-rotate-90 text-gray-500"></i>
                    <div class="text-gray-500">Overrides:</div>
                    <a href="/editor#{def[3]}">
                        <div class="code text-rose-500">{def[3]}</div>
                    </a>
                </div>
            {/if}
        </div>
    {/each}
</div>
