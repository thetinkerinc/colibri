const descriptions = {
	props: {
		value:
			'The value of the input field. This can be set internally, ' +
			'or by the user. It will either be a string for types ' +
			'text, email, password, and textarea, and a number for ' +
			'type number. Value will be undefined if nothing has been entered.',
		type:
			'The type of input you would like. The input type will ' +
			'determine the data type of the value as well.',
		name: 'The name used to identify the input fied if used in a form.',
		placeholder:
			'A hint or placeholder value to be shown to the ' +
			'user when there is no value in the input.',
		integer:
			'This will cause the value to always be an integer ' +
			'by rounding down the input value.',
		min:
			'Set a minimum value for the input. Any values below this ' +
			'will automatically be set to the minimum.',
		max:
			'Set a maximum value for the input. Any values below this will ' +
			'automatically be set to the maximum.',
		autofocus:
			'If true, the input will request focus when it is mounted. ' +
			'If multiple inputs have autofocus set, the last one to be mounted will be the one that gets focus.',
		expand:
			'The textarea will attempt to expand its area to fit the ' +
			'size of the input. This effect will be overriden if the user ' +
			'resizes the textarea using the control. If you would like to ' +
			'only rely on the expand feature, you can disable resizing in CSS.',
		disabled:
			'Whether or not the user should be able to interact with the component.'
	},
	slots: {
		before:
			'The content of this slot will be placed at the start ' +
			'of the input. You can add icons or prompts or whatever else you like.',
		after:
			'The content of this slot will be placed at the end ' +
			'of the input. You can add icons or prompts or whatever else you like.'
	}
};

export default descriptions;
