<Modal bind:open>
	A modal with actions
	<svelte:fragment slot="actions">
		<Button on:click={() => (open = false)}>Submit</Button>
	</svelte:fragment>
</Modal>
