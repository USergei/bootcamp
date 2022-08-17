import React from "react"
import mainStyles from "./App.module.scss"
import {Account as AccountContext} from "./components/AccountContext"
import Routes from "./Routes"
import { Provider } from "react-redux"
import store from "./store/store"

const App = () => {
  return (
    <div className={mainStyles.mainWrapper}>
      <Provider store={store}>
        <AccountContext>
          <Routes />
        </AccountContext>  
      </Provider>
    </div>
  )
}

export default App
