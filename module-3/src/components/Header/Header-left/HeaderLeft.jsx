import React from "react"
import style from './Header-left.module.scss'
import SVG from 'react-inlinesvg'
import logo from './../../../assets/icons/logo.svg'


const HeaderLeft = () => {
    return (
        <div className={style.headerLeft}>
            <div className={style.headerImgLogo}>
                <SVG src={logo} alt="logo" />
            </div>
            <div className={style.textLogo}>
                Space
            </div>
            <div className={style.hamburgerMenu}>
                H
            </div>
        </div>
    )
}

export default HeaderLeft