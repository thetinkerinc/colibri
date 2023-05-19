<script>
export let template;
export let data = {};

import Highlighter from '$components/highlighter.svelte';

$: code = format(template, data);

function format() {
	return template
		.replace(/<\!--.*?-->\n/g, '') //eslint-disable-line
		.replace(/\[\[([a-z-]+)\]\]([ ]?)/g, replacer);
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
		const content = data?.slots?.[slot];
		if (!content) {
			return '';
		}
		if (slot === 'default') {
			return content;
		} else if (content) {
			if (typeof content === 'string') {
				return `\n<svelte:fragment slot="${slot}">${data.slots[slot]}</svelte:fragment>\n`;
			} else {
				let replacement = `\n<svelte:fragment slot="${slot}">`;
				replacement += new Array(content.count)
					.fill(0)
					.map((_, i) => {
						const n = content.componentName;
						const c = content.content;
						return `<${n}>${c} ${i + 1}</${n}>`;
					})
					.join('\n');
				replacement += `</svelte:fragment>\n`;
				return replacement;
			}
		}
		return '';
	}
	return '';
}

function replaceProps() {
	return Object.keys(data.props)
		.filter((k) => data.props[k] != undefined)
		.map((k) => {
			if (template.includes(`bind:${k}`)) {
				return '';
			}
			const v = data.props[k];
			if (v === false) {
				return '';
			}
			if (typeof v === 'string' && v) {
				if (v.includes('"')) {
					return `${k}={\`${v}\`}`;
				}
				return `${k}="${v}"`;
			} else if (typeof v === 'boolean') {
				return k;
			} else if (typeof v === 'number') {
				return `${k}={${v}}`;
			} else if (v instanceof Date) {
				return `${k}={new Date("${v.toISOString()}")}`;
			}
		})
		.filter(Boolean)
		.join(' ');
}
</script>

<div
	class="grid max-h-[600px] grid-rows-2 overflow-hidden rounded-lg shadow-lg lg:grid-cols-2 lg:grid-rows-1">
	<div>
		<Highlighter language="svelte" {code} />
	</div>
	<div
		class="relative grid place-items-center rounded-bl-lg rounded-br-lg border border-[#272822] bg-slate-50 p-3 lg:rounded-bl-none lg:rounded-tr-lg">
		<slot />
	</div>
</div>
