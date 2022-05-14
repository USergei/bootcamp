import React from "react"
import style from './Dashboards.module.scss'
import DashboardsHeader from "./DashboardsHeader/DashboardsHeader"

const Dashboards = () => {
    return (
        <div className={style.dashboards}>
            <DashboardsHeader/>
        </div>
    )
}

export default Dashboards