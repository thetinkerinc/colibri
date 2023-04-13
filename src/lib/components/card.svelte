<div id="card">
	<slot />
</div>

<style>
#card {
	border-radius: var(
		--colibri-card-border-radius,
		var(--colibri-border-radius-lg)
	);
	border: var(--colibri-card-border, var(--colibri-border));
	background: var(
		--colibri-card-background-color,
		var(--colibri-background-color)
	);
	padding: var(--colibri-card-padding);
	box-shadow: var(--colibri-card-shadow, var(--colibri-shadow));
}
</style>
