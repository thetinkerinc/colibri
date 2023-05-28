<script>
export let content = '';
export let hint = 'Write something...';
export let editable = true;
export let disabled = false;

import { onMount, tick, createEventDispatcher, onDestroy } from 'svelte';
import { BROWSER } from 'esm-env';
import { Editor } from '@tiptap/core';
import Document from '@tiptap/extension-document';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';
import Bold from '@tiptap/extension-bold';
import Italic from '@tiptap/extension-italic';
import Underline from '@tiptap/extension-underline';
import Strike from '@tiptap/extension-strike';
import Highlight from '@tiptap/extension-highlight';
import Heading from '@tiptap/extension-heading';
import BulletList from '@tiptap/extension-bullet-list';
import OrderedList from '@tiptap/extension-ordered-list';
import ListItem from '@tiptap/extension-list-item';
import Link from '@tiptap/extension-link';
import Blockquote from '@tiptap/extension-blockquote';
import HorizontalRule from '@tiptap/extension-horizontal-rule';
import TextAlign from '@tiptap/extension-text-align';
import History from '@tiptap/extension-history';
import Placeholder from '@tiptap/extension-placeholder';

import events from '$utils/events.js';
import utils from '$utils/general.js';
import ResizableImage from '$utils/resizable-image.js';

import FloatingAction from '$components/floating-action.svelte';
import Input from '$components/input.svelte';
import FileInput from '$components/file-input.svelte';

onMount(() => {
	editor = new Editor({
		element,
		content,
		editable,
		extensions: [
			Document,
			Paragraph,
			Text,
			Bold,
			Italic,
			Underline,
			Strike,
			Highlight,
			Heading.configure({
				levels: [1, 2]
			}),
			BulletList,
			OrderedList,
			ListItem,
			Link.configure({
				openOnClick: false
			}),
			ResizableImage,
			Blockquote,
			HorizontalRule,
			TextAlign.configure({
				types: ['heading', 'paragraph', 'resizable-img']
			}),
			History,
			Placeholder.configure({
				placeholder: hint
			})
		],
		onTransaction: () => {
			editor = editor;
		},
		onUpdate: async () => {
			internal = true;
			content = editor.getHTML();
			await tick();
			internal = false;
		}
	});
	events.on('imageclick', openImgActions);
});

onDestroy(() => {
	if (editor) {
		editor.destroy();
	}
	events.off('imageclick', openImgActions);
});

const dispatch = createEventDispatcher();

let element;
let editor;

let actionOpen = false;
let actionAnchor;

let caption;

let selectionPosition;
let urlOpen = false;
let url = '';
let hasUrl = false;
let internal = false;

const updateCaption = utils.debounce(_updateCaption, 200);

$: initLink(urlOpen);
$: handleDisabled(disabled);
$: updateContent(content);

function initLink() {
	if (!urlOpen) {
		url = '';
		hasUrl = false;
	} else {
		url = editor.getAttributes('link').href ?? '';
		if (url) {
			hasUrl = true;
		}
	}
}

function handleDisabled() {
	editor?.setOptions({
		editable: !disabled
	});
}

function updateContent() {
	if (!editor) {
		return;
	}
	if (!internal) {
		editor.commands.setContent(content);
	}
	editor.commands.focus();
}

function handleLink() {
	if (editor?.view?.state?.selection?.empty) {
		return;
	}
	editor.chain().focus().run();
	selectionPosition = getSelectionPos();
	urlOpen = true;
}

function handleSetLink() {
	editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
	urlOpen = false;
	url = '';
}

function handleClearLink() {
	editor.chain().focus().extendMarkRange('link').unsetLink().run();
	urlOpen = false;
	url = '';
}

function handleImg(evt) {
	if (!evt.detail) {
		return;
	}
	editor.chain().focus().setImage({ src: evt.detail }).run();
	dispatch('image');
}

function openImgActions(img) {
	actionAnchor = img.getBoundingClientRect();
	actionOpen = true;
}

function setImageWidth(w) {
	return () => {
		editor.chain().focus().setImageWidth(w).run();
	};
}

