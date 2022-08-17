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

async function postData(url = '', data = {}) {
    const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
        'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
    });
    return response.json();
}

const ProseMirror = () => {
    //redux
    const dispatch = useDispatch()
    const documentInEdit = useSelector(getDocumentInEdit)
    //end redux
    const [contentState, setEditorState] = useState({})
    // const debouncedContentState = useDebounce(contentState, 500)
    // const editorRef = useRef()
    // const contentRef = useRef()
    console.log('contentState', contentState)
    
    const onEditorContentUpdate = documentContent => {
        console.log('documentContent', documentContent)
        const dbData = {
            "title": "YYYYTT",
            "content": documentContent,
            "author_id": "authyyyyyorid",
            "project_id": "1",
            "status_id": "1"
        }
        postData('http://localhost:3001/writeDocumentData', dbData)
    }

    useMemo(() => {
        return onEditorContentUpdate(contentState)
    }, [contentState])

    useEffect(() => {
        // redux
        dispatch(saveDocument({document: {
            id: null,
            title: '',
            content: {},
            author_id: null,
            project_id: null,
            status_id: null,
            updated_at: null
        }}))
        // end redux
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
