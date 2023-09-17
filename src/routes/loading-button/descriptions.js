const descriptions = {
	props: {
		type: 'Whether to use the primary or secondary theme for the button.',
		disabled:
			'When true, will disable the button as well ' +
			"as give visual indication to the user. Won't emit " +
			'click events, navigate, or ask for confirmation when true. ' +
			'Only applies if href is not set.',
		loading:
			"When true, will show a spinning loading indicator in place of the button's " +
			"regular content. Won't emit click events, navigate, or ask for confirmation " +
			'when true. Only applies if href is not set.',
		rounded: 'When true, will fully round the edges of the button.',
		silent:
			'If set to true, errors caught when running action will not be thrown. ' +
			'It is highly recommended in this case to handle the error using the on:error event.'
	},
	slots: {
		default:
			'The content to be placed in the button. Can be anything, and generally will just be simple text.',
		confirm:
			'If provided, the button will open a modal when clicked which will prompt the user to confirm the ' +
			"action. The content provided in the slot will appear in the modal. The click event won't be " +
			"emitted until the user confirms the action, and won't be emitted at all if they cancel the " +
			'action or close the modal.'
	}
};

export default descriptions;
