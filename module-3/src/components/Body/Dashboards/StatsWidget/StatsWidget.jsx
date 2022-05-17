import React from "react";
import style from './StatsWidget.module.scss'
import SVG from 'react-inlinesvg'
import classNames from 'classnames/bind'

const StatsWidget = ({id, statsImg, type, title, figure, unitMessure}) => {
    const widgetClassNames = classNames({
        typeInfo: type === 'info',
        typeWarning: type === 'warning',
        typeAttention: type === 'attention',
        typeNotification: type === 'notification'        
      })
    return (
        <div className={`${style.statsWidget} ${widgetClassNames}`}>
            <div className={style.statsImg}>
                <SVG src={statsImg} alt="widget-img" />
            </div>
            <div className={style.statsText}>
                <div className={style.statsTitle}>{title}</div>
                <div className={style.statsFigure}>{figure}
                    {unitMessure && <span>{unitMessure}</span>}    
                </div>
            </div>
        </div>
    )
}

export default StatsWidget