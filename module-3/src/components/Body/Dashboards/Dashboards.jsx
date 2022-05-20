import React from "react"
import style from './Dashboards.module.scss'
import DashboardsHeader from "./DashboardsHeader"
import StatsWidgetsBar from "./StatsWidgetsBar"
import Charts from "./Charts"
import SocialWidgets from "./SocialWidgets"
import TasksWidget from "./TasksWidget"
import RadarWidget from "./Charts/RadarWidget"

const Dashboards = () => {
    return (
        <div className={style.dashboards}>
            <DashboardsHeader/>
            <StatsWidgetsBar/>
            <Charts/>
            <SocialWidgets/>
            <div className={style.tasksRadar}>
                <TasksWidget/>
                <RadarWidget/>
            </div>
        </div>
    )
}

export default Dashboards