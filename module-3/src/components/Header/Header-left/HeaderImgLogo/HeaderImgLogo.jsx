import React from "react"
import style from './HeaderImgLogo.module.scss'
import logo from './../../../../assets/images/logo.png'

const HeaderImgLogo = () => {
    return (
        <div className={style.headerImgLogo}>
            <img src={logo} alt="logo" />
        </div>
    )
}

export default HeaderImgLogo