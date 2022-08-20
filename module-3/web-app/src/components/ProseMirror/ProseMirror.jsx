import React, {useEffect, useState, useRef, useMemo} from "react"
import {EditorState} from "prosemirror-state"
import {EditorView} from "prosemirror-view"
import {Schema, DOMParser} from "prosemirror-model"
import {schema} from "prosemirror-schema-basic"
import {addListNodes} from "prosemirror-schema-list"
import {exampleSetup} from "prosemirror-example-setup"
// import {useDebounce} from "use-debounce"
import {GetDataFromEditorPlugin} from "./GetDataFromEditorPlugin"
import "./ProseMirror.css"

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { saveDocument } from '../../store/actions/documentActions'
import { getDocumentInEdit } from '../../store/selectors'

const ProseMirror = () => {
    const dispatch = useDispatch()
    const documentInEdit = useSelector(getDocumentInEdit)
    const [editorState, setEditorState] = useState({})
    // const eebouncedEditorState = useDebounce(editorState, 500)
    // const editorRef = useRef()
    // const contentRef = useRef()
    
    const onEditorContentUpdate = documentContent => {
        const documentData = {
            "title": "YYYYT",
            "content": documentContent,
            "author_id": "authyyyyyorid",
            "status_id": 1
        }

        dispatch(saveDocument(documentData))
    }

    useMemo(() => {
        return onEditorContentUpdate(editorState)
    }, [editorState])

    useEffect(() => {
        const mySchema = new Schema({
            nodes: addListNodes(schema.spec.nodes, "paragraph block*", "block"),
            marks: schema.spec.marks
        })
        window.view = new EditorView(document.querySelector("#editor"), {
            state: EditorState.create({
                doc: DOMParser.fromSchema(mySchema).parse(document.querySelector("#content")),
                plugins: [
                    // GetDataFromEditorPlugin(onEditorContentUpdate),
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
