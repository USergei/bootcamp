import React, {useEffect, useState} from "react"
import {EditorState} from "prosemirror-state"
import {EditorView} from "prosemirror-view"
import {Schema, DOMParser} from "prosemirror-model"
import {schema} from "prosemirror-schema-basic"
import {addListNodes} from "prosemirror-schema-list"
import {exampleSetup} from "prosemirror-example-setup"
import {GetDataFromEditorPlugin} from "./GetDataFromEditorPlugin"
import "./ProseMirror.css"
import { useDebouncedEffect } from "../../../src/reactCustomHooks/useDebouncedEffect"
import { useDispatch, useSelector } from 'react-redux'
import { saveDocument } from '../../store/actions/documentActions'
import { getDocumentInEdit } from '../../store/selectors'

const ProseMirror = () => {
    const dispatch = useDispatch()
    const documentInEdit = useSelector(getDocumentInEdit)
    const [editorState, setEditorState] = useState({})

    const onEditorContentUpdate = documentContent => {
        const documentData = {
            "title": "YYYYT",
            "content": documentContent,
            "author_id": "authyyyyyorid",
            "status_id": 1
        }
        
        dispatch(saveDocument(documentData, documentInEdit.id))
    }
    
    useDebouncedEffect(() => onEditorContentUpdate(editorState), [editorState], 1000)

    useEffect(() => {
        const mySchema = new Schema({
            nodes: addListNodes(schema.spec.nodes, "paragraph block*", "block"),
            marks: schema.spec.marks
        })
        window.view = new EditorView(document.querySelector("#editor"), {
            state: EditorState.create({
                doc: DOMParser.fromSchema(mySchema).parse(document.querySelector("#content")),
                plugins: [
                    GetDataFromEditorPlugin(setEditorState),
                    ...exampleSetup({schema: mySchema})
                ]
            }),
        })
    }, [])

    return (
        <div className="App">
            <div id="editor"></div>
            <div id="content"></div>
        </div>
    )
}

export default ProseMirror
