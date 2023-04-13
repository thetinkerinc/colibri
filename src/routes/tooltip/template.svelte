<script>
import { Tooltip } from '@thetinkerinc/colibri';

let elem;
let open = false;
</script>

<style>
#trigger {
	padding: 0.5rem 1rem;
	background: white;
	border: 1px solid #d1d5db;
	border-radius: 0.25rem;
	cursor: default;
}
</style>

<div
	id="trigger"
	bind:this={elem}
	on:click={() => (open = !open)}>
	Open a tooltip
</div>
<Tooltip [[props]] {elem} bind:open
	>[[slot-default]]</Tooltip>
