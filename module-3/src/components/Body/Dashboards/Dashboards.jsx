import React from "react"
import style from './Dashboards.module.scss'
import DashboardsHeader from "./DashboardsHeader"
import StatsWidgetsBar from "./StatsWidgetsBar"
import Charts from "./Charts"
import SocialWidgets from "./SocialWidgets"

const Dashboards = () => {
    return (
        <div className={style.dashboards}>
            <DashboardsHeader/>
            <StatsWidgetsBar/>
            <Charts/>
            <SocialWidgets/>
        </div>
    )
}

export default Dashboards