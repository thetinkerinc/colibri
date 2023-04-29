<script>
import {
	Accordian,
	AccordianItem
} from '@thetinkerinc/colibri';

import style from './style.js';
</script>

<Accordian [[props]] {style}>
	<AccordianItem {style}>
		[[slot-title]] [[slot-default]]
	</AccordianItem>
	<AccordianItem {style}>
		<svelte:fragment slot="title">
			&#9728; Sunny weather
		</svelte:fragment>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit,
		sed do eiusmod tempor incididunt ut labore et dolore magna
		aliqua. Suscipit adipiscing bibendum est ultricies integer
		quis auctor. Rhoncus dolor purus non enim.
	</AccordianItem>
	<AccordianItem {style}>
		<svelte:fragment slot="title">
			&#9729; Partly cloudy
		</svelte:fragment>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit,
		sed do eiusmod tempor incididunt ut labore et dolore magna
		aliqua. Etiam sit amet nisl purus in mollis. At lectus urna
		duis convallis convallis tellus.
	</AccordianItem>
	<AccordianItem {style}>
		<svelte:fragment slot="title">
			&#9731; A kind snowman
		</svelte:fragment>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit,
		sed do eiusmod tempor incididunt ut labore et dolore magna
		aliqua. Viverra nibh cras pulvinar mattis. Mollis aliquam
		ut porttitor leo a.
	</AccordianItem>
</Accordian>
