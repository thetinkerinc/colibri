<script>
import Accordian, { AccordianItem } from '$components/accordian.svelte';
import Example from '$components/example.svelte';

import basic from './basic.svelte?raw';
</script>

<svelte:head>
	<title>Accordian</title>
</svelte:head>
<div class="mb-1 text-3xl">Accordian</div>

<div class="text-lg" />

<Example code={basic}>
	<Accordian>
		<AccordianItem>
			<svelte:fragment slot="title">
				<span>&#9728;</span>
				Sunny weather
			</svelte:fragment>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
			et dolore magna aliqua. Suscipit adipiscing bibendum est ultricies integer quis auctor. Rhoncus
			dolor purus non enim.
		</AccordianItem>
		<AccordianItem>
			<svelte:fragment slot="title">
				<span>&#9729;</span>
				Partly cloudy
			</svelte:fragment>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
			et dolore magna aliqua. Etiam sit amet nisl purus in mollis. At lectus urna duis convallis convallis
			tellus.
		</AccordianItem>
		<AccordianItem>
			<svelte:fragment slot="title">
				<span>&#9731;</span>
				A kind snowman
			</svelte:fragment>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
			et dolore magna aliqua. Viverra nibh cras pulvinar mattis. Mollis aliquam ut porttitor leo a.
		</AccordianItem>
	</Accordian>
</Example>
