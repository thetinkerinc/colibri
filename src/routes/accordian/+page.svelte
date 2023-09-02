<script>
import Page from '$layouts/page.svelte';

import Accordian, { AccordianItem } from '$components/accordian.svelte';
import Prop from '$components/prop.svelte';
import Styling from '$components/styling.svelte';
import Html from '$components/html.svelte';

import descriptions from './descriptions.js';

import template from './template.svelte?raw';

let multiple;

let panel = 'With a very detailed description.';
let header = '&#9732; A category';
let style;

$: data = {
	props: {
		multiple
	},
	slots: {
		default: panel,
		header
	}
};
</script>

<Page title="Accordian" canStyle={true} {template} {data}>
	<svelte:fragment slot="description">
		A component to display groups of related information with nested details.
		The default behavior is to only allow one section open at a time, but allows
		for multiple as well. Use the <span class="code text-black">Accordian</span>
		component as a wrapper, and
		<span class="code text-black">AccordianItem</span> components to contain each
		section.
	</svelte:fragment>

	<svelte:fragment slot="example">
		<div class="w-full">
			<Accordian {multiple} {style}>
				<AccordianItem {style}>
					<svelte:fragment slot="header">
						<Html html={header} />
					</svelte:fragment>
					{panel}
				</AccordianItem>
				<AccordianItem {style}>
					<svelte:fragment slot="header">&#9728; Sunny weather</svelte:fragment>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Suscipit adipiscing
					bibendum est ultricies integer quis auctor. Rhoncus dolor purus non enim.
				</AccordianItem>
				<AccordianItem {style}>
					<svelte:fragment slot="header">&#9729; Partly cloudy</svelte:fragment>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Etiam sit amet nisl
					purus in mollis. At lectus urna duis convallis convallis tellus.
				</AccordianItem>
				<AccordianItem {style}>
					<svelte:fragment slot="header"
						>&#9731; A kind snowman</svelte:fragment>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar
					mattis. Mollis aliquam ut porttitor leo a.
				</AccordianItem>
			</Accordian>
		</div>
	</svelte:fragment>

	<svelte:fragment slot="props">
		<Prop
			title="multiple"
			type="boolean"
			description={descriptions.props.multiple}
			bind:value={multiple} />
	</svelte:fragment>

	<svelte:fragment slot="slots">
		<div class="mb-3 flex items-center gap-2">
			<i class="fa-solid fa-triangle-exclamation fa-lg text-yellow-500" />
			<div>
				<div>
					The slots apply to <span class="code text-black">AccordianItem</span>.
				</div>
				<div>
					<span class="code text-black">Accordian</span> is used only as a
					wrapper, and should contain a list of
					<span class="code text-black">AccordianItem</span> in its default slot.
				</div>
			</div>
		</div>
		<Prop
			title="default"
			type="textarea"
			description={descriptions.slots.default}
			bind:value={panel} />
		<Prop
			title="header"
			type="string"
			description={descriptions.slots.header}
			bind:value={header} />
	</svelte:fragment>

	<svelte:fragment slot="styling">
		<Styling
			component="accordian"
			sections={['container', 'item', 'header', 'panel']}
			bind:style />
	</svelte:fragment>
</Page>
