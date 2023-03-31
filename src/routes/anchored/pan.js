function pan(node) {
	let clicked = false;

	node.addEventListener('mousedown', handleMouseDown);
	node.addEventListener('mousemove', handleMouseMove);
	node.addEventListener('mouseup', handleMouseUp);

	function handleMouseDown() {
		clicked = true;
	}

	function handleMouseMove(evt) {
		if (!clicked) {
			return;
		}
		node.scrollBy(-evt.movementX, -evt.movementY);
	}

	function handleMouseUp() {
		clicked = false;
	}

	return {
		destroy() {
			node.removeEventListener('mousedown', handleMouseDown);
			node.removeEventListener('mousemove', handleMouseMove);
			node.removeEventListener('mouseup', handleMouseUp);
		}
	};
}

export default pan;
