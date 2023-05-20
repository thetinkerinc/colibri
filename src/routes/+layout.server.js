export async function load({ cookies }) {
	const userThemeName = cookies.get('user-theme') ?? 'colibri';
	const module = await import(`../lib/themes/${userThemeName}.js`);

	return {
		userThemeName,
		userTheme: module.default
	};
}
