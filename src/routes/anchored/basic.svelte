<script>
import { Anchored } from 'colibri';

let elem;
let open = false;
</script>

<style>
.display {
	border-radius: 0.25rem;
	border: 1px solid #d1d5db;
	background: white;
	padding: 0.5rem 1rem;
}
#elem {
	display: inline-block;
}
</style>

<div
	id="elem"
	class="display"
	bind:this={elem}
	on:mouseenter={() => (open = true)}
	on:mouseleave={() => (open = false)}>
	Hover over me to see the anchored element
</div>
<Anchored bind:open position="bottom" anchor={elem}>
	<div class="display">Anchored</div>
</Anchored>
