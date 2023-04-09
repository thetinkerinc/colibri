<script>
import { Button } from '@thetinkerinc/colibri';

function handleClick() {
	alert('clicked');
}
</script>

<Button [[type]] on:click={handleClick}>Click me</Button>
