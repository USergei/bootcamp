import React from "react"
import { getData } from "../../../services/getData"
import style from "./Projects.module.scss"

// const  data = async () => {
//    return await getData('http://localhost:3001/selectAllProjects')
// }
// console.log('>>>>>>>', data())
const data = getData('http://localhost:3001/selectAllProjects')
console.log('>>>>>>>', data)

const Projects = () => {
    return (
        <div> 
            PROJECTS
        </div>
    )
}

export default Projects
