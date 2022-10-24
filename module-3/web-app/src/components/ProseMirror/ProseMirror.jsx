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
import { useSelector } from 'react-redux'
import { getDocumentInEdit } from '../../store/selectors'

const ProseMirror = ({onEditorContentUpdate}) => {
    const documentInEdit = useSelector(getDocumentInEdit)
    const [editorState, setEditorState] = useState({})
    
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
    
    //TODO Use the same hook for Editor title
    useDebouncedEffect(() => onEditorContentUpdate(editorState), [editorState], 1000)

    useEffect(() => {
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
