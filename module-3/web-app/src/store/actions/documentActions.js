import {
  saveDocument as writeDocument, 
  getDocument, getDocuments
} from '../../services/documentService'

export const saveDocument = (document, id = null) => {
  return async (dispatch) => {
    try {
      const savedDocument = await writeDocument(document, id)
      savedDocument[0].id && 
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

export const readDocuments = (projectId = null) => {
  return async (dispatch) => {
    try {
      const fetchedDocuments = await getDocuments(projectId)
      fetchedDocuments &&
        dispatch({
          type: "READ_DOCUMENTS",
          payload: {documents: fetchedDocuments}
        })
    } catch (error) {
      dispatch({
        type: "READ_DOCUMENTS_REJECTED",
        payload: {error}
      })
    }
  }
}
