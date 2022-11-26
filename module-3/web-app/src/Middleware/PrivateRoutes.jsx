import React, {useContext} from "react"
import {AccountContext} from "../components/AccountContext"
import { Navigate } from 'react-router-dom'

const PrivateRoutes = ({ children }) => {
  const { isAuthenticated } = useContext(AccountContext)
  return(
    isAuthenticated ? children : <Navigate to="/login"/>
  )
}

export default PrivateRoutes
