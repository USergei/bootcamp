import React, {useState, useEffect} from "react"
import {useSearchParams, Link} from "react-router-dom"
import style from "./Documents.module.scss"
import mainStyles from "../../../App.module.scss"

//TODO move this in component fetch to a redux action later on
const Documents = () => {

    const [documents, setDocuments] = useState('')
    const [searchParams, setSearchParams] = useSearchParams()
    const projectId = searchParams.get('projectid')
    
    useEffect(() => {
        fetch(`http://localhost:3001/selectAllDocuments/${projectId}`)
            .then(res => res.json())
            .then(data => setDocuments(data))
    }, [])

    return (
        <div className={`${mainStyles.mainWrapper} ${style.container}`}> 
            {documents.length > 0 && documents.map((document, i) => (
                <Link className={style.document} key={i} to={`/document/${document.documentId}`}>
                    <div className={style.icon}>
                        <span/>
                        <span/>
                        <span/>
                        <span/> 
                        
                        {/* <div>Created: {document.createdAt}</div> 
                        <div>Updated: {document.updatedAt}</div>  */}
                    </div>
                    <div className={style.title}>{document.title}</div> 
                </Link>
            ))}
        </div>   
    )
}

export default Documents
