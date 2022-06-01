import React from "react";
import style from './TasksWidget.module.scss'
import Task from './Task'
import ThreeDotsButton from "../../../ThreeDotsButton"

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
        <ThreeDotsButton/>
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
        <input type="" name="" placeholder="Add a new task..."></input>
        <button className>+</button>
      </form>
    </div>
  )  
}

export default TasksWidget