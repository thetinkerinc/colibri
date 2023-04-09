import { resolve } from 'path';
import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-auto';

const config = {
	preprocess: preprocess({
		postcss: true,
		sourceMap: true
	}),
	kit: {
		alias: {
			$layouts: resolve('./src/lib/layouts'),
			$components: resolve('./src/lib/components'),
			$utils: resolve('./src/lib/utils')
		},
		adapter: adapter()
	}
};

export default config;
