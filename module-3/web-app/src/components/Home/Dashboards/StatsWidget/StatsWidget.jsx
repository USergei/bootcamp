import React from "react"
import style from "./StatsWidget.module.scss"
import SVG from "react-inlinesvg"
import classNames from "classnames"

const StatsWidget = ({id, statsImg, type, title, figure, unitMeasure}) => {
    const widgetClassNames = classNames(
        style.widget,
        {
            [style.typeInfo]: type === 'info',
            [style.typeWarning]: type === 'warning',
            [style.typeAttention]: type === 'attention',
            [style.typeNotification]: type === 'notification'        
        }
    )
    
    return (
        <div className={widgetClassNames}>
            <div className={style.img}>
                <SVG src={statsImg} alt="widget img" />
            </div>
            <div className={style.text}>
                <div className={style.title}>{title}</div>
                <div className={style.figure}>{figure}
                    {unitMeasure && <span>{unitMeasure}</span>}    
                </div>
            </div>
        </div>
    )
}

export default StatsWidget