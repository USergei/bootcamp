import React from "react"
import style from "./RadarWidget.module.scss"
import ThreeDotsButtonDropdown from "../../../../ThreeDotsButtonDropdown"

const RadarWidget = () => {
  return (
    <div className={style.widget}>
      <div className={style.widgetHeader}>
        <h6>Radar</h6>
        <ThreeDotsButtonDropdown/>
      </div>
    </div>
  )
}

export default RadarWidget
