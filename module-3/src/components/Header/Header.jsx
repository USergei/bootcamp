import React from 'react';
import style from './Header.module.scss'
import HeaderLeft from './HeaderLeft'
import HeaderRight from './HeaderRight'

const Header = () => {
    return(
        <header className={style.header}>
            <HeaderLeft/>
            <HeaderRight/>
        </header>
    )
}

export default Header