<script>
export let sections;
export let properties;

import Input from '$components/input.svelte';

const data={};

for (let section of sections){
    data[section]={
        class: undefined,
        inlines: []
    };
}

$: properties=makeProperties(data);

function addRule(section){
    return ()=>{
        const rules=data[section].inlines;
        data[section].inlines=[
            ...rules,
            []
        ];
    };
}

function removeRule(section, i){
    return ()=>{
        const rules=data[section].inlines;
        data[section].inlines=[
            ...rules.slice(0, i),
            ...rules.slice(i+1)
        ];
    };
}

function makeProperties(){
    const out={};
    for (let section of sections){
        if (!data[section].class && !hasInlines(section)){
            continue;
        }
        out[section]={};
        if (data[section].class){
            out[section].class=data[section].class;
        }
        if (hasInlines(section)){
            for (let [p, v] of getInlines(section)){
                out[section][p]=v;
            }
        }
    }
    return out;
}

function hasInlines(section){
    return data[section].inlines.some(r=>r?.[0] && r?.[1]);
}

function getInlines(section){
    return data[section].inlines.filter(r=>r?.[0] && r?.[1]);
}
</script>

{#each sections as section}
    <div class="text-lg mt-3 first:mt-0">{section}</div>
    <div class="ml-4">
        <div class="flex items-center gap-2 mb-2">
            <div class="font-medium">class:</div>
            <Input type="text" placeholder="Classes" bind:value={data[section].class} />
        </div>
        <div class="flex flex-wrap items-center gap-2">
            <div class="font-medium">inline:</div>
            {#each data[section].inlines as rule, i}
                <div class="flex items-center gap-1 max-w-[300px]">
                    <Input type="text" placeholder="Property" bind:value={rule[0]} />
                    <div>:</div>
                    <Input type="text" placeholder="Value" bind:value={rule[1]} />
				    <div
					    class="mr-1 cursor-default text-[1.6rem] leading-[0.5] text-gray-500"
					    on:click={removeRule(section, i)}>
					    &times;
				    </div>
                    {#if i!==data[section].inlines.length-1}
                        <div class="text-lg mr-1">,</div>
                    {/if}
                </div>
            {/each}
            <i class="fa-solid fa-square-plus fa-xl text-gray-400 hover:text-gray-500" on:click={addRule(section)}></i>
        </div>
    </div>
{/each}
