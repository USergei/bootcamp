import React from "react"
import style from './Body.module.scss'
import Navbar from './Navbar'
import Dashboards from './Dashboards/Dashboards'


const Body = () => {
    return (
        <div className={style.body}>
            <Navbar/>
            <Dashboards/>
        </div>
    )
}

export default Body