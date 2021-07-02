import React, { useState, useEffect } from 'react'
import logo from './assets/images/logo.svg'
import robots from './mockdata/robots.json'
import styles from './App.module.css'
import Robot from './components/Robot'
import Shop from './components/Shop'
import RobotList from './components/RobotList'

interface Props {}

interface State {
  shopList: string
}
const App: React.FC = props => {
  // constructor (prop: Props) {
  //   super(prop)
  //   this.state = {
  //     shopList: []
  //   }
  // }

  const [shopList, setShopList] = useState<string[]>([])

  useEffect(() => {}, [shopList])

  return (
    <div className={styles.app}>
      <h1>罗伯特机器人平台</h1>
      <Shop />
      <ul>
        {robots.map((item, index) => {
          return (
            <RobotList
              id={item.id}
              name={item.name}
              email={item.email}
              // key={item.id}
            ></RobotList>
          )
        })}
      </ul>
    </div>
  )
}
// }

export default App
