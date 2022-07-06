import React from "react"
import style from './Dashboards.module.scss'
import DashboardsHeader from './DashboardsHeader'
import StatsWidgetsBar from './StatsWidgetsBar'
import ContactsWidget from './ContactsWidget'
import ReviewsWidget from './ReviewsWidget'
import TasksWidget from './TasksWidget'
import {
    HistogramWidget,
    PieWidget,
    RadarWidget,
    ScatterWidget
} from "./Charts"

const Dashboards = () => {
    return (
        <div className={style.dashboards}>
            <DashboardsHeader/>
            <StatsWidgetsBar/>
            <div className={style.charts}>
                <div className={style.mainChart}>
                    <ScatterWidget/>
                </div>
                <div className={style.sideCharts}>
                    <HistogramWidget/>
                    <PieWidget/>
                </div>
            </div>  
            <div className={style.dashboardTwoColumnRow}>
                <ContactsWidget/>
                <ReviewsWidget/>
            </div>
            <div className={style.dashboardTwoColumnRow}>
                <TasksWidget/>
                <RadarWidget/>
            </div>
        </div>
    )
}

export default Dashboards