import React from "react"
import style from './ThreeDotsButton.module.scss'

const ThreeDotsButton = ({onClick}) => {
  return (
    <button className={style.threeDotsButton} onClick={onClick}>...</button>
  )
}

export default ThreeDotsButton
