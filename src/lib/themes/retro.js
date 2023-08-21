export default {
	variables: {
		bodyBackgroundColor: '#018181',
		elementBackgroundColor: '#c0c0c0',
		fontColor: 'black',
		primaryColor: '#c0c0c0',
		primaryColorLight: '#d1d1d1',
		primaryColorDark: '#adadad',
		secondaryColor: '#0300ff',
		secondaryColorDark: '#0200e5',
		secondaryColorLight: '#3532ff',
		neutralColorDark2: '#a1a1a1',
		neutralColorDark1: '#c7c7c7',
		neutralColor: '#eee',
		neutralColorLight1: '#f0f0f0',
		neutralColorLight2: '#ffffff',
		shadow: 'none',
		border: '3px outset #ddd',
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
			maxWidthFit: '90%'
		},
		body: { border: 'var(--colibri-border)' }
	},
	toast: {
		variables: {
			fontColor: 'white',
			successFontColor: 'black',
			warningFontColor: 'black',
			infoBackgroundColor: '#0300ff',
			successBackgroundColor: '#00ff00',
			warningBackgroundColor: '#ffff00',
			errorBackgroundColor: '#ff0101',
			infoTimerBackgroundColor: '#0200e5',
			successTimerBackgroundColor: '#00e500',
			warningTimerBackgroundColor: '#eaea00',
			errorTimerBackgroundColor: '#e60000'
		}
	},
	tooltip: {
		variables: {
			maxWidth: '400px'
		},
		body: { border: 'var(--colibri-border)' },
		arrow: { borderTopColor: '#898989' }
	},
	button: {
		variables: {
			primaryFontColor: 'black',
			secondaryFontColor: 'white'
		},
		body: { border: 'var(--colibri-border)' }
	},
	checkbox: {
		variables: {
			size: '18px',
			checkSize: '8px',
			checkColor: 'var(--colibri-secondary-color)'
		}
	},
	datePicker: {
		variables: {
			triggerPadding: '0.25rem 0.5rem',
			topbarPadding: '0.5rem',
			topbarControlPadding: '0.75rem',
			dateBorderRadius: '999px',
			dateSelectedFontColor: 'black',
			monthSelectedFontColor: 'black',
			dateSelectedBackground: 'var(--colibri-neutral-color)',
			monthSelectedBackground: 'var(--colibri-neutral-color)',
			monthSpacing: '0.5rem',
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
	toggle: {
		variables: {
			size: '28px',
			backgroundColorChecked: 'var(--colibri-secondary-color-light)'
		},
		knob: {
			borderRadius: '0',
			border: 'var(--colibri-border)'
		},
		body: { borderRadius: '0' }
	},
	highlighter: {
		variables: {
			backgroundColor: '#272822',
			fontColor: 'white'
		}
	}
};
