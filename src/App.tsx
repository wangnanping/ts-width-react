import React, { useState, useEffect } from 'react'
import logo from './assets/images/logo.svg'
import robots from './mockdata/robots.json'
import styles from './App.module.css'
import Robot from './components/Robot'
import Shop from './components/Shop'
import RobotList from './components/RobotList'
interface Props {}

interface State {
  shopList: string[]
}
class App extends React.Component<Props, State> {
  constructor (prop: Props) {
    super(prop)
    this.state = {
      shopList: []
    }
  }

  addCar = (name: string) => {
    let list = this.state.shopList
    list.push(name)
    this.setState({
      shopList: list
    })
  }
  render () {
    return (
      <div className={styles.app}>
        <h1>罗伯特机器人平台</h1>
        <Shop shopList={this.state.shopList} />
        <ul>
          {robots.map((item, index) => {
            return (
              <RobotList
                id={item.id}
                name={item.name}
                email={item.email}
                addCart={this.addCar}
              ></RobotList>
            )
          })}
        </ul>
      </div>
    )
  }
  // }
}

export default App
