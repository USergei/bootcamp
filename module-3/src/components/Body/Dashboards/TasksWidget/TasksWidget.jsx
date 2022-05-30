import React from "react";
import style from './TasksWidget.module.scss'
import Task from './Task'

const TasksWidget = () => {
  return (
    <div className={style.tasksWidget}>
      <h1>Tasks</h1>
      <Task/>
    </div>
  )
}

export default TasksWidget