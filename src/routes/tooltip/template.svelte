<script>
import { Tooltip } from '@thetinkerinc/colibri';

import style from './style.js';

let element;
let open = false;
</script>

<button
	id="trigger"
	bind:this={element}
	on:click={() => (open = !open)}>
	Open a tooltip
</button>
<Tooltip [[props]] {element} {style} bind:open>
	[[slot-default]]
</Tooltip>

<style>
#trigger {
	padding: 0.5rem 1rem;
	background: white;
	border: 1px solid #d1d5db;
	border-radius: 0.25rem;
	cursor: default;
}
</style>
