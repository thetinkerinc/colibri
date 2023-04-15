const descriptions = {
	props: {
		selected:
			'A JavaScript Date object representing the currently ' +
			'selected date, or undefined if no date is selected. ' +
			'You can bind to this to read the selected date.',
		placeholder:
			'The prompt to be displayed when no date is selected. Defaults to ' +
			'<span class="code text-rose-500">"Choose date"</span>',
		start:
			'A JavaScript Date object representing the earliest selectable date. ' +
			'Dates before start will be grayed out. Defaults to today.',
		end:
			'A JavaScript Date object representing the latest selectable date. ' +
			'Dates after end will be grayed out. Defaults to three years from today.',
		format:
			'A <a href="https://day.js.org/docs/en/display/format" ' +
			'target="_blank" class="text-black">dayjs format string</a> ' +
			'to be used when displaying the selected date. Defaults to ' +
			'<span class="code text-rose-500">"ddd MMM D"</span>.',
		highlighted:
			'An array of JavaScript Date objects which will be ' +
			'highlighted when the user opens the date picker.',
		clearable:
			'Whether or not the user should be able to clear the value ' +
			'of the date picker. Clearing the value will return ' +
			'<span class="code text-black">undefined</span>.',
		disabled:
			'Whether or not users should be able to interact with the component.'
	}
};

export default descriptions;
