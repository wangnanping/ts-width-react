import React, { useState } from 'react'
// import logo from './assets/images/logo.svg'
// import robots from './mockdata/robots.json'
// import Robot from './components/Robot'
// import styles from './App.module.css'
// import ShoppingCart from './components/ShoppingCart'

interface Props {}

// interface State {
//   robotGallery: any[]
// }
const App: React.FC = prop => {
  const [count, setCount] = useState(0);

  /**
   * 页面挂载
   */
  // componentDidMount () {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(response => response.json())
  //     .then(data => this.setState({ robotGallery: data }))
  // }

  // render () {
  return (
    <button
      onClick={() => {
        setCount(count + 1)
      }}
    >
      {count}
    </button>
    // <div className={styles.app}>
    //   <div className={styles.appHeader}>
    //     <img src={logo} className={styles.appLogo} alt='logo' />
    //     <h1>罗伯特机器人炫酷吊炸天online购物平台的名字要长</h1>
    //   </div>
    //   <ShoppingCart />
    //   <div className={styles.robotList}>
    //     {robots.map(r => (
    //       <Robot id={r.id} email={r.email} name={r.name} />
    //     ))}
    //   </div>
    // </div>
  )
  // }
}

export default App
