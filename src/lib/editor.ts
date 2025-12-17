import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import type { RefObject } from "react";

export function createEditor(
	holderRef: RefObject<HTMLDivElement | null>,
	editorRef: RefObject<EditorJS | null>,
) {
	const editor = new EditorJS({
		/**
		 * Id of Element that should contain the Editor
		 */
		holder: holderRef.current,
		autofocus: true,

		/**
		 * Available Tools list.
		 */
		tools: {
			header: {
				class: Header,
				inlineToolbar: ["link"],
				config: {
					placeholder: "Enter a header",
					levels: [1, 2, 3, 4],
					defaultLevel: 1,
				},
			},
			list: {
				class: List,
				inlineToolbar: true,
				config: {
					defaultStyle: "unordered",
				},
			},
		},

		/**
		 * Initial data
		 */
		data: {
			blocks: [
				{
					type: "header",
					data: {
						text: "Welcome to Editor.js",
						level: 2,
					},
				},
				{
					type: "paragraph",
					data: {
						text: "This is a simple example of Editor.js integration. Start editing by clicking here!",
					},
				},
				{
					type: "list",
					data: {
						style: "unordered",
						items: [
							"Clean block-based editor",
							"Outputs JSON format",
							"Easy to integrate",
						],
					},
				},
			],
		},

		/**
		 * onReady callback
		 */
		onReady: () => {
			console.log("Editor.js is ready to work!");
		},

		/**
		 * onChange callback
		 */
		onChange: async () => {
			if (editorRef.current) {
				const savedData = await editorRef.current.save();
				console.log("Content saved:", savedData);
			}
		},
	});

	return editor;
}
