const descriptions = {
	props: {
		open:
			'Sets whether or not the modal should be open. You should generally bind to ' +
			'this variable, so that when the user closes the modal and open ' +
			'is updated by the component, the change is reflected in your local state.',
		slim:
			'When true, the modal will take up less space horizontally on the screen. ' +
			'Good for when there is only a small amount of content needed. Only one of slim ' +
			'or fit can be set to true.',
		fit:
			'Set fit to true in order to make the width of the modal fit its contents. ' +
			'Only one of fit or slim can be set to true.'
	},
	slots: {
		default:
			'The content to be placed in the modal. Can be anything, including styled html ' +
			'as well as other components.',
		title:
			'If present, the content will be placed at the top of the modal as a title, in ' +
			'line with the close button.',
		actions:
			'Use this slot to add buttons or any other action elements. They will go at the ' +
			'bottom of the modal, aligned to the right with spacing in between each one.',
		close:
			'Modals by default have an X in the top right corner as a close button. You can ' +
			'override this by providing content in the close slot.'
	}
};

export default descriptions;
