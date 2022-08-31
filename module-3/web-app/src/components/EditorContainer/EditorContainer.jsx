import React from "react"
import style from "./EditorContainer.module.scss"
import EditorTitle from "./EditorTitle"
import ProseMirror from "../ProseMirror/ProseMirror"

const EditorContainer = () => {
    return (
        <div>
            <EditorTitle/>
            <ProseMirror/>
        </div>
    )
}

export default EditorContainer