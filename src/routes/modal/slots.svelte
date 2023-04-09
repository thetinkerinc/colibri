<script>
import Button from '$components/button.svelte';
import Modal from '$components/modal.svelte';
import Example from '$components/example.svelte';
import Value from '$components/value.svelte';

import defaultSlot from './default-slot.svelte?raw';
import titleSlot from './title-slot.svelte?raw';
import actionsSlot from './actions-slot.svelte?raw';
import closeSlot from './close-slot.svelte?raw';

let defaultOpen;
let titleOpen;
let actionsOpen;
let closeOpen;
</script>

<Value title="default" code={defaultSlot}>
	The content to be placed in the modal. Can be anything, including styled html
	as well as other components.
	<svelte:fragment slot="example">
		<Button on:click={() => (defaultOpen = true)}>Default</Button>
		<Modal bind:open={defaultOpen}>Modal content</Modal>
	</svelte:fragment>
</Value>

<Value title="title" code={titleSlot}>
	If present, the content will be placed at the top of the modal as a title, in
	line with the close button.
	<svelte:fragment slot="example">
		<Button on:click={() => (titleOpen = true)}>Title</Button>
		<Modal bind:open={titleOpen}>
			<svelte:fragment slot="title">Modal title</svelte:fragment>
			A modal with a title
		</Modal>
	</svelte:fragment>
</Value>

<Value title="actions" code={actionsSlot}>
	Use this slot to add buttons or any other action elements. They will go at the
	bottom of the modal, aligned to the right with spacing in between each one.
	<svelte:fragment slot="example">
		<Button on:click={() => (actionsOpen = true)}>Actions</Button>
		<Modal bind:open={actionsOpen}>
			A modal with actions
			<svelte:fragment slot="actions">
				<Button on:click={() => (actionsOpen = false)}>Submit</Button>
			</svelte:fragment>
		</Modal>
	</svelte:fragment>
</Value>

<Value title="close" code={closeSlot}>
	Modals by default have an X in the top right corner as a close button. You can
	override this by providing content in the
	<span class="code text-black">close</span> slot.
	<svelte:fragment slot="example">
		<Button on:click={() => (closeOpen = true)}>Custom close</Button>
		<Modal bind:open={closeOpen}>
			A modal with a custom close icon
			<svelte:fragment slot="close">
				<div
					class="grid h-8 w-8 place-items-center rounded-full bg-gray-100 transition hover:rotate-90 hover:bg-gray-300">
					<div class="cell-1 h-[3px] w-6 rotate-45 bg-black" />
					<div class="cell-1 h-[3px] w-6 -rotate-45 bg-black" />
				</div>
			</svelte:fragment>
		</Modal>
	</svelte:fragment>
</Value>
