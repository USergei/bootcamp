import React from "react"
import style from './DashboardsHeader.module.scss'
import SVG from 'react-inlinesvg'
import plus from './../../../../../src/assets/icons/plus.svg'

const DashboardsHeader = () => {
    return (
        <div className={style.dashboardsHeader}>
            <div className={style.dashboardText}>
                <h1 className={style.title}>Dashboard</h1>
                <div className={style.greeting}>Wellcome back Ozz Dima - Last log in on 15 february at 1:30 pm</div>
            </div>
            <div className={style.addWidget}>
                <div className={style.addWidgetText}>Add widget</div>
                <button className={style.addWidgetBtn}>
                    <SVG src={plus} alt="plusIcon"/>
                </button>
            </div>
        </div>
    )
}

export default DashboardsHeader