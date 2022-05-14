import React from "react"
import style from './Body.module.scss'
import Navbar from './Navbar/Navbar'
import Dashboards from "./Dashboards/Dashboards"


const Body = () => {
    return (
        <body className={style.body}>
            <Navbar/>
            <Dashboards/>
        </body>
    )
}

export default Body