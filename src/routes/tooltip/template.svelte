<script>
import { Tooltip } from '@thetinkerinc/colibri';

let element;
let open = false;
</script>

<div
	id="trigger"
	bind:this={element}
	on:click={() => (open = !open)}
	on:keyup={() => (open = !open)}>
	Open a tooltip
</div>
<Tooltip [[props]] {element} bind:open
	>[[slot-default]]</Tooltip>

<style>
#trigger {
	padding: 0.5rem 1rem;
	background: white;
	border: 1px solid #d1d5db;
	border-radius: 0.25rem;
	cursor: default;
}
</style>
