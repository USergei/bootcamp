import React, { useEffect, useState, useRef} from "react"
import style from './HeaderRight.module.scss'
import SVG from 'react-inlinesvg'
import bellIcon from './../../../assets/icons/bell.svg'
import searchIcon from './../../../assets/icons/search.svg'
import admin from './../../../assets/images/admin.jpg'

const HeaderRight = () => {

    const [open, setOpen] = useState(false)
    const container = useRef(null)
  
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
                    <img src={admin} alt="user-avatar" />
                </div>
                <div>
                    <div className={style.userName}>Ozz Dima</div>
                    <div className={style.userRights}>Administrator</div>
                </div>
            </div>
            <div className={style.dropDownHeader} ref={container}>
                <button type="button" class={style.dropDownBtn} onClick={() => setOpen(!open)}>
                 ∨
                </button>
                {open && (
                <div class={style.dropdownWrapper}>
                    <ul class={style.dropdownMenu}>
                        <li><a href="">Item 1</a></li>
                        <li><a href="">Item 2</a></li>
                        <li><a href="">Item 3</a></li>
                        <li><a href="">Item 4</a></li>
                    </ul>
                </div>
                )}
            </div>
        </div>
    )
}

export default HeaderRight