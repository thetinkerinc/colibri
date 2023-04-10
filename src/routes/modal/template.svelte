<script>
import { Button, Modal } from '@thetinkerinc/colibri';

let open = false;
</script>

<Button on:click={() => (open = true)}>Open modal</Button>
<!-- prettier-ignore -->
<Modal [[props]] bind:open>[[slot-title]][[slot-close]][[slot-default]][[slot-actions]]</Modal>
