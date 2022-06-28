import React, {createContext, useEffect, useState} from "react";
import {CognitoUser, AuthenticationDetails} from "amazon-cognito-identity-js";
// import {CognitoJwtVerifier} from "aws-jwt-verify"
// import {CognitoPoolCredentionals} from '../configs/awsCognitoConfig'
import Pool from "./UserPool"


const AccountContext = createContext()

const Account = (props) => {

  const [isAuthenticated, setIsAuthenticated] = useState(false)
  
  const getSession = async () => {
    return await new Promise((resolve, reject) => {
      const user = Pool.getCurrentUser()
      if (user) {
        user.getSession((err, session) => {
          if (err) {
            reject(err)
          } else {
            setIsAuthenticated(true)
            resolve(session)
          }
        })
      } else {
        reject("Unauthenticated")
        setIsAuthenticated(false)
      }
    })
  }

  const authenticate = async (Username, Password) => {
    return await new Promise((resolve, reject) => {
      const user = new CognitoUser({Username, Pool})
      const AuthDetails = new AuthenticationDetails({Username, Password})

      user.authenticateUser(AuthDetails, {
            onSuccess: (data) => {
              sessionStorage.setItem('accessToken', JSON.stringify(data))
              setIsAuthenticated(true)
              console.log("onSuccess: ", data)
              resolve(data)
            },
            onFailure: (err) => {
              setIsAuthenticated(false)
              console.error("onFailure: ", err)
              reject(err)
            },
            newPasswordRequired: (data) => {
              setIsAuthenticated(false)
              console.log("newPasswordRequired: ", data)
              resolve(data)
            }
      })
    })
  }

  const logout = () => {
    const user = Pool.getCurrentUser()
    if (user) {
      user.signOut()
      setIsAuthenticated(false)
      sessionStorage.removeItem('accessToken')
    }
  }

  useEffect(() => {
    getSession()
    .catch((error) => {
      console.log('Unauthenticated', error)
    })
  }, [])
  
  return (
    <AccountContext.Provider value={{ 
      isAuthenticated, 
      authenticate, 
      getSession, 
      logout
    }}>
      {props.children}
    </AccountContext.Provider>
  )
}

export {Account, AccountContext}
