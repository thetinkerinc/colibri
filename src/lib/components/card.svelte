<script>
export let element;
export let style = undefined;

import theme from '$utils/theme.js';

$: userStyles = theme.makeUserStyles('card', ['body'], style);
</script>

<div
	class="colibri-card-body {$userStyles.body.class}"
	style={$userStyles.body.inlines}
	bind:this={element}>
	<slot />
</div>
