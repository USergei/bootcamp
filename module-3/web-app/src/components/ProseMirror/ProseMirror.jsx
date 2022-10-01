import React, {useEffect, useState, useMemo} from "react"
import {EditorState} from "prosemirror-state"
import {EditorView} from "prosemirror-view"
import {Schema, DOMParser} from "prosemirror-model"
import {schema} from "prosemirror-schema-basic"
import {addListNodes} from "prosemirror-schema-list"
import {exampleSetup} from "prosemirror-example-setup"
import {GetDataFromEditorPlugin} from "./plugins/GetDataFromEditorPlugin"
import "./ProseMirror.css"
import { useDebouncedEffect } from "../../../src/reactCustomHooks/useDebouncedEffect"
import { useDispatch, useSelector } from 'react-redux'
import { saveDocument, readDocument } from '../../store/actions/documentActions'
import { getDocumentInEdit } from '../../store/selectors'
import { useNavigate } from "react-router-dom"

const ProseMirror = ({documentId}) => {
    const dispatch = useDispatch()
    const documentInEdit = useSelector(getDocumentInEdit)
    const [editorState, setEditorState] = useState({})
    const navigate = useNavigate()

    const onEditorContentUpdate = documentContent => {
        const documentData = {
            "title": "YYYYT",
            "content": documentContent,
            "author_id": "authyyyyyorid",
            "status_id": 1
        }
        if (Object.keys(documentContent).length > 0) {
            dispatch(saveDocument(documentData, documentInEdit.id))
        }
    }
    
    const initEditor = (initialEditorContent = undefined) => {
        //Destroy prev editor instance if it exists to force editor re-render
        window.view && window.view.destroy()

        const mySchema = new Schema({
            nodes: addListNodes(schema.spec.nodes, "paragraph block*", "block"),
            marks: schema.spec.marks
        })
        window.view = new EditorView(document.querySelector("#editor"), {
            state: EditorState.create({
                doc: DOMParser.fromSchema(mySchema).parse(document.querySelector("#content")),
                plugins: [
                    GetDataFromEditorPlugin(initialEditorContent, json => setEditorState(json)),
                    // GetDataFromEditorPlugin(setEditorState),
                    ...exampleSetup({schema: mySchema})
                ]
            }),
        })
    }

    useMemo(() => {
        if (documentInEdit.id) {
            navigate(`/document/${documentInEdit.id}`)
        }
    }, [documentInEdit.id])

    useDebouncedEffect(() => onEditorContentUpdate(editorState), [editorState], 1000)
    useEffect(() => {
        dispatch(readDocument(documentId))
    }, [])
    const initialValue = undefined
    useEffect(() => {
        //TODO If documentInEdit.id is not empty read editor initial state from database
        initEditor(documentInEdit?.content)
    }, [documentInEdit])

    return (
        <div className="App">
            <div id="editor"></div>
            <div id="content"></div>
        </div>
    )
}

export default ProseMirror
