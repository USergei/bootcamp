import {Plugin} from 'prosemirror-state'

export const GetDataFromEditorPlugin = dispatchUpdateCallback => {
	return new Plugin({
		view() {
			return {
				update (updatedView) {
					const editorContent = updatedView.state.toJSON()
					dispatchUpdateCallback(editorContent)	
				}
			}
		}
	})
}