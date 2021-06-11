import React, { useState, useEffect } from 'react'
import logo from './assets/images/logo.svg'
import robots from './mockdata/robots.json'
import Robot from './components/Robot'
import RobotDiscount from './components/RobotDiscount'
import styles from './App.module.css'
import ShoppingCart from './components/ShoppingCart'

interface Props {}

// interface State {
//   robotGallery: any[]
// }
const App: React.FC = prop => {
  const [count, setCount] = useState<number>(0)
  const [robots, getRobots] = useState<any[]>([])
  const [loading,setLoading] = useState<boolean>(true);
  const [error,setError] = useState<string>("");
  /**
   * 页面挂载
   */
  // componentDidMount () {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(response => response.json())
  //     .then(data => this.setState({ robotGallery: data }))
  // }

  useEffect(() => {
    document.title = `${count}次`
  }, [count])

  // 传入空数组 相当于生命周期componentDidMount 挂载进页面时候调用一次
  useEffect(() => {
    const featchFun = async () => {
      setLoading(true)
      try{
        let responses = await fetch('https://jsonplaceholder.typicode.com/users')
        const res = await responses.json()
        getRobots(res)
      } catch(e){
        setError(e.message)
      }
    
      setLoading(false)
    }
    featchFun()
  }, [])
  

  // 每一次页面更新都会触发，会造成死循环
  // useEffect(()=>{

  // })

  // render () {
  return (
    <div className={styles.app}>
      <div className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt='logo' />
        <h1>罗伯特机器人炫酷吊炸天online购物平台的名字要长</h1>
      </div>
      <button
        onClick={() => {
          setCount(count + 1)
        }}
      >
        {count}
      </button>
      <ShoppingCart />
      {(!error || error === "") && <div>网站出错:{error}</div>}
      {
          !loading?
      (<div className={styles.robotList}>
        {robots.map((r,index) => (
          index%2?<RobotDiscount id={r.id} email={r.email} name={r.name} key={index} />:
            <Robot id={r.id} email={r.email} name={r.name} key={index} />
          ))}
      </div>):(<span>加载中</span>)}
    </div>
  )
  // }
}

export default App
