import React, {useEffect, useState, useRef, useMemo} from "react"
// import { useDebounce } from 'use-debounce'
import {EditorState} from "prosemirror-state"
import {EditorView} from "prosemirror-view"
import {Schema, DOMParser} from "prosemirror-model"
import {schema} from "prosemirror-schema-basic"
import {addListNodes} from "prosemirror-schema-list"
import {exampleSetup} from "prosemirror-example-setup"
import {GetDataFromEditorPlugin} from "./GetDataFromEditorPlugin"
import "./ProseMirror.css"


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

const useDebounce = () => {
    const [typingTimeout, setTypingTimeout] = useState('');
  
    function debounce(func, wait) {
      clearTimeout(typingTimeout);
      const timeout = setTimeout(() => {
        func();
      }, wait);
  
      setTypingTimeout(timeout);
    }
  
    return debounce;
  }

const ProseMirror = () => {
    const [contentState, setEditorState] = useState({})
    const debouncedContentState = useDebounce(contentState, 12000)
    // const debouncedContentState = useDebounce(contentState, 12000)
    // const editorRef = useRef()
    // const contentRef = useRef()
    // console.log('debouncedContentState', debouncedContentState)
    // console.log('contentState', contentState)
    
    const onEditorContentUpdate = documentContent => {
        console.log('documentContent', documentContent)
        const dbData = {
            "title": "OOOOO",
            "content": documentContent,
            "author_id": "authyyyyyorid",
            "project_id": "1",
            "status_id": "1"
        }
        postData('http://localhost:3001/writeDocumentData', dbData)
    }

    useMemo(() => {
        console.log('debouncedContentState', debouncedContentState)
        // return onEditorContentUpdate(debouncedContentState[0].doc)
    }, [debouncedContentState])

    useEffect(() => {
        console.log('However')
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
            // dispatchTransaction(transaction) {
            //     console.log("Document size went from", transaction.before.content.size,
            //                 "to", transaction.doc.content.size)
                
            //     let newState = window.view.state.apply(transaction)
            //     window.view.updateState(newState)
            //     let content = window.view.state.toJSON().doc
            //     console.log({content}) 
            // }
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
