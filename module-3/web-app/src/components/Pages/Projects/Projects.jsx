import React, {useState, useEffect} from "react"
import style from "./Projects.module.scss"

//TODO
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
        <div> 
            {projects.length > 0 && projects.map((project, i) => (
                <p key={i}>{project.title}</p> 
            ))}
        </div>   
    )
}

export default Projects
