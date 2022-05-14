import React from 'react';
import style from './Header.module.scss'
import HeaderLeft from './Header-left/HeaderLeft'
import HeaderRight from './Header-right/HeaderRight'

const Header = () => {
    return(
        <header className={style.header}>
            <HeaderLeft/>
            <HeaderRight/>
        </header>
    )
}

export default Header