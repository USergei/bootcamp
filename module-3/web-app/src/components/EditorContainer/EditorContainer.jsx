import React, {useEffect, useMemo} from "react"
import EditorTitle from "./EditorTitle"
import ProseMirror from "../ProseMirror/ProseMirror"
import { useDispatch, useSelector } from 'react-redux'
import { getDocumentInEdit } from '../../store/selectors'
import { useNavigate } from "react-router-dom"
import { saveDocument, readDocument } from '../../store/actions/documentActions'

const EditorContainer = ({documentId}) => {
    const documentInEdit = useSelector(getDocumentInEdit)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    //TODO Task-81 pass below func down as props to ProseMirror and DocumentTitle component 
    //TODO Task-81 add second param to this function(onEditorContentUpdate) and name it as document title
    const onEditorContentUpdate = documentContent => {
        //TODO Use actual author_id status_id and project_id instead of hardcoded values
        const documentData = {
            "title": "YYYYT",
            "content": documentContent,
            "author_id": "authyyyyyorid",
            "status_id": 1,
            "project_id": 5
        }
        if (Object.keys(documentContent).length > 0) {
            dispatch(saveDocument(documentData, documentInEdit.id))
        }
    }

    useMemo(() => {
        if (documentInEdit.id) {
            navigate(`/document/${documentInEdit.id}`)
        }
    }, [documentInEdit.id])

    useEffect(() => {
        if (documentId) {
            dispatch(readDocument(documentId))
        }
    }, [])

    return (
        <div>
            <EditorTitle/>
            <ProseMirror onEditorContentUpdate={onEditorContentUpdate}/>
        </div>
    )
}

export default EditorContainer
