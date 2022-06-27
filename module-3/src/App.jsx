import React from 'react'
import mainStyles from './App.module.scss'
import {Account as AccountContext} from './components/AccountContext'
import Routes from './Routes'


function App() {
  return (
    <div className={mainStyles.mainWrapper}>
      <AccountContext>
        <Routes />
      </AccountContext>  
    </div>
  )
}

export default App
