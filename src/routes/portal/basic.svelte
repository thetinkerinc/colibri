<script>
import { Portal } from 'colibri';
</script>

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
	background: #ddd;
	opacity: 0.4;
	transition: opacity 0.4s;
}
#portal:hover {
	opacity: 1;
}
</style>

<div id="parent">
	<div>
		This is regular content inside of a div with styling. Look at the bottom of the page to see a
		sibling element placed in a portal.
	</div>
	<Portal>
		<div id="portal">
			This is content inside of the same div, but in a portal. You can see that it doesn't inherit
			the text styling of the parent. Also, check the devtools to see that this element is rendered
			at the end of the document body.
		</div>
	</Portal>
</div>
