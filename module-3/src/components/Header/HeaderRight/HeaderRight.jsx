import React, {useRef} from "react"
import style from './HeaderRight.module.scss'
import SVG from 'react-inlinesvg'
import bellIcon from './../../../assets/icons/bell.svg'
import searchIcon from './../../../assets/icons/search.svg'
import admin from './../../../assets/images/admin.jpg'
import { useDetectOutsideClick } from "./useDetectOutsideClick";
/*
 * Read the blog post here:
 * https://letsbuildui.dev/articles/building-a-dropdown-menu-component-with-react-hooks
 */

  

const HeaderRight = () => {

    const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);
    return (
        <div className={style.headerRight}>
            <div className={style.searchBox}>
                <button className={style.btnSearch}>
                    <SVG src={searchIcon} alt="search" />
                </button>
                <input type="text" className={style.inputSearch} placeholder="Type to Search..."/>
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
            <button className={style.dropDown}>∨</button>  {/*TEST*/ }
            <div className={style.container}>
      <div className={style.menuContainer}>
        <button onClick={onClick} className={style.menuTrigger}>
          <span>User</span>
          <img
            src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/df/df7789f313571604c0e4fb82154f7ee93d9989c6.jpg"
            alt="User avatar"
          />
        </button>
        <nav
          ref={dropdownRef}
          className={`${style.menu} ${isActive ? style.active : style.inactive}`}
        >
          <ul>
            <li>
              <a href="#">Messages</a>
            </li>
            <li>
              <a href="#">Trips</a>
            </li>
            <li>
              <a href="#">Saved</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
         </div>
    )
}

export default HeaderRight