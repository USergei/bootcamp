const initialState = {}

const documentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "READ_DOCUMENTS":
            return {
                ...state,
                documentsByProjectId: action.payload.documents
            }
        case "READ_DOCUMENTS_REJECTED":
            return {
                ...state,
                error: action.payload.error
            }  
        default:
            return state
    }
}

export default documentsReducer
