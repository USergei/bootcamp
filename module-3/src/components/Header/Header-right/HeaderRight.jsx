import React from "react";
import style from './Header-right.module.scss'
import searchIcon from './../../../image/searchIcon.png'
import { SvgTest } from "./SvgTest";

const HeaderRight = (props) => {
    return (
        <div className={style.headerRight}>
            {/* <img className={style.lupa} src={searchIcon} alt="search" /> */}
            <SvgTest className={style.svg}  id="svg"/>
        </div>
    )
}

export default HeaderRight