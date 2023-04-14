<script>
import { Radio } from '@thetinkerinc/colibri';

let group;
</script>

<div>Value: {JSON.stringify(group)}</div>
<Radio value="first" [[props]] bind:group
	>[[slot-default]]</Radio>
<Radio value="second" [[props]] bind:group>Option 2</Radio>
<Radio value="third" [[props]] bind:group>Option 3</Radio>
