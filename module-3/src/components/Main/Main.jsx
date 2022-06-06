import React from "react"
import style from './Main.module.scss'
import Navbar from './Navbar'
import Dashboards from './Dashboards'


const Main = () => {
    return (
        <main className={style.main}>
            <Navbar/>
            <Dashboards/>
        </main>
    )
}

export default Main