import React from "react";
import style from './Header.module.scss'
import HeaderLeft from "./Header-left/HeaderLeft";
import HeaderRight from "./Header-right/HeaderRight";

const Header = () => {
    return(
        <div className={style.header}>
            <HeaderLeft/>
            <HeaderRight/>
        </div>
    )
}

export default Header