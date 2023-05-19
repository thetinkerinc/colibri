<script>
import { Button, Modal } from '@thetinkerinc/colibri';

import style from './style.js';

let open = false;
</script>

<Button on:click={() => (open = true)}>Open modal</Button>
<!-- prettier-ignore -->
<Modal [[props]] {style} bind:open>[[slot-title]][[slot-close]][[slot-default]][[slot-actions]]</Modal>
