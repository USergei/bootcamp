import {
  saveDocument as writeDocument, 
  getDocument
} from '../../services/documentService'

export const saveDocument = (document, id = null) => {
  return async (dispatch) => {
    try {
      const savedDocument = await writeDocument(document, id)
      console.log({savedDocument});
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

export const readDocument = (id = null) => {
  return async (dispatch) => {
    try {
      const fetchedDocument = await getDocument(id)
      fetchedDocument.id &&
        dispatch({
          type: "READ_DOCUMENT",
          payload: {document: fetchedDocument}
        })
    } catch (error) {
      dispatch({
        type: "READ_DOCUMENT_REJECTED",
        payload: {error}
      })
    }
  }
}
