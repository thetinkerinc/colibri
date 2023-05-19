<script>
import { Radio } from '@thetinkerinc/colibri';

import style from './style.js';

let group;
</script>

<div>Value: {JSON.stringify(group)}</div>
<!-- prettier-ignore -->
<Radio value="first" [[props]] {style} bind:group>[[slot-default]]</Radio>
<!-- prettier-ignore -->
<Radio value="second" [[props]] {style} bind:group>Option 2</Radio>
<!-- prettier-ignore -->
<Radio value="third" [[props]] {style} bind:group>Option 3</Radio>
