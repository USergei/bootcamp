import React, {useState, useEffect} from "react"
import {useSearchParams} from "react-router-dom"
import style from "./Documents.module.scss"
import mainStyles from "../../../App.module.scss"

//TODO in progress documents catalogue page
//TODO move this in component fetch to a redux action later on
const Documents = () => {

    const [documents, setDocuments] = useState('')
    const [searchParams, setSearchParams] = useSearchParams()
    const projectId = searchParams.get('projectid')

    useEffect(() => {
        fetch("http://localhost:3001/selectAllDocuments/")
            .then(res => res.json())
            .then(data => setDocuments(data))
    }, [])
     
    return (
        <div className={mainStyles.mainWrapper}> 
            {documents.length > 0 && documents.map((document, i) => (
                <div className={style.document} key={i}>
                    <div className={style.title}>{document.title}</div> 
                    <div>{document.description}</div> 
                    <div>Created: {document.created_at}</div> 
                    <div>Updated: {document.updated_at}</div> 
                </div>
            ))}
        </div>   
    )
}

export default Documents
