const descriptions = {
	props: {
		open: 'Whether or not the tooltip should be shown.',
		elem:
			'The element to which the content should be anchored. This should usually be ' +
			'obtained through <span class="code text-black">bind:this</span>, ' +
			'which can then be passed directly in as a prop.'
	},
	slots: {
		default:
			'The content of the tooltip. Can be a string, HTML, or other components.'
	}
};

export default descriptions;
