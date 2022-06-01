import React from "react"
import style from './Header-right.module.scss'
import SVG from 'react-inlinesvg'
import bellIcon from './../../../assets/icons/bell.svg'
import searchIcon from './../../../assets/icons/search.svg'

const HeaderRight = () => {
    return (
        <div className={style.headerRight}>
            <div className={style.searchIcon}>
                <SVG src={searchIcon} alt="search" />
            </div>
            <div className={style.bellIcon}>
                <SVG src={bellIcon} alt="notification" />
                <div className={style.headerNotification}>7</div>
            </div>
            <div className={style.headerUser}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfwEJIecctTa4NDAknEghCTW8nVBfn3dNN9FEBjx0jCKO6CzQ9btW8drJo5y8c1PZWLsY&usqp=CAU" alt="user-avatar" />
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