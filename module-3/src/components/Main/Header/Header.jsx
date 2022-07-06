import React from "react"
import style from "./Header.module.scss"
import HeaderLeft from "./HeaderLeft"
import HeaderRight from "./HeaderRight"

const Header = ({isNavbarOpen, setIsNavbarOpen}) => {
  return (
    <header className={style.header}>
      <HeaderLeft isNavbarOpen={isNavbarOpen} setIsNavbarOpen={setIsNavbarOpen}/>
      <HeaderRight />
    </header>
  )
}

export default Header
