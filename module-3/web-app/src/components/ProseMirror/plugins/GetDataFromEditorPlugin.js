import {Plugin} from 'prosemirror-state'

// export const GetDataFromEditorPlugin = dispatchUpdateCallback => {
// 	return new Plugin({
// 		view() {
// 			return {
// 				update (updatedView) {
// 					const editorContent = updatedView.state.toJSON()
// 					dispatchUpdateCallback(editorContent)	
// 				}
// 			}
// 		}
// 	})
// }

export const GetDataFromEditorPlugin = (initialStateContent, dispatchUpdateCallback) => new Plugin({
	state: {
		init(config, state) {
			if (typeof initialStateContent !== 'undefined') {
				state.doc = state.schema.nodeFromJSON(initialStateContent)
			}
		},
		apply(tr) {
			if (tr.docChanged) {
				dispatchUpdateCallback(tr.doc.toJSON())
			}
		},
	},
})
