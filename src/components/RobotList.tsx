import React, { useContext } from 'react'
import styles from './RobotList.module.css'
import { appContext,appSetStateContext } from '../AppState'
export interface ItemType {
  id: number
  name: string
  email: string
}

const RobotList: React.FC<ItemType> = ({ id, name, email }) => {
  const { defalutName } = useContext(appContext)
  const setState = useContext(appSetStateContext)
  const addToCart = (id: number, name: string) => {


    if (setState) {
      setState(state => {
        return {
          ...state,
          shopList: {
            items: [...state.shopList.items, { id, name }]
          }
        }
      })
    }
  }
  return (
    <li className={styles.robot_item}>
      <img alt='robotes' src={`https://robohash.org/${id}`} />
      <h2>{name}</h2>
      <p>{email}</p>
      <button onClick={() => addToCart(id, name)}>
        加入购物车{defalutName}
      </button>
    </li>
  )
}

export default RobotList
