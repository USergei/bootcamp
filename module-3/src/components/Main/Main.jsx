import React from "react"
import style from './Main.module.scss'
import Navbar from './Navbar'
import Dashboards from './Dashboards'

const Main = ({isNavbarOpen}) => {
    return (
        <main className={style.main}>
            <Navbar isNavbarOpen={isNavbarOpen}/>
            <Dashboards/>
        </main>
    )
}

export default Main