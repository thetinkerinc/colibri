<script>
export let value = undefined;
export let getOptions;
export let getDisplay;
export let getOption = undefined;
export let component = undefined;
export let placeholder = 'Search';
export let autofocus = false;
export let pageSize = 5;
export let delay = 300;
export let style = undefined;

import { tick } from 'svelte';
import { Loader2, ChevronLeft, ChevronRight } from 'lucide-svelte';

import Input from '$components/input.svelte';

import theme from '$utils/theme.js';
import utils from '$utils/general.js';

const loadOptionsDebounced = utils.debounce(_loadOptions, delay);

let ignore = false;
let search = initSearch(value);
let loading = false;
let latest;
let isSelecting = false;
let options = [];
let completions;
let page = 0;
let highlighted = 0;
let input;
let completionContainer;

$: userStyles = theme.makeUserStyles(
	'autocomplete',
	['container', 'input', 'completions', 'item'],
	style
);

$: pageSize = pageSize || 5;
$: placeholder = placeholder || 'Search';
$: delay = delay || 300;

$: showCompletions = search && isSelecting;
$: handleChange(search);
$: setDisplay(value);
$: pages = Math.max(Math.ceil(options.length / pageSize), 1);
$: chunks = utils.split(options, pageSize);
$: chunk = chunks[page] ?? [];
$: handleResults(chunk);

function initSearch() {
	if (value == null) {
		return undefined;
	}
	ignore = true;
	return getDisplay(value);
}

function handleChange() {
	if (ignore) {
		ignore = false;
		return;
	}
	value = undefined;
	page = 0;
	if (!search) {
		return;
	}
	options = [];
	loading = true;
}

function setDisplay() {
	if (!value) {
		return;
	}
	search = getDisplay(value);
}

function handleSelect(opt) {
	return () => {
		value = opt;
		input.querySelector('input').focus();
		isSelecting = false;
	};
}

function loadOptions() {
	isSelecting = true;
	loadOptionsDebounced();
}

async function _loadOptions() {
	if (!search) {
		loading = false;
		options = [];
		return;
	}
	const sentAt = Date.now();
	latest = sentAt;
	const res = await getOptions(search);
	if (sentAt === latest) {
		options = res;
		loading = false;
	}
}

async function handleResults() {
	if (!chunk || chunk.length === 0) {
		completions = undefined;
		return;
	}
	await tick();
	completions = completionContainer.querySelectorAll(
		'.colibri-autocomplete-item'
	);
	highlighted = 0;
}

function handleKeydown(evt) {
	isSelecting = true;
	const actions = {
		Escape: close,
		Tab: cycle.bind(null, evt),
		ArrowDown: cycle.bind(null, evt, 1),
		ArrowUp: cycle.bind(null, evt, -1),
		ArrowLeft: changePage.bind(null, -1),
		ArrowRight: changePage.bind(null, 1),
		Enter: select
	};
	if (actions[evt.key]) {
		evt.preventDefault();
		evt.stopPropagation();
		actions[evt.key]();
	}
}

function close() {
	input.querySelector('input').blur();
	isSelecting = false;
}

function cycle(evt, change) {
	if (change == null) {
		change = evt.shiftKey ? -1 : 1;
	}
	highlighted += change;
	const max = completions.length - 1;
	if (highlighted > max) {
		highlighted = 0;
	}
	if (highlighted < 0) {
		highlighted = max;
	}
}

function changePage(dir) {
	page = utils.clamp(page + dir, 0, pages - 1);
}

function select() {
	if (completions == null || completions.length === 0) {
		return;
	}
	completions[highlighted].click();
	input.querySelector('input').blur();
	isSelecting = false;
}
</script>

<svelte:window on:click={() => (isSelecting = false)} />
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	class="colibri-autocomplete-container {$userStyles.container.class}"
	style={$userStyles.container.inlines}
	on:click|stopPropagation={() => (isSelecting = true)}
	on:keydown|stopPropagation={handleKeydown}>
	<Input
		type="text"
		{placeholder}
		{autofocus}
		style={$userStyles.input}
		bind:value={search}
		bind:element={input}
		on:focus={() => (isSelecting = true)}
		on:change={loadOptions}>
		<svelte:fragment slot="after">
			{#if loading}
				<Loader2 class="colibri-autocomplete-spinner" />
			{/if}
		</svelte:fragment>
	</Input>
	{#if showCompletions}
		<div
			class="colibri-autocomplete-completions {$userStyles.completions.class}"
			style={$userStyles.completions.inlines}
			bind:this={completionContainer}>
			{#each chunk as opt, i}
				<button
					class="colibri-autocomplete-item {$userStyles.item.class}"
					class:highlighted={highlighted === i}
					style={$userStyles.item.inlines}
					on:click|stopPropagation={handleSelect(opt)}>
					{#if component}
						<svelte:component this={component} item={opt} />
					{:else if getOption}
						<div>{getOption(opt)}</div>
					{:else}
						<div>{getDisplay(opt)}</div>
					{/if}
				</button>
			{:else}
				<div class="colibri-autocomplete-empty">
					{#if loading}
						<div>Loading</div>
					{:else}
						<slot name="empty">No results</slot>
					{/if}
				</div>
			{/each}
			{#if options.length > pageSize}
				<div class="colibri-autocomplete-pagination-container">
					<button
						class:colibri-autocomplete-pagination-disabled={page === 0}
						disabled={page === 0}
						on:click={() => (page -= 1)}>
						<ChevronLeft size={30} />
					</button>
					<div class="colibri-autocomplete-pagination-info">
						<div>{page * pageSize + 1}</div>
						<div>-</div>
						<div>{Math.min((page + 1) * pageSize, options.length)}</div>
						<div>of</div>
						<div>{options.length}</div>
					</div>
					<button
						class:colibri-autocomplete-pagination-disabled={page === pages - 1}
						disabled={page === pages - 1}
						on:click={() => (page += 1)}>
						<ChevronRight size={30} />
					</button>
				</div>
			{/if}
		</div>
	{/if}
</div>
