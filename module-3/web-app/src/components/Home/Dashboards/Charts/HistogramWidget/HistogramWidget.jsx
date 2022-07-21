import React from "react"
import style from "./HistogramWidget.module.scss"
import ThreeDotsButtonDropdown from "../../../../ThreeDotsButtonDropdown"

const HistogramWidget = () => {
  return (
    <div className={style.widget}>
      <div className={style.widgetHeader}>
        <h6>Histogram</h6>
        <ThreeDotsButtonDropdown/>
      </div>
    </div>
  )
}

export default HistogramWidget
