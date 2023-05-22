<script>
export let type=undefined; //image, pdf
export let aspect=undefined; //square, portrait, landscape, wide
export let outputWidth=undefined;
export let rotationControls=false;
export let showPreview=false;
export let prompt=undefined;

import {createEventDispatcher, tick} from 'svelte';

import Button from '$components/button.svelte';
import Modal from '$components/modal.svelte';
import Cropper from '$components/cropper.svelte';

const dispatch=createEventDispatcher();

const types={
    image: 'image/*',
    pdf: '.pdf'
};
const accept=types[type] || 'image/*,.pdf';
if (prompt==undefined){
    if (type==='image'){
        prompt='Choose image';
    }
    else {
        prompt='Choose file';
    }
}

let input;
let file;
let editing=false;
let previewing=false;
let accepted=false;
let image='';
let preview='';

$: showPreview, clear();
$: open=editing || (previewing && file.type.includes('image'));

function handleFile(){
    dispatch('select');
    file=input.files[0];
    input.value='';
    if (/image/.test(file.type)){
        URL.revokeObjectURL(image);
        if (file.type==='image/gif'){
            const reader=new FileReader();
            reader.readAsDataURL(file);
            reader.onload=()=>{
                preview=reader.result;
                editing=false;
                previewing=true;
            };
        }
        else {
            image=URL.createObjectURL(file);
            editing=true;
            previewing=false;
            preview='';
        }
    }
    else if (file.type==='application/pdf'){
        const reader=new FileReader();
        reader.readAsDataURL(file);
        reader.onload=()=>{
            preview=reader.result;
            previewing=false;
            dispatch('update', preview);
        };
    }
}

function handleCrop(evt){
    image='';
    preview=evt.detail;
    editing=false;
    previewing=true;
}

function handleAccept(){
    accepted=true;
    update();
}

function handleClose(){
    if (accepted){return;}
    update(false);
}

async function update(fire=true){
    if (fire){
        dispatch('update', preview);
    }
    editing=false;
    previewing=false;
    image='';
    clear(!fire);
    await tick();
    accepted=false;
}

function clear(force=false){
    if (force || !showPreview){
        preview='';
    }
}

function cancel(){
    preview='';
    previewing=false;
    update();
}
</script>

{#if $$slots.trigger}
    <span on:click={()=>input.click()}
        on:keyup={()=>input.click()}>
        <slot name="trigger"></slot>
    </span>
{:else}
    <div class="inline-block">
        {#if !editing && !previewing && preview}
            {#if file.type==='application/pdf'}
                <div>
                    <span class="fa-stack fa-4x h-[1em] w-[1em] leading-[1em]">
                        <i class="far fa-file-pdf fa-stack-1x text-red-500"></i>
                        <i class="far fa-file fa-stack-1x"></i>
                    </span>
                    <div class="my-1">{file.name}</div>
                </div>
            {:else if showPreview}
                <img class="block border border-gray-300 rounded mb-2 max-w-[350px]" src={preview} alt="Preview" />
            {/if}
            <Button type="secondary" on:click={cancel}>Cancel</Button>
        {:else}
            <Button on:click={()=>input.click()}>{prompt}</Button>
        {/if}
    </div>
{/if}
<Modal {open} on:close={handleClose}>
    {#if editing}
        <div class="w-[80%] max-w-[600px] mx-auto">
            <Cropper src={image}
                     {aspect}
                     {outputWidth}
                     {rotationControls}
                     on:crop={handleCrop} />
        </div>
    {:else}
        <div class="flex flex-col items-center gap-3">
            <img class="block border border-gray-300 rounded mb-1 w-[80%] max-w-[350px]" src={preview} alt="Preview" />
            <div class="flex gap-3">
                <Button on:click={handleAccept}>Accept</Button>
                <Button type="secondary" on:click={cancel}>Cancel</Button>
            </div>
        </div>
    {/if}
</Modal>
<input class="e2e-file-input hidden"
       type="file"
       {accept}
       bind:this={input}
       on:change={handleFile} />
