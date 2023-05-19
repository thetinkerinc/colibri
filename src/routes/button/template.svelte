<script>
import { Button } from '@thetinkerinc/colibri';

import style from './style.js';

function handleClick() {
	alert('clicked');
}
</script>

<!-- prettier-ignore -->
<Button [[props]] {style} on:click={handleClick}>[[slot-default]] [[slot-confirm]]</Button>
