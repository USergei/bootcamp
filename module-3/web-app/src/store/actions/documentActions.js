import {saveDocument as writeDocument} from '../../services/documentService'

export const saveDocument = (document, id = null) => {
  return async (dispatch) => {
    try {
      const savedDocument = await writeDocument(document, id)
      console.log('SavedDocument>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>', savedDocument);

      savedDocument.length > 0 &&
        dispatch({
          type: "SAVE_DOCUMENT",
          payload: {document: savedDocument[0]}
        })
    } catch (error) {
      dispatch({
        type: "SAVE_DOCUMENT_REJECTED",
        payload: {error}
      })
    }
  }
}
