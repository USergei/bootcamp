import React, {useState, useEffect} from "react"
import style from "./Projects.module.scss"

//TODO in progress projects catalogue page
const Projects = () => {
    const [projects, setProjects] = useState('')
   
    useEffect(() => {
        async function getData(url = "http://localhost:3001/selectAllProjects") {
            const response = await fetch(url, {
                method: 'GET'
            })

            return response.json() 
        }
        getData().then(res => setProjects(res))
    }, [])
     
    return (
        <div className={style.container}> 
            {projects.length > 0 && projects.map((project, i) => (
                <div className={style.project} key={i}>
                    <div className={style.title}>{project.title}</div> 
                    <div>{project.description}</div> 
                    <div>Created: {project.created_at}</div> 
                    <div>Updated: {project.updated_at}</div> 
                </div>
            ))}
        </div>   
    )
}

export default Projects
