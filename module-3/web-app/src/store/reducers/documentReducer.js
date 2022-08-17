const initialState = {
    documentInEdit: {
        id: null,
        title: '',
        content: {},
        author_id: null,
        project_id: null,
        status_id: null,
        updated_at: null
    }
}

const documentReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SAVE_DOCUMENT":
            return {
                ...state,
                documentInEdit: action.payload.document
            }
        case "SAVE_DOCUMENT_REJECTED":
            return {
                ...state,
                error: action.payload.error
            }  
        default:
            return state
    }
}

export default documentReducer
