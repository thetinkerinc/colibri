<script>
import { Checkbox } from '@thetinkerinc/colibri';

let checked = false;
</script>

<Checkbox [[props]] bind:checked>[[slot-default]]</Checkbox>
{#if checked}
	<div>I am checked</div>
{/if}
