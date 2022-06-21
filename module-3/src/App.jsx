import React from 'react'
import style from './App.module.scss'
import {Account} from './components/Account'
import Routes from './Routes'
import Status from './components/Status'


function App() {

  return (
    <div className={style.mainWrapper}>
      <Account>
        <Status />
        <Routes />
      </Account>  
    </div>
  )
}

export default App
