import React, {useState} from 'react'
import style from './Home.module.scss'
import Header from '../Header'
import Main from '../Main'


function Home() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false)

  return (
    <div className={style.mainWrapper}>
      <Header isNavbarOpen={isNavbarOpen} setIsNavbarOpen={setIsNavbarOpen}/>
      <Main isNavbarOpen={isNavbarOpen}/>
    </div>
  )
}

export default Home