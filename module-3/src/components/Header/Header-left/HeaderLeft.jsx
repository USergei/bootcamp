import React from "react"
import style from './Header-left.module.scss'
import HeaderImgLogo from "./HeaderImgLogo/HeaderImgLogo"
import TextLogo from "./TextLogo/TextLogo"
import HamburgerMenu from "./HamburgerMenu/HamburgerMenu"

const HeaderLeft = () => {
    return (
        <div className={style.headerLeft}>
            <HeaderImgLogo/>
            <TextLogo/>
            <HamburgerMenu/>
        </div>
    )
}

export default HeaderLeft