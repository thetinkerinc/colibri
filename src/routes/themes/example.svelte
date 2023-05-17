<script>
import { Themer } from '@thetinkerinc/colibri';
import theme from '@thetinkerinc/colibri/themes/[[theme]].js';

import '@thetinkerinc/colibri/styles/all.css';
</script>

<Themer {theme}>
	<slot />
</Themer>
