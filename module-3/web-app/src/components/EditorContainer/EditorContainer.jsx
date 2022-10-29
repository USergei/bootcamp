import React, {useEffect, useState, useMemo} from "react"
import EditorTitle from "./EditorTitle"
import ProseMirror from "../ProseMirror/ProseMirror"
import { useDispatch, useSelector } from 'react-redux'
import { getDocumentInEdit } from '../../store/selectors'
import { useNavigate } from "react-router-dom"
import { saveDocument, readDocument } from '../../store/actions/documentActions'
import { useDebouncedEffect } from "../../../src/reactCustomHooks/useDebouncedEffect"

const EditorContainer = ({documentId}) => {
    const documentInEdit = useSelector(getDocumentInEdit)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [documentTitle, setDocumentTitle] = useState(documentInEdit.title || '')

    const onChange = (e) => {
        setDocumentTitle(e.target.value)
    }

    const onEditorContentUpdate = (documentContent, documentTitle) => {
        //TODO Use actual author_id status_id and project_id instead of hardcoded values
        const documentData = {
            "title": documentTitle,
            "content": documentContent,
            "author_id": "authyyyyyorid",
            "status_id": 1,
            "project_id": 5
        }
        
        if (Object.keys(documentContent).length > 0 || documentTitle) {
            dispatch(saveDocument(documentData, documentInEdit.id))
        }
    }

    useMemo(() => {
        if (documentInEdit.id) {
            navigate(`/document/${documentInEdit.id}`)
        }
    }, [documentInEdit.id])

    useMemo(() => {
        setDocumentTitle(documentInEdit?.title)
    }, [documentInEdit])

    useEffect(() => {
        if (documentId) {
            dispatch(readDocument(documentId))
        }
    }, [])

    useDebouncedEffect(
        () => onEditorContentUpdate(documentInEdit?.content, documentTitle), 
        [documentTitle], 
        1000
    )

    return (
        <div>
            <EditorTitle value={documentTitle} onChange={onChange}/>
            <ProseMirror onEditorContentUpdate={onEditorContentUpdate} documentTitle={documentTitle}/>
        </div>
    )
}

export default EditorContainer
