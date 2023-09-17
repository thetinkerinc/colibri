<script>
import { LoadingButton } from '@thetinkerinc/colibri';

import style from './style.js';

let beer;

async function handleClick() {
	const resp = await fetch(
		'https://random-data-api.com/api/v2/beers'
	);
	const json = await resp.json();
	beer = json;
}
</script>

<!-- prettier-ignore -->
<LoadingButton [[props]] {style} action={handleClick}>[[slot-default]] [[slot-confirm]]</LoadingButton>
{#if beer}
	<div>
		You should try
		{beer.brand}
		{beer.name}
	</div>
{/if}
