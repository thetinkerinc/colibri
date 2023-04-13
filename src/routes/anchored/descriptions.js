const descriptions = {
	props: {
		open: 'Whether or not the content should be shown.',
		anchor:
			'The element to which the content should be anchored. This should usually be ' +
			'obtained through <span class="code text-black">bind:this</span> ' +
			'on the anchor element, which can then be passed directly in as a prop.',
		position:
			'Where in relation to the anchor element the content should be placed. The ' +
			'content will try to stay in the preferred position when possible, but for ' +
			'positions other than <span class="code text-rose-500">"center"</span>, ' +
			'it will flip sides if it would otherwise be outside its container.',
		nudgeHorizontal:
			'Nudge the content by a percentage amount horizontally.<br /><br />' +
			'If <span class="code text-black">position</span> is ' +
			'<span class="code text-rose-500">"left"</span> or ' +
			'<span class="code text-rose-500">"right"</span>, positive values will move the ' +
			'content away from the anchor, and negative values will move it towards.<br /><br />' +
			'If <span class="code text-black">position</span> is ' +
			'<span class="code text-rose-500">"top"</span> or ' +
			'<span class="code text-rose-500">"bottom"</span>, positive values will move the ' +
			'content to the right, and negative values will move it to the left. <br /><br />' +
			'The values are percentages, and are used to translate the content.',
		nudgeVertical:
			'Nudge the content by a percentage amount vertically.<br /><br />' +
			'If <span class="code text-black">position</span> is ' +
			'<span class="code text-rose-500">"top"</span> or ' +
			'<span class="code text-rose-500">"bottom"</span>, positive values will move the ' +
			'content away from the anchor, and negative values will move it towards.<br /><br />' +
			'If <span class="code text-black">position</span> is ' +
			'<span class="code text-rose-500">"left"</span> or ' +
			'<span class="code text-rose-500">"right"</span>, positive values will move the ' +
			'content down, and negative values will move it up. <br /><br />' +
			'The values are percentages, and are used to translate the content.'
	},
	slots: {
		default:
			'The anchored content to be displayed. Can be a string, HTML, or other components.',
		decoration:
			'Use the decoration slot to add a pointer which will be centered with respect ' +
			'to the anchor. You can place arbitrary HTML in the slot, and the pointer is not limited ' +
			'to an arrow.<br /><br />Decoration will not appear if ' +
			'<span class="code text-black">position</span> is ' +
			'<span class="code text-rose-500">"center"</span>.'
	}
};

export default descriptions;
