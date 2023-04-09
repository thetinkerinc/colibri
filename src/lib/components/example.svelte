<script>
export let template;
export let data = {};

import Highlighter from '$components/highlighter.svelte';

$: code = format(data);

function format() {
	return template.replace(/\[\[([a-z-]+)\]\]([ ]?)/g, replacer);
}

function replacer(_, name, space) {
	if (name === 'props') {
		let replacement = replaceProps();
		if (replacement && space != null) {
			replacement += space;
		}
		return replacement;
	}
	if (name.startsWith('slot')) {
		const slot = name.replace('slot-', '');
		if (slot === 'default') {
			return data.slots.default;
		} else if (data.slots[slot]) {
			return `<svelte:fragment slot="${slot}">${data.slots[slot]}</svelte:fragment>`;
		}
		return '';
	}
	return '';
}

function replaceProps() {
	return Object.keys(data.props)
		.filter((k) => data.props[k] != undefined)
		.map((k) => {
			const v = data.props[k];
			if (v === false) {
				return '';
			}
			let left = '';
			let right = '';
			if (typeof v === 'string' && v) {
				return `${k}="${data.props[k]}"`;
			} else if (typeof v === 'boolean') {
				return k;
			}
		})
		.filter(Boolean)
		.join(' ');
}
</script>

<div class="grid max-h-[600px] grid-cols-2 overflow-hidden rounded-lg shadow-lg">
	<div>
		<Highlighter class="h-full max-h-[600px]" language="svelte" {code} />
	</div>
	<div
		class="grid place-items-center rounded-tr-lg rounded-br-lg border border-[#272822] bg-slate-50 p-3">
		<slot />
	</div>
</div>
