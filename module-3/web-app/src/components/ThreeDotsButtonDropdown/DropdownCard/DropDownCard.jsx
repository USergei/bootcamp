import React from "react"
import style from "./DropDownCard.module.scss"

const DropDownCard = ({ data = [], setOpen }) => (
  <div className={style.dropdownContainer}>
    <ul className={style.dropdownList}>
      {data.map((item, i) => (
        <li key={i} className={style.dropdownItem} onClick={() => setOpen(false)}>
          {item}
        </li>
      ))}
    </ul>
  </div>
)

export default DropDownCard
