<script>
import { Anchored } from '@thetinkerinc/colibri';

let elem;
let open = false;
</script>

<div
	id="elem"
	class="display"
	bind:this={elem}
	on:click={() => (open = !open)}
	on:keyup={() => (open = !open)}>
	Click on me
</div>
<Anchored [[props]] bind:open anchor={elem}>
	<div id="anchored" class="display">
		[[slot-default]] [[slot-decoration]]
	</div>
</Anchored>

<style>
.display {
	border-radius: 0.25rem;
	border: 1px solid #d1d5db;
	padding: 0.5rem 1rem;
	text-align: center;
}
#elem {
	background: white;
	max-width: 100px;
}
#anchored {
	background: #a7f3d0;
	max-width: 200px;
}
</style>
