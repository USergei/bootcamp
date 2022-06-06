import React from "react"
import style from './HeaderRight.module.scss'
import SVG from 'react-inlinesvg'
import bellIcon from './../../../assets/icons/bell.svg'
import searchIcon from './../../../assets/icons/search.svg'
import admin from './../../../assets/images/admin.jpg'

const HeaderRight = () => {
    return (
        <div className={style.headerRight}>
            <div className={style.searchIcon}>
                <SVG src={searchIcon} alt="search" />
            </div>
            <button className={style.bellBtn}>
                <SVG src={bellIcon} alt="notification" />
                <div className={style.headerNotification}>7</div>
            </button>
            <div className={style.headerUser}>
                <div className={style.headerAvatar}>
                    <img src={admin} alt="user-avatar" />
                </div>
                <div>
                    <div className={style.userName}>Ozz Dima</div>
                    <div className={style.userRights}>Administrator</div>
                </div>
            </div>
            <button className={style.dropDown}>∨</button>
         </div>
    )
}

export default HeaderRight