import React, {useState, useEffect} from "react"
import  axios from 'axios'
import style from "./Projects.module.scss"

const Projects = () => {
    const [projects, setProjects] = useState('')
   
    useEffect(() => {
        axios.get("http://localhost:3001/selectAllProjects")
            .then(res => {
                setProjects(res.data)
            })
    }, [])
      
    return (
        <div> 
            {projects.title}
        </div>
    )
}

export default Projects
