import React from "react";
import style from './RadarWidget.module.scss'
import ThreeDotsButtonDropdown from '../../../../ThreeDotsButtonDropdown'

const RadarWidget = () => {
  return (
    <div className={style.radarWidget}>
      <div className={style.radarWidgetHeader}>
        <h6>Radar</h6>
        <ThreeDotsButtonDropdown/>
      </div>
    </div>
  )
}

export default RadarWidget
