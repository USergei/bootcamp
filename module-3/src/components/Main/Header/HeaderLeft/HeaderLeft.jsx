import React from "react"
import style from "./HeaderLeft.module.scss"
import SVG from "react-inlinesvg"
import logo from "../../../../assets/icons/logo.svg"


const HeaderLeft = ({isNavbarOpen, setIsNavbarOpen}) => {
    return (
        <div className={style.left}>
            <div className={style.imgLogo}>
                <SVG src={logo} alt="logo"/>
            </div>
            <div className={style.textLogo}>
                Space
            </div>
            <div className={style.hamburgerMenu}>
                <input id={style.menuToggle} type="checkbox"/>
                <label className={style.menuBtn} htmlFor={style.menuToggle}  onClick={() => setIsNavbarOpen(!isNavbarOpen)}>
                    <span></span>
                </label>
            </div>
        </div>
    )
}

export default HeaderLeft