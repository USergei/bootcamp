import React from "react";
import style from './StatsWidget.module.scss'
import SVG from 'react-inlinesvg'
import classNames from 'classnames'

const StatsWidget = ({id, statsImg, type, title, figure, unitMessure}) => {
    const widgetClassNames = classNames(
        style.statsWidget,
        {
            [style.typeInfo]: type === 'info',
            [style.typeWarning]: type === 'warning',
            [style.typeAttention]: type === 'attention',
            [style.typeNotification]: type === 'notification'        
        }
    )
    
    return (
        <div className={widgetClassNames}>
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