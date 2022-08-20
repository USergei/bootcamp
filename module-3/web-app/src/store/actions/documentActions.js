import {saveDocument as writeDocument} from '../../services/documentService'

export const saveDocument = document => {
  return async (dispatch) => {
    try {
      const savedDocument = await writeDocument(document)

      savedDocument.length > 0 &&
        dispatch({
          type: "SAVE_DOCUMENT",
          payload: {document: savedDocument}
        })
    } catch (error) {
      dispatch({
        type: "SAVE_DOCUMENT_REJECTED",
        payload: {error}
      })
    }
  }
}
