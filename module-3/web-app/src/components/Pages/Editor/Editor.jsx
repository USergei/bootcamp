import React from "react"
import style from "./Editor.module.scss"
import ProseMirror from "../../ProseMirror"
import EditorTitle from "./EditorTitle"

const Editor = () => {
    return (
        <div className={style.editorContainer}>
            <div className={style.text}>
                <h1 className={style.title}>Dashboard</h1>
                <div className={style.greeting}>Wellcome back Ozz Dima - Last log in on 15 february at 1:30 pm</div>
            </div>
            <EditorTitle/>
            <ProseMirror/>
        </div>
    )
}

export default Editor