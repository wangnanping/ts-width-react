import React, { useContext } from 'react'
import Styles from './Robot.module.css'
import { appContext, appSetStateContext } from '../AppState'
import { useAddToCart } from './AddToCart'
interface RobotProps {
  id: number
  name: string
  email: string
}
const RobotDiscount: React.FC<RobotProps> = ({ id, name, email }) => {
  const value = useContext(appContext)
  const addToCart = useAddToCart()
  return (
    // <appConText.Consumer>
    //   {value => {
    //     return (
    <li className={Styles.cardContainer}>
      <img alt='robotes' src={`https://robohash.org/${id}`} />
      <h2>打折商品</h2>
      <h2>{name}</h2>
      <p>{email}</p>
      <span>作者：{value.userName}</span>
      <button
        onClick={() => {
          addToCart(id, name)
        }}
      >
        加入购物车
      </button>
    </li>
    //     )
    //   }}
    // </appConText.Consumer>
  )
}
export default RobotDiscount
