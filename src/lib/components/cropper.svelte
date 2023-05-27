<script>
export let src;
export let aspect;
export let outputWidth;
export let rotationControls;

import { onMount, createEventDispatcher } from 'svelte';

import Cropper from 'cropperjs';
import 'cropperjs/dist/cropper.min.css';

import Checkbox from '$components/checkbox.svelte';
import Button from '$components/button.svelte';

onMount(() => {
	cropper = new Cropper(img, {
		aspectRatio: aspects[aspect],
		autoCropArea: 1
	});
});

const dispatch = createEventDispatcher();

const aspects = {
	landscape: 4 / 3,
	square: 1,
	portrait: 3 / 4,
	wide: 16 / 9
};

const sizes = {
	small: 256,
	medium: 512,
	large: 1024
};

let img;
let cropper;

let size = false;

function crop() {
	const opts = {
		fillColor: '#fff',
		imageSmoothingEnabled: true,
		imageSmoothingQuality: 'high'
	};
	if (outputWidth) {
		opts.width = outputWidth;
	} else if (size) {
		opts.width = sizes[size];
	} else {
		opts.maxWidth = 2048;
	}
	const url = cropper.getCroppedCanvas(opts).toDataURL('image/jpeg', 1.0);
	dispatch('crop', url);
}
</script>

<div>
	<img class="block max-w-full" {src} alt="User input" bind:this={img} />
	{#if !outputWidth}
		<div class="mt-4 flex items-center justify-center gap-4">
			<div>Size:</div>
			<Checkbox value="small" bind:group={size}>Small</Checkbox>
			<Checkbox value="medium" bind:group={size}>Medium</Checkbox>
			<Checkbox value="large" bind:group={size}>Large</Checkbox>
			<Checkbox value={false} bind:group={size}>Original</Checkbox>
		</div>
	{/if}
	<div class="mt-4 flex items-center justify-center gap-4">
		{#if rotationControls}
			<i
				class="fas fa-undo cursor-pointer text-lg"
				title="Rotate counter-clockwise"
				on:click={() => cropper.rotate(-90)}
				on:keyup={() => cropper.rotate(-90)} />
		{/if}
		<Button on:click={crop}>Crop</Button>
		{#if rotationControls}
			<i
				class="fas fa-redo cursor-pointer text-lg"
				title="Rotate clockwise"
				on:click={() => cropper.rotate(90)}
				on:keyup={() => cropper.rotate(90)} />
		{/if}
	</div>
</div>
