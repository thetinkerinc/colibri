<script>
import { getContext } from 'svelte';
import * as colors from 'color2k';

const { userThemeObject, isDark } = getContext('theme');

$: $isDark = getIsDark($userThemeObject);

function getIsDark() {
	try {
        const bg=$userThemeObject.variables.bodyBackgroundColor
		return colors.getLuminance(bg) < 0.5;
	} catch (err) {
		return false;
	}
}
</script>
