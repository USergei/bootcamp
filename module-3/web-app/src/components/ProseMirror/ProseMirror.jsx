import React, {useEffect} from "react";
import {EditorState} from "prosemirror-state"
import {EditorView} from "prosemirror-view"
import {Schema, DOMParser} from "prosemirror-model"
import {schema} from "prosemirror-schema-basic"
import {addListNodes} from "prosemirror-schema-list"
import {exampleSetup} from "prosemirror-example-setup"
import "./ProseMirror.css"
// import GetDataFromEditorPlugin from "./GetDataFromEditorPlugin"

function ProseMirror() {
    useEffect(() => {
        const mySchema = new Schema({
            nodes: addListNodes(schema.spec.nodes, "paragraph block*", "block"),
            marks: schema.spec.marks
        })
            
        window.view = new EditorView(document.querySelector("#editor"), {
            state: EditorState.create({
                doc: DOMParser.fromSchema(mySchema).parse(document.querySelector("#content")),
                plugins: exampleSetup({schema: mySchema})
            }),
            dispatchTransaction(transaction) {
                console.log("Document size went from", transaction.before.content.size,
                            "to", transaction.doc.content.size)
                
                let newState = window.view.state.apply(transaction)
                window.view.updateState(newState)
                let content = window.view.state.toJSON().doc
                console.log({content}) 
            }
        })
    })

    return (
        <div className="App">
            <div id="editor"></div>
            <div id="content"></div>
        </div>
    )
}

export default ProseMirror
