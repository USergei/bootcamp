import React from "react";
import style from './Task.module.scss'

const Task = () => {
    return (
      <div clasName={style.checkboxItems}>
        <label clasName={`${style.checkbox} ${style.styleD}`}>
            <input type="checkbox"/>
            <div clasName={style.checkboxCheckmark}></div>
            <div clasName={style.checkboxBody}>Style D</div>
        </label>
    </div>
    )
}

export default Task