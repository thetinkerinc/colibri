<script>
import Page from '$layouts/page.svelte';

import Toasts from '$components/toasts.svelte';
import Button from '$components/button.svelte';
import Styling from '$components/styling.svelte';

import toaster from '$utils/toasts.js';

import template from './template.svelte?raw';

let style;

function toast(type) {
	return () => {
		const article = ['i', 'e'].includes(type[0]) ? 'an' : 'a';
		toaster[type](`Hello! I am ${article} ${type} toast`);
	};
}
</script>

<Page title="Toast" {template}>
	<svelte:fragment slot="description">
		A component as well as a utility for displaying temporary, popup toast
		messages. This consists of the
		<span class="code text-black">{'<Toasts />'}</span>
		component, and the <span class="code text-black">toaster</span>
		utility. The component serves only as a container for the toasts, and only one
		is needed. If you are using SvelteKit, it would generally go in your root +layout.svelte
		file. Otherwise, it can go in any root component, as long as it appears on every
		page.
		<br />
		<br />
		<span class="code text-black">toaster</span> provides four methods for the
		four available message types: <span class="code text-black">info</span>,
		<span class="code text-black">success</span>,
		<span class="code text-black">warning</span>, and
		<span class="code text-black">error</span>. The only difference between the
		types is the background color. All four functions take in a string as a
		parameter, which will be the message that gets displayed.
		<br />
		<br />
		Toasts will be automatically dismissed 8 seconds after they are displayed, and
		will show a countdown progress indicator while they are active. They can also
		be dismissed early by clicking anywhere in the toast body.
	</svelte:fragment>

	<svelte:fragment slot="example">
		<Toasts {style} />
		<div class="flex flex-wrap gap-2">
			<Button on:click={toast('info')}>Info</Button>
			<Button on:click={toast('success')}>Success</Button>
			<Button on:click={toast('warning')}>Warning</Button>
			<Button on:click={toast('error')}>Error</Button>
		</div>
	</svelte:fragment>

	<svelte:fragment slot="styling">
		<Styling
			component="toast"
			sections={['container', 'body', 'timer', 'close']}
			bind:style />
	</svelte:fragment>
</Page>
