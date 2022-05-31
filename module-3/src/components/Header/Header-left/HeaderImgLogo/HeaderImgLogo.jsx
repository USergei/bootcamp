import React from "react"
import style from './HeaderImgLogo.module.scss'
import SVG from 'react-inlinesvg'
import logo from './../../../../assets/icons/logo.svg'

const HeaderImgLogo = () => {
    return (
        <div className={style.headerImgLogo}>
            <SVG src={logo} alt="logo" />
        </div>
    )
}

export default HeaderImgLogo