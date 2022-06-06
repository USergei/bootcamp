import React from "react";
import style from './HistogramWidget.module.scss'
import ThreeDotsButtonDropdown from "../../../../ThreeDotsButtonDropdown"

const HistogramWidget = () => {
  return (
    <div className={style.histogramWidget}>
      <div className={style.histogramWidgetHeader}>
        <h6>Histogram</h6>
        <ThreeDotsButtonDropdown/>
      </div>
    </div>
  )
}

export default HistogramWidget
