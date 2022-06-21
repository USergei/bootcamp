import React, {createContext, useContext} from "react";
import {CognitoUser, AuthenticationDetails} from "amazon-cognito-identity-js";
import Pool from "./UserPool"

const AccountContext = createContext()

const Account = (props) => {

  const getSession = async () => {
    return await new Promise((resolve, reject) => {
      const user = Pool.getCurrentUser()
      if (user) {
        user.getSession((err, session) => {
          if (err) {
            reject(err)
          } else {
            resolve(session)
          }
        })
      } else {
        reject("Unauthenticated")
      }
    })
  }

  const authenticate = async (Username, Password) => {
    return await new Promise((resolve, reject) => {
      const user = new CognitoUser({Username, Pool})

      const AuthDetails = new AuthenticationDetails({Username, Password})

      user.authenticateUser(AuthDetails, {
            onSuccess: (data) => {
                console.log("onSuccess: ", data)
                resolve(data)
            },
            onFailure: (err) => {
                console.error("onFailure: ", err)
                reject(err)
            },
            newPasswordRequired: (data) => {
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
    }
  }

  return (
    <AccountContext.Provider value={{ authenticate, getSession, logout }}>
      {props.children}
    </AccountContext.Provider>
  )
}

export {Account, AccountContext}
