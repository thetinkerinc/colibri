<script>
import Prop from '$components/prop.svelte';
import Button from '$components/button.svelte';
import Modal from '$components/modal.svelte';

import openProp from './open-prop.svelte?raw';
import slimProp from './slim-prop.svelte?raw';
import fitProp from './fit-prop.svelte?raw';

let basicOpen;
let openOpen;
let slimOpen;
let fitOpen;
</script>

<style>
@keyframes grow {
	from {
		width: 10px;
	}
	to {
		width: 100px;
	}
}

.growing-line {
	border-bottom: 2px solid #03b2dd;
	animation: 1.5s grow alternate infinite;
}
</style>

<Prop name="open" type="boolean" code={openProp}>
	<svelte:fragment slot="type">
		<span class="code">boolean</span>
	</svelte:fragment>
	<svelte:fragment slot="fallback">
		<span class="code text-sky-500">false</span>
	</svelte:fragment>
	<svelte:fragment slot="description">
		Sets whether or not the modal should be open. You should generally bind to this variable, so
		that when the user closes the modal and <span class="code">open</span>
		is updated by the component, the change is reflected in your local state.
	</svelte:fragment>
	<svelte:fragment slot="example">
		<Button on:click={() => (openOpen = true)}>Open modal</Button>
		<Modal bind:open={openOpen}>Modal content</Modal>
	</svelte:fragment>
</Prop>

<Prop name="slim" type="boolean" code={slimProp}>
	<svelte:fragment slot="type">
		<span class="code">boolean</span>
	</svelte:fragment>
	<svelte:fragment slot="fallback">
		<span class="code text-sky-500">false</span>
	</svelte:fragment>
	<svelte:fragment slot="description">
		When true, the modal will take up less space horizontally on the screen. Good for when there is
		only a small amount of content needed.
	</svelte:fragment>
	<svelte:fragment slot="example">
		<Button on:click={() => (slimOpen = true)}>Open modal</Button>
		<Modal bind:open={slimOpen} slim={true}>Modal content</Modal>
	</svelte:fragment>
</Prop>

<Prop name="fit" type="boolean" code={fitProp}>
	<svelte:fragment slot="type">
		<span class="code">boolean</span>
	</svelte:fragment>
	<svelte:fragment slot="fallback">
		<span class="code text-sky-500">false</span>
	</svelte:fragment>
	<svelte:fragment slot="description">
		If a constant width modal doesn't work, you can set <span class="code">fit</span>
		to <span class="code text-sky-500">true</span>
		to make the width of the modal fit its contents.
	</svelte:fragment>
	<svelte:fragment slot="example">
		<Button on:click={() => (fitOpen = true)}>Open modal</Button>
		<Modal bind:open={fitOpen} fit={true}>
			<div class="my-6 grid grid-cols-[1fr_auto_1fr] items-center gap-2">
				<div class="growing-line" />
				<div>Modal content</div>
				<div class="growing-line" />
			</div>
		</Modal>
	</svelte:fragment>
</Prop>
