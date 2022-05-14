import React from "react"
import style from './HeaderUser.module.scss'

const HeaderUser = () => {
    return (
        <div className={style.headerUser}>
            <img className={style.userAvatar} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfwEJIecctTa4NDAknEghCTW8nVBfn3dNN9FEBjx0jCKO6CzQ9btW8drJo5y8c1PZWLsY&usqp=CAU" alt="user-avatar" />
            <div>
                <div className={style.userName}>Ozz Dima</div>
                <div className={style.userRights}>Administrator</div>
            </div>
        </div>
    )
}

export default HeaderUser