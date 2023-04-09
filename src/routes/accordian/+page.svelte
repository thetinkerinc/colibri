<script>
import Accordian, { AccordianItem } from '$components/accordian.svelte';
import Example from '$components/example.svelte';
import Prop from '$components/prop.svelte';
import Value from '$components/value.svelte';
import CssVariable from '$components/css-variable.svelte';

import basic from './basic.svelte?raw';
import multipleProp from './multiple-prop.svelte?raw';
</script>

<svelte:head>
	<title>Accordian</title>
</svelte:head>
<div class="mb-1 text-3xl">Accordian</div>
A component to display groups of related information with nested details. The default
behavior is to only allow one section open at a time, but allows for multiple as
well. Use the<span class="code">Accordian</span>
component as a wrapper, and <span class="code">AccordianItem</span> components
to contain each section.
<div class="text-lg" />

<div id="basic" class="mt-4 text-2xl">Basic usage</div>
<Example code={basic}>
	<Accordian>
		<AccordianItem>
			<svelte:fragment slot="title">
				<span>&#9728;</span>
				Sunny weather
			</svelte:fragment>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
			incididunt ut labore et dolore magna aliqua. Suscipit adipiscing bibendum est
			ultricies integer quis auctor. Rhoncus dolor purus non enim.
		</AccordianItem>
		<AccordianItem>
			<svelte:fragment slot="title">
				<span>&#9729;</span>
				Partly cloudy
			</svelte:fragment>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
			incididunt ut labore et dolore magna aliqua. Etiam sit amet nisl purus in mollis.
			At lectus urna duis convallis convallis tellus.
		</AccordianItem>
		<AccordianItem>
			<svelte:fragment slot="title">
				<span>&#9731;</span>
				A kind snowman
			</svelte:fragment>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
			incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis.
			Mollis aliquam ut porttitor leo a.
		</AccordianItem>
	</Accordian>
</Example>

<div id="props" class="mt-4 text-2xl">Props</div>
<div class="ml-4">
	<Prop name="multiple" type="boolean" code={multipleProp}>
		<svelte:fragment slot="type">
			<span class="code">boolean</span>
		</svelte:fragment>
		<svelte:fragment slot="fallback">
			<span class="code text-sky-500">false</span>
		</svelte:fragment>
		<svelte:fragment slot="description">
			When true, the accordian can have multiple sections open at once.
		</svelte:fragment>
		<svelte:fragment slot="example">
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
		</svelte:fragment>
	</Prop>
</div>

<div id="slots" class="mt-4 text-2xl">Slots</div>
<div class="text-lg underline">AccordianItem</div>
<div class="ml-4 flex flex-col gap-4">
	<Value title="default">
		The content that will initially be hidden and can be revealed on expanding
		the section.
	</Value>
	<Value title="title">
		This will be what appears in the clickable title portion of the section.
	</Value>
</div>

<div id="styling" class="mt-4 text-2xl">Styling</div>
<CssVariable
	type="color"
	variable="--colibri-background-color"
	override="--colibri-accordian-background-color" />
<CssVariable
	variable="--colibri-border"
	override="--colibri-accordian-border"
	value="1px solid #d1d5db;" />
<CssVariable
	variable="--colibri-border-radius"
	override="--colibri-accordian-border-radius"
	value="0.25rem" />
<CssVariable variable="--colibri-accordian-padding" value="0.5rem 1rem" />
<CssVariable variable="--colibri-accordian-spacing" value="0.3rem" />
<CssVariable
	variable="--colibri-font-size-lg"
	override="--colibri-accordian-title-font-size"
	value="1.125rem" />
