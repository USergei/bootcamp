import React, {createContext, useEffect, useState} from "react"
import {CognitoUser, AuthenticationDetails} from "amazon-cognito-identity-js"
import Pool from "./UserPool"

const AccountContext = createContext()

const Account = (props) => {

  const [isAuthenticated, setIsAuthenticated] = useState(true)
  const [currentUser, setCurrentUser] = useState({})
  
  const getSession = async () => {
    return await new Promise((resolve, reject) => {
      const user = Pool.getCurrentUser()
      if (user) {
        user.getSession(async (err, session) => {
          if (err) {
            reject(err)
          } else {
            setIsAuthenticated(true)
            const attributes = await new Promise((resolve, reject) => {
              user.getUserAttributes((err, attributes) => {
                if (err) {
                  reject(err)
                } else {
                  const results = {}

                  for (let attribute of attributes) {
                    const { Name, Value } = attribute
                    results[Name] = Value
                  }
                  setCurrentUser({
                    name: `${results.name} ${results.family_name}`,
                    jobTitle: results['custom:jobtitle']
                  })
                  resolve(results)
                }
              })
            })

            resolve({
              user,
              ...session,
              ...attributes
            })
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
              resolve(data)
            },
            onFailure: (err) => {
              setIsAuthenticated(false)
              reject(err)
            },
            newPasswordRequired: (data) => {
              setIsAuthenticated(false)
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
    })
  }, [])
  
  return (
    <AccountContext.Provider value={{ 
      isAuthenticated, 
      authenticate, 
      getSession, 
      logout,
      currentUser
    }}>
      {props.children}
    </AccountContext.Provider>
  )
}

export {Account, AccountContext}
