import React from "react"
import { useParams } from 'react-router-dom'
import style from "./Document.module.scss"
import Editor from "../../Editor"


const Document = () => {
    const {id: documentId} = useParams()
    
    return (
        <div className={style.editorContainer}>
            <div className={style.text}>
                <h1 className={style.title}>Dashboard</h1>
                <div className={style.greeting}>Wellcome back Ozz Dima - Last log in on 15 february at 1:30 pm</div>
            </div>
            <Editor documentId={documentId}/>
        </div>
    )
}

export default Editor