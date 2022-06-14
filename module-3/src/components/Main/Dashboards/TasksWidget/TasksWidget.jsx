import React from "react";
import SVG from 'react-inlinesvg'
import style from './TasksWidget.module.scss'
import Task from './Task'
import ThreeDotsButtonDropdown from "../../../ThreeDotsButtonDropdown"
import plus from './../../../../assets/icons/plus.svg'

const tasksWidgetContent = [
  {
    id: 1,
    text: 'Feed the cat',
    name: 'Admin'
  },
  {
    id: 2,
    text: 'Start coding',
    name: 'Dima'
  },
  {
    id: 3,
    text: 'Find friends',
    name: 'Shelby'
  },
  {
    id: 4,
    text: 'Meow meoeow',
    name: 'Tosik'
  }
]

const TasksWidget = () => {
  return (
    <div className={style.tasksWidget}>
      <div className={style.tasksWidgetHeader}>
        <h6>Tasks</h6>
        <ThreeDotsButtonDropdown/>
      </div>

      {tasksWidgetContent.map((item, i) =>
        <Task 
          key={i}
          id={item.id}
          text={item.text}
          name={item.name}
        />
      )}
      <form className={style.tasksWidgetBottom}>
        <input type="text" name="task" placeholder="Add a new task..."/>
        <button>
          <SVG src={plus} alt="plusIcon"/>
        </button>
      </form>
    </div>
  )  
}

export default TasksWidget