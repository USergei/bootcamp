import React from "react"
import style from './Dashboards.module.scss'
import DashboardsHeader from "./DashboardsHeader"
import StatsWidgetsBar from "./StatsWidgetsBar"
import Charts from "./Charts"

const Dashboards = () => {
    return (
        <div className={style.dashboards}>
            <DashboardsHeader/>
            <StatsWidgetsBar/>
            <Charts/>
        </div>
    )
}

export default Dashboards