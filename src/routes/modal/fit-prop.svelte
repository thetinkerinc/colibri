<script>
import { Button } from 'colibri';
import { Modal } from 'colibri';

let open;
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

#growing-content {
	display: grid;
	grid-template-columns: 1fr auto 1fr;
	gap: 0.5rem;
	align-items: center;
	margin: 1rem 0;
}

.growing-line {
	border-bottom: 2px solid #03b2dd;
	animation: 1.5s grow alternate infinite;
}
</style>

<Button on:click={() => (open = true)}>Open modal</Button>
<Modal bind:open fit={true}>
	<div id="growing-content">
		<div class="growing-line" />
		<div>Modal content</div>
		<div class="growing-line" />
	</div>
</Modal>
