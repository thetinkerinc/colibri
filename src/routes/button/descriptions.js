const descriptions = {
	props: {
		type: 'Whether to use the primary or secondary theme for the button.',
		disabled:
			'When true, will disable the button as well ' +
			"as give visual indication to the user. Won't emit " +
			'click events, navigate, or ask for confirmation when true.',
		loading:
			"When true, will show a spinning loading indicator in place of the button's " +
			"regular content. Won't emit click events, navigate, or ask for confirmation " +
			'when true.',
		rounded: 'When true, will fully round the edges of the button.',
		href:
			"When set, the button will act as an &lt;a&gt; tag. It won't emit the usual " +
			'click event, instead it will simply navigate to the specified URL. ' +
			'The URL can be relative, absolute, or external.',
		external:
			'For use in conjunction with href. When true, will open the specified link in a new tab.'
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
