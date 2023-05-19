<script>
import { Input } from '@thetinkerinc/colibri';

import style from './style.js';

let value;
</script>

<Input [[props]] {style} bind:value>
	[[slot-before]] [[slot-after]]
</Input>
<div>Value: {JSON.stringify(value)}</div>
