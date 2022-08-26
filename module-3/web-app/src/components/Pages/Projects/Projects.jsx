import React, {useState, useEffect} from "react"
import  axios from 'axios'
import style from "./Projects.module.scss"

const Projects = () => {
    const [projects, setProjects] = useState('')
   
    useEffect(() => {
        axios.get("http://localhost:3001/selectAllProjects")
            .then(res => {
                setProjects(res.data)
                console.log({projects: res.data})
            })
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
