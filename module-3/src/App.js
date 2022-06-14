import React, {useState} from 'react'
import style from './App.module.scss'
import Header from './components/Header'
import Main from './components/Main'

function App() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false)

  return (
    <div className={style.mainWrapper}>
      <Header isNavbarOpen={isNavbarOpen} setIsNavbarOpen={setIsNavbarOpen}/>
      <Main isNavbarOpen={isNavbarOpen}/>  
    </div>
  )
}

export default App