function handleImageCaption(evt) {
	caption = evt.detail;
	updateCaption();
}

function _updateCaption() {
	editor.commands.setImageCaption(caption);
}

function getSelectionPos() {
	const ranges = editor.view.state.selection.ranges;
	const from = Math.min(...ranges.map((range) => range.$from.pos));
	const to = Math.max(...ranges.map((range) => range.$to.pos));
	const start = editor.view.coordsAtPos(from);
	const end = editor.view.coordsAtPos(to, -1);
	const top = Math.min(start.top, end.top);
	const bottom = Math.max(start.bottom, end.bottom);
	const left = Math.min(start.left, end.left);
	const right = Math.max(start.right, end.right);
	const width = right - left;
	const height = bottom - top;
	const x = left;
	const y = top;
	return {
		top,
		bottom,
		left,
		right,
		width,
		height,
		x,
		y
	};
}
</script>

<svelte:window on:scroll={() => (selectionPosition = getSelectionPos())} />
<div class={editable && 'rounded-lg border-2 border-black'}>
	{#if editable}
		<div
			class="sticky top-0 z-10 m-0 flex flex-wrap gap-2 rounded-t-lg
                        border-b-2 border-b-black bg-white p-2">
			<div class="flex gap-1">
				<div
					class="tool"
					class:active={editor?.isActive('bold')}
					title="Bold (C-b)"
					on:click={() => editor?.chain()?.focus()?.toggleBold()?.run()}
					on:keyup={() => editor?.chain()?.focus()?.toggleBold()?.run()}>
					<i class="fas fa-bold" />
				</div>
				<div
					class="tool"
					class:active={editor?.isActive('italic')}
					title="Italic (C-i)"
					on:click={() => editor?.chain()?.focus()?.toggleItalic()?.run()}
					on:keyup={() => editor?.chain()?.focus()?.toggleItalic()?.run()}>
					<i class="fas fa-italic" />
				</div>
				<div
					class="tool"
					class:active={editor?.isActive('underline')}
					title="Underline (C-u)"
					on:click={() => editor?.chain()?.focus()?.toggleUnderline()?.run()}
					on:keyup={() => editor?.chain()?.focus()?.toggleUnderline()?.run()}>
					<i class="fas fa-underline" />
				</div>
				<div
					class="tool"
					class:active={editor?.isActive('strike')}
					title="Strike (C-S-x)"
					on:click={() => editor?.chain()?.focus()?.toggleStrike()?.run()}
					on:keyup={() => editor?.chain()?.focus()?.toggleStrike()?.run()}>
					<i class="fas fa-strikethrough" />
				</div>
				<div
					class="tool"
					class:active={editor?.isActive('highlight')}
					title="Highlight (C-S-h)"
					on:click={() => editor?.chain()?.focus()?.toggleHighlight()?.run()}
					on:keyup={() => editor?.chain()?.focus()?.toggleHighlight()?.run()}>
					<i class="fas fa-highlighter" />
				</div>
			</div>
			<div class="divider" />
			<div class="flex gap-1">
				<div
					class="tool"
					class:active={editor?.isActive('heading', { level: 1 })}
					title="Header (C-A-1)"
					on:click={() =>
						editor?.chain()?.focus()?.toggleHeading({ level: 1 })?.run()}
					on:keyup={() =>
						editor?.chain()?.focus()?.toggleHeading({ level: 1 })?.run()}>
					<i class="fas fa-heading" />
				</div>
				<div
					class="tool"
					class:active={editor?.isActive('heading', { level: 2 })}
					title="Sub-header (C-A-2)"
					on:click={() =>
						editor?.chain()?.focus()?.toggleHeading({ level: 2 })?.run()}
					on:keyup={() =>
						editor?.chain()?.focus()?.toggleHeading({ level: 2 })?.run()}>
					<i class="fas fa-heading fa-xs" />
				</div>
				<div
					class="tool"
					class:active={editor?.isActive('bulletList')}
					title="Bullet list (C-S-8)"
					on:click={() => editor?.chain()?.focus()?.toggleBulletList()?.run()}
					on:keyup={() => editor?.chain()?.focus()?.toggleBulletList()?.run()}>
					<i class="fas fa-list-ul" />
				</div>
				<div
					class="tool"
					class:active={editor?.isActive('orderedList')}
					title="Ordered list (C-S-7)"
					on:click={() => editor?.chain()?.focus()?.toggleOrderedList()?.run()}
					on:keyup={() => editor?.chain()?.focus()?.toggleOrderedList()?.run()}>
					<i class="fas fa-list-ol" />
				</div>
			</div>
			<div class="divider" />
			<div class="flex gap-1">
				<div
					class="tool"
					class:disabled={editor?.view?.state?.selection?.empty}
					title="Link"
					on:click|stopPropagation={handleLink}
					on:keyup|stopPropagation={handleLink}>
					<i class="fas fa-link" />
				</div>
				<FileInput
					type="image"
					rotationControls={true}
					outputWidth={1024}
					on:update={handleImg}>
					<svelte:fragment slot="trigger">
						<div class="tool">
							<i class="fas fa-image" />
						</div>
					</svelte:fragment>
				</FileInput>
				<div
					class="tool"
					class:active={editor?.isActive('blockquote')}
					title="Quote (C-S-b)"
					on:click={() => editor?.chain()?.focus()?.toggleBlockquote()?.run()}
					on:keyup={() => editor?.chain()?.focus()?.toggleBlockquote()?.run()}>
					<i class="fas fa-quote-left" />
				</div>
				<div
					class="tool"
					title="Horizontal rule"
					on:click={() => editor?.chain()?.focus()?.setHorizontalRule()?.run()}
					on:keyup={() => editor?.chain()?.focus()?.setHorizontalRule()?.run()}>
					<i class="fas fa-minus" />
				</div>
			</div>
			<div class="divider" />
			<div class="flex gap-1">
				<div
					class="tool"
					class:active={editor?.isActive({ textAlign: 'left' })}
					title="Align left (C-S-l)"
					on:click={() => editor?.chain()?.focus()?.setTextAlign('left')?.run()}
					on:keyup={() =>
						editor?.chain()?.focus()?.setTextAlign('left')?.run()}>
					<i class="fas fa-align-left" />
				</div>
				<div
					class="tool"
					class:active={editor?.isActive({ textAlign: 'center' })}
					title="Align center (C-S-c)"
					on:click={() =>
						editor?.chain()?.focus()?.setTextAlign('center')?.run()}
					on:keyup={() =>
						editor?.chain()?.focus()?.setTextAlign('center')?.run()}>
					<i class="fas fa-align-center" />
				</div>
				<div
					class="tool"
					class:active={editor?.isActive({ textAlign: 'justify' })}
					title="Justify (C-S-j)"
					on:click={() =>
						editor?.chain()?.focus()?.setTextAlign('justify')?.run()}
					on:keyup={() =>
						editor?.chain()?.focus()?.setTextAlign('justify')?.run()}>
					<i class="fas fa-align-justify" />
				</div>
				<div
					class="tool"
					class:active={editor?.isActive({ textAlign: 'right' })}
					title="Align right (C-S-r)"
					on:click={() =>
						editor?.chain()?.focus()?.setTextAlign('right')?.run()}
					on:keyup={() =>
						editor?.chain()?.focus()?.setTextAlign('right')?.run()}>
					<i class="fas fa-align-right" />
				</div>
			</div>
			<div class="divider" />
			<div class="flex gap-1">
				<div
					class="tool"
					class:disabled={!editor?.can().undo()}
					title="Undo (C-z)"
					on:click={() => editor?.chain()?.focus()?.undo()?.run()}
					on:keyup={() => editor?.chain()?.focus()?.undo()?.run()}>
					<i class="fas fa-undo" />
				</div>
				<div
					class="tool"
					class:disabled={!editor?.can().redo()}
					title="Redo (C-y)"
					on:click={() => editor?.chain()?.focus()?.redo()?.run()}
					on:keyup={() => editor?.chain()?.focus()?.redo()?.run()}>
					<i class="fas fa-redo" />
				</div>
			</div>
		</div>
	{/if}
	<div class="p-3" bind:this={element}>
		<style>
		.ProseMirror {
			outline: none;
			line-height: 1.3;
		}
		.ProseMirror p.is-editor-empty:first-child::before {
			content: attr(data-placeholder);
			color: #bfbfbf;
			float: left;
			pointer-events: none;
			height: 0;
		}
		.ProseMirror > * + * {
			margin-top: 0.75rem;
		}
		.ProseMirror h1,
		.ProseMirror h2 {
			line-height: 1.1;
		}
		.ProseMirror blockquote {
			padding-left: 1rem;
			border-left: 2px solid #ccc;
			font-style: italic;
		}
		.ProseMirror hr {
			border: none;
			border-top: 2px solid #ccc;
			width: 70%;
			margin: 2rem auto;
		}
		.ProseMirror .resizable-img .resizable-img-container {
			display: inline-block;
			position: relative;
			max-width: calc(min(90%, 1024px));
		}
		.ProseMirror .resizable-img img {
			max-width: 100%;
			border: 2px solid transparent;
		}
		.ProseMirror .resizable-img .dot {
			display: none;
		}
		.ProseMirror .resizable-img.ProseMirror-selectednode img {
			border: 2px solid #68cef8;
		}
		.ProseMirror .resizable-img.ProseMirror-selectednode .dot {
			width: 10px;
			height: 10px;
			position: absolute;
			border: 2px solid #68cef8;
			border-radius: 50%;
			background: white;
			display: initial;
		}
		.ProseMirror .resizable-img.ProseMirror-selectednode .dot.tl {
			top: -3px;
			left: -3px;
		}
		.ProseMirror .resizable-img.ProseMirror-selectednode .dot.tr {
			top: -3px;
			right: -3px;
		}
		.ProseMirror .resizable-img.ProseMirror-selectednode .dot.bl {
			bottom: 0;
			left: -3px;
		}
		.ProseMirror .resizable-img.ProseMirror-selectednode .dot.br {
			bottom: 0;
			right: -3px;
			cursor: nwse-resize;
		}
		.ProseMirror ol,
		.ProseMirror ul {
			margin-left: 1.25rem;
		}
		.ProseMirror li {
			list-style: disc;
		}
		</style>
		{#if !BROWSER}
			{@html content}
		{/if}
	</div>
</div>

<FloatingAction anchor={actionAnchor} bind:open={actionOpen}>
	<div class="flex items-center justify-center gap-2">
		<div
			class="tool"
			class:active={editor.getAttributes('resizable-img').width === '30%'}
			on:click={setImageWidth('30%')}>
			sm
		</div>
		<div
			class="tool"
			class:active={editor.getAttributes('resizable-img').width === '50%'}
			on:click={setImageWidth('50%')}>
			md
		</div>
		<div
			class="tool"
			class:active={editor.getAttributes('resizable-img').width === '100%'}
			on:click={setImageWidth('100%')}>
			lg
		</div>
	</div>
	<div class="mt-1 flex items-center gap-2">
		<Input
			type="text"
			placeholder="Caption"
			autofocus={true}
			forceFocus={true}
			value={editor.getAttributes('resizable-img').caption}
			on:change={handleImageCaption} />
	</div>
</FloatingAction>
<FloatingAction bind:open={urlOpen} anchor={selectionPosition}>
	<div class="flex items-center gap-2">
		<Input type="text" label="URL" bind:value={url} />
		<i
			class="fas fa-check"
			title="Set link"
			on:click={handleSetLink}
			on:keyup={handleSetLink} />
		{#if hasUrl}
			<i
				class="fas fa-times"
				title="Remove link"
				on:click={handleClearLink}
				on:keyup={handleClearLink} />
		{/if}
	</div>
</FloatingAction>

<style>
.tool {
	@apply inline-grid h-8 w-8 cursor-default place-content-center rounded;
}
.tool.active,
.tool:hover:not(.disabled) {
	@apply bg-black text-white;
}
.tool.disabled {
	@apply bg-gray-200 text-gray-600;
}
.divider {
	@apply w-[2px] bg-gray-300;
}
</style>
