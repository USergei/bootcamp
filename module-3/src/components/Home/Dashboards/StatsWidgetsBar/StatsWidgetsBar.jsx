import React from "react";
import style from './StatsWidgetsBar.module.scss'
import StatsWidget from "../StatsWidget";
import eye from './../../../../assets/icons/eye.svg'
import rocket from './../../../../assets/icons/rocket.svg'
import envelope from './../../../../assets/icons/envelope.svg'
import users from './../../../../assets/icons/users.svg'

const statsWidgetContent = [
    {
        id: 1,
        statsImg: eye,
        type: 'info',
        title: 'Total view',
        figure: '121,459' 
    },
    {
        id: 2,
        statsImg: users,
        type: 'warning',
        title: 'Total user',
        figure: '35,912' 
    },
    {
        id: 3,
        statsImg: rocket,
        type: 'attention',
        title: 'Server speed',
        figure: '1180',
        unitMeasure: 'mbps' 
    },
    {
        id: 4,
        statsImg: envelope,
        type: 'notification',
        title: 'Total message',
        figure: '2356' 
    },
]

const StatsWidgetsBar = () => {
    return (
        <div className={style.StatsWidgetsBar}>
            {statsWidgetContent.map((item, i) => 
                <StatsWidget
                    key={i}
                    id={item.id}
                    statsImg={item.statsImg}
                    type={item.type}
                    title={item.title}
                    figure={item.figure}
                    unitMeasure={item.unitMeasure} 
                />
            )}        
        </div>
    )
}

export default StatsWidgetsBar