import React, {createContext} from "react";
import {CognitoUser, AuthenticationDetails} from "amazon-cognito-identity-js";
import Pool from "./UserPool"

const AccountContext = createContext()

const Account = (props) => {
  const authenticate = async (Username, Password) => {
    return await new Promise((resolve, reject) => {
      const user = new CognitoUser({Username, Pool})

      const AuthDetails = new AuthenticationDetails({Username, Password})

      user.authenticateUser(AuthDetails, {
            onSuccess: (data) => {
                console.log("onSuccess: ", data)
                // navigate('/')
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

  return (
    <AccountContext.Provider value={{ authenticate }}>
      {props.children}
    </AccountContext.Provider>
  )
}

export {Account, AccountContext}
