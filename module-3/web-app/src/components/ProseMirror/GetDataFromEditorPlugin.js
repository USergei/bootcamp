import {Plugin} from 'prosemirror-state';
import {updateFromView, getActiveMarks, getAvailableNodeTypes, getAvailableMarks, getHTMLStringFromState} from 'client/features/story-editor/prosemirror/utils.js'

export default (dispatchUpdateCallback) => {
	return new Plugin({
		view() {
			return {
				update (updatedView) {
					const json = updatedView.state.toJSON()
					dispatchUpdateCallback(json)
				}
			}
		}
	})
}