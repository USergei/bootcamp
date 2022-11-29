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
    
    const truncateDocumentTitle = input => input.length > 25 ? `${input.substring(0, 25)}...` : input
    const syllableRegex = /[^aeiouy]*[aeiouy]+(?:[^aeiouy]*$|[^aeiouy](?=[^aeiouy]))?/gi;
    const syllabify = word => word.match(syllableRegex)

    useEffect(() => {
        if (projectId) {
            dispatch(readDocuments(projectId))
        }
    }, [])

    useMemo(() => {
        selectedDocuments && setDocuments(selectedDocuments)
    }, [selectedDocuments])

    // const testArr = ["Lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipisicing", "repellendus"]
    const word = "repellendus consectetur adipisicing"
    // const syllabyfiedWord = testArr.map(word => syllabify(word))
    const splittedWord = word.substring(0,25).split(" ")

    
    const syllabyfiedWord = syllabify(word.substring(0,25))
    
    console.log({splittedWord});
    const truncateTest = arr => {
            let ln = 0
            let str = ''
            for(let i = 0; i < arr.length; i++) {
                if (arr[i].length <= 12) {
                    str += arr[i] + " " 
                } 
                else {
                    arr[i]
                }

            }
        }
    
    // const truncateTest = arr => {
    //     let string = ' '
    //     for(let i = 0; i < arr.length; i++) {
    //         for(let j = 0; j < arr[i].length; j++) {
    //             if (arr[i][j] == arr[i].length - 1) {
    //                 string += arr[i][j]
    //                 console.log({string})
    //             }
                
    //             // if (string.length > 25) {
    //             //     console.log({string})
    //             // }
    //         }
    //     }
    // }
    console.log({res:truncateTest(syllabyfiedWord)}); 
    console.log({res:truncateDocumentTitle(word)}); 
    

    return (
        <div className={`${mainStyles.mainWrapper} ${style.container}`}> 
            {documents.length > 0 && documents.map((document, i) => (
                <Link className={style.document} key={i} to={`/document/${document.documentId}`}>
                    <div className={style['file-icon-wrapper']}>
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
                    <div className={style['file-title']}>{truncateDocumentTitle(document.title)}</div> 
                </Link>
            ))}
        </div>   
    )
}

export default Documents
