import React from "react"
import style from "./Editor.module.scss"
import EditorTitle from "./EditorTitle"
import ProseMirror from "../ProseMirror/ProseMirror"

const Editor = ({documentId}) => {
    return (
        <div>
            <EditorTitle/>
            <ProseMirror documentId={documentId}/>
        </div>
    )
}

export default Editor