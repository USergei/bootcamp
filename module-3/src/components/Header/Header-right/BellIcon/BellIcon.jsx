import React from "react"
import SVG from 'react-inlinesvg'
import style from './BellIcon.module.scss'
import bellIcon from './../../../../assets/icons/bell.svg'

const BellIcon = () => {
    return (
        <div className={style.bellIcon}>
            <SVG src={bellIcon} alt="notification" />
        </div>
    )
}

export default BellIcon