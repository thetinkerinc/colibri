<style>
#close {
	display: grid;
	place-items: center;
	height: 2rem;
	width: 2rem;
	border-radius: 9999px;
	border: 2px solid #9ca3af;
	transition: transform;
}
#close:hover {
	transform: rotate(90deg);
}
.line {
	grid-column: 1 / 1;
	grid-row: 1 / 1;
	height: 2px;
	width: 1.5rem;
	background: black;
}
#line-1 {
	transform: rotate(45deg);
}
#line-2 {
	transform: rotate(-45deg);
}
</style>

<Modal bind:open>
	A modal with a custom close icon
	<svelte:fragment slot="close">
		<div id="close">
			<div id="line-1" class="line" />
			<div id="line-2" class="line" />
		</div>
	</svelte:fragment>
</Modal>
