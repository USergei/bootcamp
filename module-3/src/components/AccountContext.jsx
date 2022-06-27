import React, {createContext, useEffect, useState, useMemo} from "react";
import {CognitoUser, AuthenticationDetails} from "amazon-cognito-identity-js";
import { CognitoJwtVerifier } from "aws-jwt-verify"
import Pool from "./UserPool"
import {CognitopoolCredentionals} from '../configs/awsCognitoConfig'


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

  const verifyToken = async () => {
  
    const verifier = CognitoJwtVerifier.create({
      userPoolId: CognitopoolCredentionals.UserPoolId,
      tokenUse: "access",
      clientId: CognitopoolCredentionals.ClientId
    })

    try {
      const payload = await verifier.verify(
        JSON.parse(sessionStorage.getItem('accessToken')).accessToken.jwtToken
      )
      console.log("Token is valid. Payload:", payload)
      return true
    } catch {
      console.log("Token not valid!")
      return false
    }
  }

  useMemo(() => {
    // console.log({isAuthenticated})
    // if (verifyToken()) {
    //   setIsAuthenticated(true)
    // } else {
    //   setIsAuthenticated(false)
    // }
  }, [isAuthenticated])
  
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
