export default {
	variables: {
		bodyBackgroundColor: '#eee',
		elementBackgroundColor: '#f1f1f1',
		fontColor: 'black',
		primaryColor: '#eb8190',
		primaryColorLight: '#f09ea9',
		primaryColorDark: '#e66072',
		secondaryColor: '#c0a0e0',
		secondaryColorLight: '#d1bae9',
		secondaryColorDark: '#ad84d7',
		neutralColorDark2: '#4f5763',
		neutralColorDark1: '#717c8e',
		neutralColor: '#9ca3af',
		neutralColorLight1: '#c6cbd2',
		neutralColorLight2: '#f1f2f4',
		shadow: '3px 3px 0 var(--colibri-neutral-color-dark-1)',
		border: '1px solid var(--colibri-neutral-color-light-1)',
		borderRadiusSm: '0',
		borderRadius: '0',
		borderRadiusLg: '0',
		fontSizeLg: '1.125rem',
		controlPlaceholderColor: 'var(--colibri-neutral-color)',
		controlDisabledBackgroundColor: 'var(--colibri-neutral-color-light-3)',
		controlDisabledOpacity: '0.6',
		controlDisabledFilter: 'grayscale(20%)'
	},
	accordian: { variables: { spacing: '0.3rem' } },
	modal: {
		variables: {
			overlayColor: 'rgba(0, 0, 0, 0.4)',
			marginTop: '2.5rem',
			marginTopLargeScreens: '5rem',
			width: '80%',
			maxWidth: '800px',
			widthSlim: '500px',
			maxWidthSlim: '90%',
			maxWidthFit: '90%',
			shadow: 'none'
		}
	},
	toast: {
		variables: {
			fontColor: 'black',
			infoBackgroundColor: '#bae1ff',
			successBackgroundColor: '#baffc9',
			warningBackgroundColor: '#ffffba',
			errorBackgroundColor: '#ffb3ba',
			infoTimerBackgroundColor: '#9bd4ff',
			successTimerBackgroundColor: '#9bffb1',
			warningTimerBackgroundColor: '#ffff62',
			errorTimerBackgroundColor: '#ff959e'
		},
		container: {
			top: 'unset',
			bottom: '1rem',
			left: '50%',
			transform: 'translate(-50%)'
		}
	},
	tooltip: {
		variables: {
			maxWidth: '400px',
			fontColor: 'white'
		}
	},
	button: {
		variables: {
			primaryFontColor: 'white',
			secondaryFontColor: 'white'
		}
	},
	checkbox: {
		variables: { size: '18px', checkSize: '8px' }
	},
	datePicker: {
		variables: {
			triggerPadding: '0.25rem 0.5rem',
			topbarPadding: '0.5rem',
			topbarControlPadding: '0.75rem',
			dateBorderRadius: '999px',
			dateSelectedFontColor: 'white',
			monthSpacing: '0.5rem',
			monthSelectedFontColor: 'white',
			actionsBorderTop: '1px solid black',
			actionsPadding: '0.5rem 0.75rem'
		}
	},
	input: {
		variables: { padding: '0.25rem 0.5rem' }
	},
	timePicker: {
		variables: {
			triggerPadding: '0.25rem 0.5rem',
			topbarPadding: '0.5rem 0',
			topbarFontSize: '1.875rem',
			topbarFontColor: 'rgba(255, 255, 255, 0.5)',
			topbarDisplayHoverBackground: 'rgba(255, 255, 255, 0.2)',
			topbarDisplayActiveFontColor: 'white',
			topbarAmpmFontSize: '1rem',
			highlightColor: 'white',
			handOpacity: '1',
			actionsBorderTop: '1px solid black',
			actionsPadding: '0.5rem 0.75rem'
		}
	},
	toggle: { variables: { size: '28px' } },
	highlighter: {
		variables: {
			backgroundColor: '#272822',
			fontColor: 'white'
		}
	}
};
