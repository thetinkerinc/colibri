const descriptions = {
	props: {
		selected:
			'A JavaScript Date object representing the currently ' +
			'selected time, or undefined if no time is selected. ' +
			'You can bind to this to read the selected time.',
		date:
			'The time picker only sets hours and minutes. ' +
			'If you need the time to fall on a specific date, ' +
			'you can pass in a JavaScript Date object. Defaults to today.',
		placeholder:
			'The prompt to be displayed when no time is selected. Defaults to ' +
			'<span class="code text-rose-500">"Choose time"</span>',
		format:
			'A <a href="https://day.js.org/docs/en/display/format" ' +
			'target="_blank" class="text-black">dayjs format string</a> ' +
			'to be used when displaying the selected time. Defaults to ' +
			'<span class="code text-rose-500">"h:mm a"</span>.',
		clearable:
			'Whether or not the user should be able to clear the value ' +
			'of the time picker. Clearing the value will return ' +
			'<span class="code text-black">undefined</span>.',
		disabled:
			'Whether or not users should be able to interact with the component.'
	}
};

export default descriptions;
