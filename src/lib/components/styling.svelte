<script>
export let component;

import CssVariables from '$components/css-variables.svelte';

let mode = 'properties';

function setMode(m){
    return ()=>{
        mode=m;
    };
}
</script>

<style>
 .active {
     @apply border-b-[3px] border-b-blue-500;
 }
</style>

<div class="flex gap-3 text-xl cursor-default mb-4">
    <div class:active={mode==='properties'} on:click={setMode('properties')}>Properties</div>
    <div class:active={mode==='variables'} on:click={setMode('variables')}>Variables</div>
</div>
{#if mode==='properties'}
    <div>Properties</div>
{:else if mode==='variables'}
    <CssVariables {component} />
{/if}
