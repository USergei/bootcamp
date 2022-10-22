import React from "react"
import { useParams } from 'react-router-dom'
import style from "./Document.module.scss"
import mainStyles from "../../../App.module.scss"
import EditorContainer from "../../EditorContainer"


const Document = () => {
    const {id: documentId} = useParams()

    return (
        <div className={mainStyles.mainWrapper}>
            <div className={style.text}>
                <h1 className={style.title}>Editor</h1>
                <div className={style.greeting}>Wellcome back Ozz Dima - Last log in on 15 february at 1:30 pm</div>
            </div>
            <EditorContainer documentId={parseInt(documentId)}/>
        </div>
    )
}

export default Document
