import { Node, mergeAttributes } from '@tiptap/core';

import events from '$utils/events.js';

const ResizableImage = Node.create({
	name: 'resizable-img',
	group: 'block',

	addAttributes() {
		return {
			src: { default: null },
			alt: { default: null },
			title: { default: null },
			caption: { default: null },
			width: { default: '50%' },
			textAlign: { default: 'left' }
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
				},
			setImageWidth:
				(options) =>
				({ commands }) => {
					return commands.updateAttributes('resizable-img', { width: options });
				},
			setImageCaption:
				(options) =>
				({ commands }) => {
					return commands.updateAttributes('resizable-img', {
						caption: options
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
			const dom = document.createElement('figure');
			dom.style.textAlign = props.node.attrs.textAlign;
			dom.innerHTML = `<img src=${props.node.attrs.src} width="${props.node.attrs.width}" />`;
			const img = dom.firstChild;
			img.style.display = 'inline-block';
			const caption = document.createElement('figcaption');
			caption.innerText = props.node.attrs.caption;
			dom.append(caption);
			img.onclick = () => {
				events.emit('imageclick', img);
			};
			setTimeout(() => {
				events.emit('imageclick', img);
			}, 0);
			return { dom };
		};
	}
});

export default ResizableImage;
