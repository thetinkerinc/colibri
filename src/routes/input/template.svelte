<script>
import { Input } from '@thetinkerinc/colibri';

let value;
</script>

<Input [[props]] bind:value>
	[[slot-before]] [[slot-after]]
</Input>
<div>Value: {JSON.stringify(value)}</div>
