import { Node, mergeAttributes } from '@tiptap/core';

let isListening = false;

let handleMousemove;
let handleMouseup;
let handleMouseleave;

const ResizableImage = Node.create({
	name: 'resizable-img',
	group: 'block',

	addAttributes() {
		return {
			src: { default: null },
			alt: { default: null },
			title: { default: null },
			width: { default: 250 },
			textAlign: { default: 'left' }
		};
	},

	addStorage() {
		return {
			clicked: false,
			resizing: false
		};
	},

	addCommands() {
		return {
			setImage:
				(options) =>
				({ commands }) => {
					return commands.insertContent({
						type: this.name,
						attrs: options
					});
				}
		};
	},

	renderHTML({ HTMLAttributes }) {
		return [
			'resizable-img',
			mergeAttributes(this.options.HTMLAttributes, HTMLAttributes)
		];
	},

	parseHTML() {
		return [
			{
				tag: 'resizable-img'
			}
		];
	},

	addNodeView() {
		return (props) => {
			handleMousemove = (e) => {
				if (!this.storage.clicked) {
					return;
				}
				if (typeof props.getPos !== 'function') {
					return;
				}
				const editor = props.editor.options.element;
				const styles = getComputedStyle(editor);
				const editorWidth =
					editor.clientWidth -
					parseFloat(styles.paddingLeft) -
					parseFloat(styles.paddingRight);
				const dx = e.movementX;
				const minWidth = 100;
				const maxWidth = Math.min(1024, 0.9 * editorWidth);
				const newWidth = props.node.attrs.width + dx;
				props.editor.view.dispatch(
					props.editor.view.state.tr.setNodeMarkup(props.getPos(), undefined, {
						...props.node.attrs,
						width: Math.max(minWidth, Math.min(maxWidth, newWidth))
					})
				);
			};

			handleMouseup = () => {
				this.storage.clicked = false;
			};

			handleMouseleave = () => {
				this.storage.clicked = false;
			};

			const dom = document.createElement('div');
			dom.classList.add('resizable-img');
			dom.style.textAlign = props.node.attrs.textAlign;
			const container = document.createElement('div');
			container.classList.add('resizable-img-container');
			dom.append(container);
			const img = document.createElement('img');
			img.src = props.node.attrs.src;
			img.width = props.node.attrs.width;
			container.append(img);
			const handle = makeDot('br');
			handle.addEventListener('mousedown', (e) => {
				e.preventDefault();
				e.stopPropagation();
				this.storage.clicked = true;
			});
			if (!isListening) {
				window.addEventListener('mousemove', handleMousemove);
				window.addEventListener('mouseup', handleMouseup);
				window.addEventListener('mouseleave', handleMouseleave);
				isListening = true;
			}
			container.append(handle);
			return { dom };
		};
	}
});

function makeDot(pos) {
	const dot = document.createElement('div');
	dot.classList.add('dot');
	dot.classList.add(pos);
	return dot;
}

export default ResizableImage;
