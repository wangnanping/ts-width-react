import React from 'react'
import styles from './RobotList.module.css'

interface ItemType {
  id: number
  name: string
  email: string
  addCart:(name:string)=>void
}

const RobotList: React.FC<ItemType> = Props => {
  const { id, name, email ,addCart} = Props
  return (
    <li className={styles.robot_item}>
      <img alt='robotes' src={`https://robohash.org/${id}`} />
      <h2>{name}</h2>
      <p>{email}</p>
      <button onClick={()=>{addCart(name)}}>加入购物车</button>
    </li>
  )
}

export default RobotList
