import React from "react"
import style from './HeaderLeft.module.scss'
import SVG from 'react-inlinesvg'
import logo from './../../../assets/icons/logo.svg'


const HeaderLeft = ({isNavbarOpen, setIsNavbarOpen}) => {
    return (
        <div className={style.headerLeft}>
            <div className={style.headerImgLogo}>
                <SVG src={logo} alt="logo"/>
            </div>
            <div className={style.textLogo}>
                Space
            </div>
            <div className={style.hamburgerMmenu}>
                <input id={style.menuToggle} type="checkbox"/>
                <label className={style.menuBtn} htmlFor={style.menuToggle}  onClick={() => setIsNavbarOpen(!isNavbarOpen)}>
                    <span></span>
                </label>
            </div>
        </div>
    )
}

export default HeaderLeft