<script>
import { Button } from 'colibri';

function handleClick() {
	console.log('button clicked');
}
</script>

<Button on:click={handleClick}>Click me</Button>
