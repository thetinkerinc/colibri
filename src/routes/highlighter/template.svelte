<script>
import { Highlighter } from '@thetinkerinc/colibri';

import style from './style.js';

import 'prismjs/components/prism-python';
import 'prism-svelte';

import 'prismjs/themes/prism-okaidia.min.css';

const python =
	'import numpy as np\n' +
	'nums = np.random.normal(0, 0.1, 25)';
</script>

<Highlighter language="svelte" [[props]] {style} />
<Highlighter language="python" code={python} {style} />
