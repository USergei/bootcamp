import React, {useContext} from "react"
import {AccountContext} from "../components/AccountContext"
import { Navigate } from 'react-router-dom'
import Main from "../components/Main"

const PrivateRoutes = () => {
  const { isAuthenticated } = useContext(AccountContext)

  return(
    isAuthenticated ? <Main /> : <Navigate to="/login" />
  )
}

export default PrivateRoutes
