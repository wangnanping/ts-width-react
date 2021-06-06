import React from 'react'
import robotes from './mockdata/robots.json'
import styles from "./App.module.css";

import RoBot from './components/Robot'
import ShoppingCart from "./components/ShoppingCart";

function App () {
  return (
    <div>
    <header>
      <ShoppingCart></ShoppingCart>
    </header>
    <div className={styles.app}>
      <div className={styles.robotList}>
        {robotes.map((item,index) => (
          <RoBot id={item.id} name={item.name} email={item.email} key={index}></RoBot>
        ))}
      </div>
    </div>
    </div>
  )
}

export default App
