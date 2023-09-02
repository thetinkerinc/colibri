<script>
export let toast;
export let style = undefined;

import { onMount, createEventDispatcher } from 'svelte';
import { X } from 'lucide-svelte';

import theme from '$utils/theme.js';

$: userStyles = theme.makeUserStyles(
	'toast',
	['body', 'timer', 'close'],
	style
);

onMount(() => {
	timeout = setTimeout(() => {
		handleClick();
	}, 8500);

	return () => {
		if (timeout) {
			clearTimeout(timeout);
		}
	};
});

const dispatch = createEventDispatcher();

let timeout;

function handleClick() {
	clearTimeout(timeout);
	dispatch('click');
}
</script>

<div
	class="colibri-toast-body {toast.type} {$userStyles.body.class}"
	style={$userStyles.body.inlines}
	role="alert">
	<div
		class="colibri-toast-timer {toast.type} {$userStyles.timer.class}"
		style={$userStyles.timer.inlines} />
	<div class="colibri-toast-message">{toast.message}</div>
	<button
		class="colibri-toast-close {$userStyles.close.class}"
		style={$userStyles.close.inlines}
		on:click={handleClick}>
		<X />
	</button>
</div>
