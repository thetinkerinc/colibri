const descriptions = {
	props: {
		value:
			'The value selected by the user. This will be one ' +
			'of the results returned from the getOptions function.',
		getOptions:
			'A function to get the possible options for the ' +
			'user to choose from. This function can be async, and will ' +
			'be debounced by the amount set in the delay prop. ' +
			'The function will be passed the current value of the ' +
			'input as a parameter, and should return an array.',
		getDisplay:
			'A function which takes in a value returned from ' +
			'getOptions and returns a string. This will be what is ' +
			'displayed in the input when the user selects an option. ' +
			'If neither component nor getOption are provided, this ' +
			'is also what will be used to display the options in the completion list.',
		getOption:
			'An optional function which takes in the values ' +
			'returned from getOptions and returns a string. ' +
			'This can be used to display the options in the completion list.',
		component:
			'An optional svelte component which can be used to ' +
			'display arbitrary content in the completion list. This ' +
			'can be helpful if you need to display more than just a ' +
			'simple string, or if you want to add styling to the ' +
			'options. The component is passed a single prop ' +
			'<span class="code text-black">item</span>, ' +
			'which will be an instance of the values returned from getOptions.',
		placeholder: 'A placeholder value for the input.',
		autofocus:
			'If true, the input will request focus when it is mounted. ' +
			'If multiple inputs have autofocus set, the last one to be mounted will be the one that gets focus.',
		pageSize:
			'The results of getOptions will autmatically be paginated, ' +
			'and this allows you to adjust the number of results displayed per page.',
		delay:
			'getOptions will be debounced and only called after a ' +
			'delay equal to the number of milliseconds set in delay.'
	},
	slots: {
		empty: 'A message to be displayed when the search returns no results.'
	}
};

export default descriptions;
