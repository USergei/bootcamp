import React, {useState} from "react"
import { Outlet } from "react-router-dom"
import mainStyles from "../../App.module.scss"
import style from "./Main.module.scss"
import Header from "./Header"
import Navbar from "./Navbar"

const Main = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false)

  return (
    <div className={mainStyles.mainWrapper}>
      <Header isNavbarOpen={isNavbarOpen} setIsNavbarOpen={setIsNavbarOpen}/>
      <div className={style.dflex}>
        <Navbar isNavbarOpen={isNavbarOpen}/>
        <Outlet />
      </div>
    </div> 
  )
}

export default Main
