<script>
import { Checkbox } from '@thetinkerinc/colibri';

import style from './style.js';

let checked = false;
</script>

<!-- prettier-ignore -->
<Checkbox [[props]] {style} bind:checked>[[slot-default]]</Checkbox>
{#if checked}
	<div>I am checked</div>
{/if}
