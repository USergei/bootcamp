import React, {useState, useEffect} from "react"
import {Link} from "react-router-dom"
import style from "./Projects.module.scss"

//TODO in progress projects catalogue page
const Projects = () => {
    const [projects, setProjects] = useState('')
    const [documents, setDocuments] = useState('')
   
    useEffect(() => {
        fetch("http://localhost:3001/selectAllProjects/")
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])

    // useEffect(() => {
    //     fetch("http://localhost:3001/selectAllDocuments/")
    //         .then(res => res.json())
    //         .then(data => setDocuments(data))
    // }, [])
     
    return (
        <div className={style.container}> 
            {projects.length > 0 && projects.map((project, i) => (
                <Link key={i} to={`/documents/?projectid=${project.id}`}>    
                    <div className={style.project}>
                        <div className={style.title}>{project.title}</div> 
                        <div>{project.description}</div> 
                        <div>Created: {project.created_at}</div> 
                        <div>Updated: {project.updated_at}</div> 
                    </div>
                </Link>
            ))}
        </div>   
    )
}

export default Projects
