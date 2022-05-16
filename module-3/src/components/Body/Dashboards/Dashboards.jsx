import React from "react"
import style from './Dashboards.module.scss'
import DashboardsHeader from "./DashboardsHeader/DashboardsHeader"
import StatsWidgetsBar from "./StatsWidgetsBar"

const Dashboards = () => {
    return (
        <div className={style.dashboards}>
            <DashboardsHeader/>
            <StatsWidgetsBar/>
        </div>
    )
}

export default Dashboards