export default {
    variables: {
        backgroundColor: '#333',
        fontColor: 'white',
        primaryColor: '#03b2dd',
        primaryColorLight: '#0fcdfc',
        primaryColorDark: '#0397bc',
        secondaryColor: '#eb3d72',
        secondaryColorLight: '#ee5a87',
        secondaryColorDark: '#e41856',

        neutralColorDark3: '#374151',
        neutralColorDark2: '#4b5563',
        neutralColorDark1: '#6b7280',
        neutralColor: '#9ca3af',
        neutralColorLight1: '#d1d5db',
        neutralColorLight2: '#e5e7eb',
        neutralColorLight3: '#f3f4f6',

        shadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',

        border: '1px solid var(--colibri-neutral-color-light-1)',
        borderRadiusSm: '0.125rem',
        borderRadius: '0.5rem',
        borderRadiusLg: '0.5rem',

        fontSizeLg: '1.125rem',

        controlPlaceholderColor: 'var(--colibri-neutral-color)',
        controlDisabledBackgroundColor: 'var(--colibri-neutral-color-light-3)',
        controlDisabledOpacity: '0.6',
        controlDisabledFilter: 'grayscale(20%)'
    },
    accordian: {
        variables: {
            spacing: '0.3rem'
        }
    },
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
        }
    },
    toast: {
        variables: {
            fontColor: 'white',
            warningFontColor: 'black',
            infoBackgroundColor: '#03b2dd',
            successBackgroundColor: '#4ade80',
            warningBackgroundColor: '#fde047',
            errorBackgroundColor: '#ef4444',
            infoTimerBackgroundColor: '#0397bc',
            successTimerBackgroundTimer: '#22c55e',
            warningTimerBackgroundColor: '#facc15',
            errorTimerBackgroundColor: '#dc2626'
        }
    },
    tooltip: {
        variables: {
            maxWidth: '400px',
            fontColor: 'white'
        }
    },
    button: {
        variables:{
            primaryFontColor: 'white',
            secondaryFontColor: 'white'
        }
    },
    checkbox: {
        variables: {
            size: '18px',
            checkSize: '8px'
        }
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
        variables: {
            padding: '0.25rem 0.5rem'
        }
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
            actionsPadding: '0.5rem 0.75rem',
        }
    },
    toggle: {
        variables: {
            size: '28px'
        }
    },
    highlighter: {
        variables: {
            backgroundColor: '#272822',
            fontColor: 'white'
        }
    }
};
