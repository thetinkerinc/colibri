const descriptions = {
	props: {
		language:
			'The language you would like to highlight. ' +
			'It must be a supported Prism language, and you need ' +
			'to import the appropriate language file.',
		code: 'The code to highlight as a regular string.',
		format:
			'An optional function that can be used to ' +
			'process the code before highlighting. For example, ' +
			'the code examples here on the Colibri docs are ' +
			'formatted using Prettier. The function is passed ' +
			'the code as a string, and should return a string ' +
			'which is the formatted code.',
		strict:
			'If true, throw an error if the code is invalid. ' +
			'If the input will be dynamic, like it is here, ' +
			'it makes sense to leave strict false. ' +
			'The default is for strict to be false.'
	}
};

export default descriptions;
