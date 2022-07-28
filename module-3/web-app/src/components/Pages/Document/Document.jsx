import React from "react"
import style from "./Document.module.scss"
import Editor from "../../Editor"


const Document = () => {
    return (
        <div className={style.editorContainer}>
            <div className={style.text}>
                <h1 className={style.title}>Dashboard</h1>
                <div className={style.greeting}>Wellcome back Ozz Dima - Last log in on 15 february at 1:30 pm</div>
            </div>
            <Editor/>
        </div>
    )
}

export default Document