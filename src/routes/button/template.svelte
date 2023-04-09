<script>
import { Button } from '@thetinkerinc/colibri';

function handleClick() {
	alert('clicked');
}
</script>

<Button [[props]] on:click={handleClick}
	>[[slot-default]] [[slot-confirm]]</Button>
