import React, {useState} from "react"
import mainStyles from "../../App.module.scss"
import style from "./Main.module.scss"
import Header from "./Header"
import Navbar from "./Navbar"


const Main = ({children}) => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false)

  return (
    <div className={mainStyles.mainWrapper}>
      <Header isNavbarOpen={isNavbarOpen} setIsNavbarOpen={setIsNavbarOpen}/>
      <div className={style.dflex}>
        <Navbar isNavbarOpen={isNavbarOpen}/>
        {children}
      </div>
    </div>
  )
}

export default Main