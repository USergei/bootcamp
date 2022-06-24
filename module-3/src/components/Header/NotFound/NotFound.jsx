import React from "react";
import { Link } from 'react-router-dom'
import style from "NotFound.module.scss"
import mainStyles from '../../../App.module'

const NotFound = () => {
    return (
        <div>
            <h1>404 - Not Found!</h1>
            <Link to="/">Go Home</Link>
        </div>
    )
}

export default NotFound