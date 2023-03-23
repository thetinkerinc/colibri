<script>
import Button from '$components/button.svelte';
import Modal from '$components/modal.svelte';
import Example from '$components/example.svelte';

import Props from './props.svelte';

import basic from './basic.svelte?raw';

let basicOpen;
</script>

<svelte:head>
	<title>Modal</title>
</svelte:head>
<div class="mb-1 text-3xl">Modal</div>

<div class="text-lg">
	A modal component to display arbitrary rich content in a dismissable window.
</div>

<div id="basic" class="mt-4 text-2xl">Basic usage</div>
<Example code={basic}>
	<Button on:click={() => (basicOpen = true)}>Open modal</Button>
	<Modal bind:open={basicOpen} slim={true}>
		<svelte:fragment slot="title">Hello there</svelte:fragment>
		<div class="text-center">
			<div class="text-lg">Just a nice modal component</div>
			<div class="text-gray-500">You can put whatever you want in here</div>
		</div>
		<svelte:fragment slot="actions">
			<Button on:click={() => alert('Like other components')}>See more</Button>
		</svelte:fragment>
	</Modal>
</Example>

<div id="props" class="mt-4 text-2xl">Props</div>
<div class="ml-4">
	<Props />
</div>
