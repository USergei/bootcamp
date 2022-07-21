import React from "react"
import {Link} from "react-router-dom"
import style from "./NotFound.module.scss"
import mainStyles from "../../../App.module.scss"

const NotFound = () => {
    return (
        <div className={`${mainStyles.mainWrapper} ${style.pageWrapper}`}>
            <div>
                <h1>404 - Not Found!</h1>
                <Link to="/">Go Home</Link>
            </div>
        </div>
    )
}

export default NotFound