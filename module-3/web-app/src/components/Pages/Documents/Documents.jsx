import React, {useState, useEffect} from "react"
import {useSearchParams, Link} from "react-router-dom"
import style from "./Documents.module.scss"
import mainStyles from "../../../App.module.scss"

const DOCUMENT_STATUSES = {
    DRAFT: {
        title: "draft",
        color: "#7f4fae"
    },
    IN_REVIEW: {
        title: "in review",
        color: "#b74e1b"
    },
    PUBLISHED: {
        title: "published",
        color: "#2b680f"
    }
}

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
                    <div className={style.fileIcon}>
                        <span className={style.line}/>
                        <span className={style.line}/>
                        <span className={style.line}/>
                        <span className={style.line}/>
                        <span 
                            className={style.badge} 
                            style={{backgroundColor: DOCUMENT_STATUSES["PUBLISHED"].color}}
                        >
                            {DOCUMENT_STATUSES["PUBLISHED"].title}
                        </span> 
                        
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
