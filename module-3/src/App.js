import React, {useState} from 'react'
import style from './App.module.scss'
import Header from './components/Header'
import Main from './components/Main'
import {Account} from './components/Account'

function App() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false)

  return (
    <Account>
      <div className={style.mainWrapper}>
        <Header isNavbarOpen={isNavbarOpen} setIsNavbarOpen={setIsNavbarOpen}/>
        <Main isNavbarOpen={isNavbarOpen}/>  
      </div>
    </Account>
  )
}

export default App
