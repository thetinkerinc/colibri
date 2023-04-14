<script>
import {
	Toasts,
	toaster,
	Button
} from '@thetinkerinc/colibri';

function toast(type) {
	return () => {
		const article = ['i', 'e'].includes(type[0])
			? 'an'
			: 'a';
		toaster[type](`Hello! I am ${article} ${type} toast`);
	};
}
</script>

<Toasts />
<div id="buttons">
	<Button on:click={toast('info')}>Info</Button>
	<Button on:click={toast('success')}>Success</Button>
	<Button on:click={toast('warning')}>Warning</Button>
	<Button on:click={toast('error')}>Error</Button>
</div>

<style>
#buttons {
	display: flex;
	flex-wrap: wrap;
	gap: 0.5rem;
}
</style>
