<script>
import { Button } from 'colibri';
import { Modal } from 'colibri';

let open;
</script>

<Button on:click={() => (open = true)}>Open modal</Button>
<Modal bind:open>Modal content</Modal>
