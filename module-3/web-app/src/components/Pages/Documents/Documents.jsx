import React, {useState, useEffect, useMemo} from "react"
import {useSearchParams, Link} from "react-router-dom"
import {readDocuments} from '../../../store/actions/documentActions'
import {useDispatch, useSelector} from 'react-redux'
import {getDocuments} from '../../../store/selectors/documentSelectors'
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

const Documents = () => {

    const selectedDocuments = useSelector(getDocuments)
    const [documents, setDocuments] = useState({})
    const dispatch = useDispatch()
    const [searchParams, setSearchParams] = useSearchParams()
    const projectId = searchParams.get('projectid')
    
    useEffect(() => {
        if (projectId) {
            dispatch(readDocuments(projectId))
        }
    }, [])

    useMemo(() => {
        selectedDocuments && setDocuments(selectedDocuments)  
    }, [selectedDocuments])

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
                            style={{backgroundColor: DOCUMENT_STATUSES[`${document.status}`].color}}
                        >
                            {DOCUMENT_STATUSES[`${document.status}`].title}
                        </span> 
                    </div>
                    <div className={style.title}>{document.title}</div> 
                </Link>
            ))}
        </div>   
    )
}

export default Documents
