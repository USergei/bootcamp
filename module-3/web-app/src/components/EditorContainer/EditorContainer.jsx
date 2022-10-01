import React from "react"
import style from "./EditorContainer.module.scss"
import EditorTitle from "./EditorTitle"
import ProseMirror from "../ProseMirror/ProseMirror"

const EditorContainer = ({documentId}) => {
    return (
        <div>
            <EditorTitle/>
            <ProseMirror documentId={documentId}/>
        </div>
    )
}

export default EditorContainer
