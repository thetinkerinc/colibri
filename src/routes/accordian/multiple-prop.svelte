<script>
import { Accordian, AccordianItem } from 'colibri';
</script>

<Accordian multiple={true}>
	<AccordianItem>
		<svelte:fragment slot="title">Open me</svelte:fragment>
		Both sections can be opened at the same time
	</AccordianItem>
	<AccordianItem>
		<svelte:fragment slot="title">Me too</svelte:fragment>
		And closed as well
	</AccordianItem>
</Accordian>
