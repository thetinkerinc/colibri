<script>
export let toast;

import { onMount, createEventDispatcher } from 'svelte';

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
	id="toast"
	class={toast.type}
	on:click={handleClick}
	on:keyup={handleClick}>
	<div id="timer" class={toast.type} />
	<div id="message">{toast.message}</div>
	<div id="close">&times;</div>
</div>

<style>
@keyframes countdown {
	from {
		width: 100%;
	}
	to {
		width: 0;
	}
}

#toast {
	position: relative;
	display: grid;
	grid-template-columns: 1fr auto;
	gap: 0.5rem;
	overflow: hidden;
	border-radius: var(
		--colibri-toast-border-radius,
		var(--colibri-border-radius)
	);
	padding: var(--colibri-toast-padding);
	margin: 0.5rem 0;
	color: var(--colibri-toast-font-color);
}
#toast.info {
	background: var(--colibri-toast-info-background-color);
	color: var(--colibri-toast-info-font-color, var(--colibri-toast-font-color));
}
#toast.success {
	background: var(--colibri-toast-success-background-color);
	color: var(
		--colibri-toast-success-font-color,
		var(--colibri-toast-font-color)
	);
}
#toast.warning {
	background: var(--colibri-toast-warning-background-color);
	color: var(
		--colibri-toast-warning-font-color,
		var(--colibri-toast-font-color)
	);
}
#toast.error {
	background: var(--colibri-toast-error-background-color);
	color: var(--colibri-toast-error-font-color, var(--colibri-toast-font-color));
}

#timer {
	position: absolute;
	top: 0;
	right: 0;
	z-index: 0;
	width: 100%;
	height: 100%;
	animation: countdown 7s linear 1s forwards;
}
#timer.info {
	background: var(--colibri-toast-info-timer-background-color);
}
#timer.success {
	background: var(--colibri-toast-success-timer-background-color);
}
#timer.warning {
	background: var(--colibri-toast-warning-timer-background-color);
}
#timer.error {
	background: var(--colibri-toast-error-timer-background-color);
}

#message {
	z-index: 10;
}

#close {
	z-index: 10;
	cursor: pointer;
	place-self: center;
	font-size: 30px;
	line-height: 0.5;
	transform: translateY(-2px);
}
</style>
