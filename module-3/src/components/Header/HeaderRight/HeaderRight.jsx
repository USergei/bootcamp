import React, {useEffect, useState, useRef, useContext} from "react"
import style from './HeaderRight.module.scss'
import SVG from 'react-inlinesvg'
import bellIcon from './../../../assets/icons/bell.svg'
import searchIcon from './../../../assets/icons/search.svg'
import admin from './../../../assets/images/admin.jpg'
import {AccountContext} from '../../AccountContext'

const HeaderRight = () => {

    const [open, setOpen] = useState(false)
    const container = useRef(null)
    const {logout, currentUser} = useContext(AccountContext)
    const handleClickOutside = event => {
        if (container.current && !container.current.contains(event.target)) {
            setOpen(false)
        }
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside)

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    })

    return (
        <div className={style.headerRight}>
            <div className={style.searchBox}>
                <button className={style.btnSearch}>
                    <SVG src={searchIcon} alt="search" />
                </button>
                <input className={style.inputSearch} type="text" placeholder="Type to Search..."/>
            </div>
            <button className={style.bellBtn}>
                <SVG src={bellIcon} alt="notification" />
                <div className={style.headerNotification}>7</div>
            </button>
            <div className={style.headerUser}>
                <div className={style.headerAvatar}>
                    <img src={admin} alt="user-avatar"/>
                </div>
                <div>
                    <div className={style.userName}>{currentUser.name}</div>
                    <div className={style.userRights}>{currentUser.jobTitle}</div>
                </div>
            </div>
            <div className={style.dropDownHeader} ref={container}>
                <button type="button" className={style.dropDownBtn} onClick={() => setOpen(!open)}>
                 ∨
                </button>
                {open && (
                <div className={style.dropdownWrapper}>
                    <ul className={style.dropdownMenu}>
                        <li><a href="" onClick={logout}>Logout</a></li>
                    </ul>
                </div>
                )}
            </div>
        </div>
    )
}

export default HeaderRight