import React, {useContext} from "react"
import {Navigate, useLocation} from "react-router-dom"
import {AccountContext} from "../components/AccountContext"

const AuthenticatedRoute = ({ children }) => {
  const { pathname, search } = useLocation()
  const { isAuthenticated } = useContext(AccountContext)

  if (!isAuthenticated) {
    return <Navigate to={`/login?redirect=${pathname}${search}`} />
  }

  return children
}

export default AuthenticatedRoute
