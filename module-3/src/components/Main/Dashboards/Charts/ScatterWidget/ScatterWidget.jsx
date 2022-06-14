import React from "react";
import style from './ScatterWidget.module.scss'
import ThreeDotsButtonDropdown from '../../../../ThreeDotsButtonDropdown'

const ScatterWidget = () => {
  return (
    <div className={style.scatterWidget}>
      <div className={style.scatterWidgetHeader}>
        <h6>Scatter</h6>
        <ThreeDotsButtonDropdown/>
      </div>
    </div>
  )
}

export default ScatterWidget
