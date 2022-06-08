import React from "react";
import style from './Task.module.scss'

const Task = ({id, text, name}) => {
  return (
    <div className={style.checkboxItems}>
      <label className={style.checkbox}>
        <input type="checkbox"/>
        <div className={style.checkboxCheckmark}></div>
        <div className={style.checkboxText}>{text}</div>
      </label>
      <button className={style.checkboxDelete}>×</button>
      <div className={style.checkboxName}>Added by {name}</div>
    </div>
  )
}
export default Task