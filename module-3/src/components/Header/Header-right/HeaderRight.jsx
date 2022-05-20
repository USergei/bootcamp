import React from "react"
import style from './Header-right.module.scss'
import SearchIcon from "./Search/SearchIcon"
import BellIcon from "./BellIcon/BellIcon"
import HeaderUser from "./HeaderUser/HeaderUser"
import DropDown from "./DropDown/DropDown"

const HeaderRight = (props) => {
    return (
        <div className={style.headerRight}>
            <SearchIcon/>
            <BellIcon/>
            <HeaderUser/>
            <DropDown/>
        </div>
    )
}

export default HeaderRight