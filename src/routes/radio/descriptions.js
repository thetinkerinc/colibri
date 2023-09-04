const descriptions = {
	props: {
		name:
			'An identifier given to the group of radios. ' +
			'This will identify which radios belong to the group, ' +
			'as well as be the identifier submitted whe using forms.',
		value:
			'The value to be assigned to the radio. ' +
			'This will be the value given to ' +
			'<span class="code text-black">group</span> if the option is selected. ' +
			'<span class="code text-black">value</span> can be of any type. ' +
			'This example shows strings, but it can be booleans, numbers, or arbitrary objects.',
		group:
			'This will be the overall value of the set of radio inputs. ' +
			'If <span class="code text-black">allowMultiple</span> is ' +
			'<span class="code text-sky-500">true</span>, ' +
			'the value will be an array, otherwise it will be a single value.',
		allowMultiple:
			'Whether or not the radio inputs should allow selecting multiple values. ' +
			'if <span class="code text-sky-500">true</span>, the returned value will be an array.',
		clearable:
			'Whether or not the user should be able to clear the value ' +
			'of the radio input. Clearing the value will return ' +
			'<span class="code text-black">undefined</span>.',
		disabled:
			'Whether or not users should be able to interact with the component.'
	},
	slots: {
		default:
			'The content to be displayed next to the radio input. ' +
			'Clicking the content will trigger the box as well. ' +
			'The content can be anything including strings, HTML, or other components.'
	}
};

export default descriptions;
