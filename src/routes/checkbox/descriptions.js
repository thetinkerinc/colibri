const descriptions = {
	props: {
		checked:
			'Whether or not the box is checked. You should generally ' +
			'bind to this value, that way you will be able to set its value as well as read from it.',
		name: 'The name assigned to the input. Can be used to identify the value in form submissions.',
		value:
			'The value to be passed along with form submissions if the input is checked.',
		disabled:
			'Whether or not users should be able to interact with the component.'
	},
	slots: {
		default:
			'The content to be displayed next to the checkbox. ' +
			'Clicking the content will trigger the box as well. ' +
			'The content can be anything including strings, HTML, or other components.'
	}
};

export default descriptions;
