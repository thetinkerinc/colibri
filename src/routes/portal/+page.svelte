<script>
import Portal from '$components/portal.svelte';
import Example from '$components/example.svelte';

import basic from './basic.svelte?raw';
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

<svelte:head>
	<title>Portal</title>
</svelte:head>
<div class="mb-1 text-3xl">Portal</div>

<div class="text-lg">
	Portals are a way to render content outside of the normal DOM location where they would be placed.
	Content inside of a portal will be moved the end of <span class="code">{'<body>'}</span>. This can
	be useful to avoid inheriting any styling or positioning rules from parent elements, while still
	being able to keep the code for related parts together.
</div>

<div id="basic" class="mt-4 text-2xl">Basic usage</div>
<div class="mb-[100px]">
	<Example code={basic}>
		<div id="parent">
			<div>
				This is regular content inside of a div with styling. Look at the bottom of the page to see
				a sibling element placed in a portal.
			</div>
			<Portal>
				<div id="portal">
					This is content inside of the same div, but in a portal. You can see that it doesn't
					inherit the text styling of the parent. Also, check the devtools to see that this element
					is rendered at the end of the document body.
				</div>
			</Portal>
		</div>
	</Example>
</div>
