import React from "react"
import SVG from 'react-inlinesvg'
import style from './SearchIcon.module.scss'
import searchIcon from './../../../../assets/icons/search.svg'


const SearchIcon = () => {
    return (
        <div className={style.searchIcon}>
             <SVG src={searchIcon} alt="search" />
        </div>
    )
}

export default SearchIcon
