import React, { cloneElement, useContext } from "react";
import { Navigate } from "react-router-dom"
import { AccountContext } from "./AccountContext"

function querystring(name, url = window.location.href) {
    const parsedName = name.replace(/[[]]/g, "\\$&");
    const regex = new RegExp(`[?&]${parsedName}(=([^&#]*)|&|#|$)`, "i");
    const results = regex.exec(url);
  
    if (!results || !results[2]) {
      return false;
    }
  
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }
  
export default function UnauthenticatedRoute({children}) {
  const { isAuthenticated } = useContext(AccountContext)
  const redirect = querystring("redirect")
  console.log({isAuthenticated});
  
  if (isAuthenticated) {
    return <Navigate to={redirect || "/login"} />
  }
  
  return cloneElement(children)
}
