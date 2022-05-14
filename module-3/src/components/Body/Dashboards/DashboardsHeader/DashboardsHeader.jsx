import React from "react"
import style from './DashboardsHeader.module.scss'

const DashboardsHeader = () => {
    return (
        <div className={style.dashboardsHeader}>
            <div className={style.dashboardText}>
                <h3 className={style.title}>Dashboard</h3>
                <div className={style.greeting}>Wellcome back Ozz Dima - Last log in on 15 february at 1:30 pm</div>
            </div>
            <div className={style.addWidget}>
                <div className={style.addWidgetText}>Add widget</div>
                <button className={style.addWidgetBtn}>+</button>
            </div>
        </div>
    )
}

export default DashboardsHeader