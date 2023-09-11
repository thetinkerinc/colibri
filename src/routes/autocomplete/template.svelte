<script>
import { Autocomplete } from '@thetinkerinc/colibri';

import style from './style.js';

let value;

async function getOptions(search) {
	const resp = await fetch(
		`https://gutendex.com/books?search=${encodeURIComponent(
			search
		)}`
	);
	const json = await resp.json();
	return json.results;
}

function getDisplay(item) {
	if (item.title.length > 50) {
		return item.title.slice(0, 50) + '...';
	}
	return item.title;
}
</script>

<!-- prettier-ignore -->
<Autocomplete {getOptions} {getDisplay} {style} [[props]] bind:value>[[slot-empty]]</Autocomplete>
