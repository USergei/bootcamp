import React from "react";
import style from './Charts.module.scss'
import HistogramWidget from "./HistogramWidget"
import PieWidget from "./PieWidget"
import ScatterWidget from "./ScatterWidget"

const Charts = () => {
  return (
    <div className={style.charts}>
      <div className={style.mainChart}>
        <ScatterWidget/>
      </div>
      <div className={style.sideCharts}>
        <HistogramWidget/>
        <PieWidget/>
      </div>
    </div>  
  )
}

export default Charts
