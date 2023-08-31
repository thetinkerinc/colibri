<script>
import Page from '$layouts/page.svelte';

import Input from '$components/input.svelte';
import Prop from '$components/prop.svelte';
import Event from '$components/event.svelte';
import Styling from '$components/styling.svelte';
import Html from '$components/html.svelte';

import descriptions from './descriptions.js';
import examples from './examples.js';

import template from './template.svelte?raw';

const types = ['text', 'email', 'password', 'number', 'textarea'];

let value;
let type = 'text';
let name;
let placeholder;
let integer;
let min;
let max;
let autofocus;
let expand;
let disabled;
let style;

let before;
let after;

$: data = makeData(
	type,
	name,
	placeholder,
	integer,
	min,
	max,
	autofocus,
	expand,
	disabled,
	before,
	after
);

$: isBasicType = ['text', 'email', 'password', 'number'].includes(type);

function makeData() {
	const data = {
		props: {
			type,
			name,
			placeholder,
			autofocus,
			disabled
		}
	};
	if (type !== 'number') {
		integer = undefined;
		min = undefined;
		max = undefined;
	} else {
		data.props = {
			...data.props,
			...{
				integer,
				min,
				max
			}
		};
	}
	if (type !== 'textarea') {
		expand = undefined;
		data.slots = {
			before,
			after
		};
	} else {
		before = undefined;
		after = undefined;
		data.props = {
			...data.props,
			...{
				expand
			}
		};
	}
	return data;
}
</script>

<Page title="Input" canStyle={true} {template} {data}>
	<svelte:fragment slot="description">
		A general input component for various types of text as well as numbers.
	</svelte:fragment>

	<svelte:fragment slot="example">
		<div class="w-full">
			<Input
				{type}
				{name}
				{placeholder}
				{integer}
				{min}
				{max}
				{autofocus}
				{expand}
				{disabled}
				{style}
				bind:value>
				<svelte:fragment slot="before">
					<Html html={before ?? ''} />
				</svelte:fragment>
				<svelte:fragment slot="after">
					<Html html={after ?? ''} />
				</svelte:fragment>
			</Input>
			<div>Value: {JSON.stringify(value)}</div>
		</div>
	</svelte:fragment>

	<svelte:fragment slot="props">
		<Prop title="value" description={descriptions.props.value}>
			string | number
		</Prop>
		<Prop
			title="type"
			type="string"
			values={types}
			clearable={false}
			description={descriptions.props.type}
			bind:value={type} />
		<Prop
			title="name"
			type="string"
			description={descriptions.props.name}
			bind:value={name} />
		<Prop
			title="placeholder"
			type="string"
			description={descriptions.props.placeholder}
			bind:value={placeholder} />
		{#if type === 'number'}
			<Prop
				title="integer"
				type="boolean"
				description={descriptions.props.integer}
				bind:value={integer} />
			<Prop
				title="min"
				type="number"
				description={descriptions.props.min}
				bind:value={min} />
			<Prop
				title="max"
				type="number"
				description={descriptions.props.max}
				bind:value={max} />
		{/if}
		<Prop
			title="autofocus"
			type="boolean"
			description={descriptions.props.autofocus}
			bind:value={autofocus} />
		{#if type === 'textarea'}
			<Prop
				title="expand"
				type="boolean"
				description={descriptions.props.expand}
				bind:value={expand} />
		{/if}
		<Prop
			title="disabled"
			type="boolean"
			description={descriptions.props.disabled}
			bind:value={disabled} />
	</svelte:fragment>

	<svelte:fragment slot="slots">
		{#if isBasicType}
			<Prop
				title="before"
				type="textarea"
				description={descriptions.slots.before}
				example={examples.slots.before}
				bind:value={before} />
			<Prop
				title="after"
				type="textarea"
				description={descriptions.slots.after}
				example={examples.slots.after}
				bind:value={after} />
		{/if}
	</svelte:fragment>

	<svelte:fragment slot="events">
		<Event name="enter">
			Emitted when the user presses Enter or Return while focused on the input
		</Event>
		<Event name="change">
			Emitted whenever the value of the input changes. The current value of the
			input will be passed as a parameter
		</Event>
		<Event name="focus">Emitted when the input gains focus</Event>
		<Event name="blur">Emitted when the input loses focus</Event>
	</svelte:fragment>

	<svelte:fragment slot="styling">
		<Styling
			component="input"
			sections={['body', 'before', 'after']}
			bind:style />
	</svelte:fragment>
</Page>
