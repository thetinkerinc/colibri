<script>
import Button from 'colibri';
import Modal from 'colibri';

let open;
</script>

<Button on:click={() => (open = true)}>Open modal</Button>
<Modal bind:open slim={true}>
	<svelte:fragment slot="title">Hello there!</svelte:fragment>
	<div style="text-align: center">
		<div style="font-size: 1.125rem">Just a nice modal component</div>
		<div style="color: #6b7280">You can put whatever you want in here</div>
	</div>
	<svelte:fragment slot="actions">
		<Button on:click={() => alert('Like other components')}>See more</Button>
	</svelte:fragment>
</Modal>
