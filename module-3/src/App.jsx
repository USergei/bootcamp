import React from 'react'
import mainStyles from './App.module.scss'
import {Account as AccountContext} from './components/AccountContext'
import Routes from './Routes'
import Status from './components/Status'


function App() {

  return (
    <div className={mainStyles.mainWrapper}>
      <AccountContext>
        <Status />
        <Routes />
      </AccountContext>  
    </div>
  )
}

export default App
