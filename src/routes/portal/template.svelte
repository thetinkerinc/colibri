<script>
import { Portal } from '@thetinkerinc/colibri';
</script>

<div id="parent">
	<div>
		This is regular content inside of a div with styling.
		Look at the bottom of the page to see a sibling element
		placed in a portal.
	</div>
	<Portal>
		<div id="portal">[[slot-default]]</div>
	</Portal>
</div>

<style>
#parent {
	color: red;
}
#portal {
	position: fixed;
	bottom: 0;
	margin: 2rem;
	padding: 1rem;
	border-radius: 0.25rem;
	background: #d1d5db;
	opacity: 0.4;
	transition: opacity 0.4s;
}
#portal:hover {
	opacity: 1;
}
</style>
