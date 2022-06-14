import React from "react";
import style from './PieWidget.module.scss'
import ThreeDotsButtonDropdown from '../../../../ThreeDotsButtonDropdown'

const PieWidget = () => {
  return (
    <div className={style.pieWidget}>
      <div className={style.pieWidgetHeader}>
        <h6>Pie</h6>
        <ThreeDotsButtonDropdown/>
      </div>
    </div>
  )
}

export default PieWidget
