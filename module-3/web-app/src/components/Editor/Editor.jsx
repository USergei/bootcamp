import React from "react"
import style from "./Editor.module.scss"
import EditorTitle from "./EditorTitle"
import ProseMirror from "../ProseMirror/ProseMirror"

const Editor = () => {
    return (
        <div>
            <EditorTitle/>
            <ProseMirror/>
        </div>
    )
}

export default Editor