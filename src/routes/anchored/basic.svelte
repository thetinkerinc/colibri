<script>
import { Anchored } from 'colibri';

let elem;
let open = false;
</script>

<style>
.display {
	border-radius: 0.25rem;
	border: 1px solid #d1d5db;
	padding: 0.5rem 1rem;
}
#elem {
	background: white;
}
#anchored {
	background: #a7f3d0;
}
</style>

<div id="elem" class="display" bind:this={elem} on:click|stopPropagation={() => (open = !open)}>
	Click on me to see the anchored element
</div>
<Anchored bind:open position="bottom" anchor={elem}>
	<div id="anchored" class="display">
		Click and drag the background to see how I react when scrolling
	</div>
</Anchored>
