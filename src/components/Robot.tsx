import React, { useContext } from 'react'
import Styles from './Robot.module.css'
import {appContext,appSetStateContext} from "../AppState"
interface RobotProps {
  id: number
  name: string
  email: string
}
const Robot: React.FC<RobotProps> = ({ id, name, email }) => {
  const value = useContext(appContext);
  const setState = useContext(appSetStateContext);
  const addToCart =() =>{
    if(setState){
      setState(state => {
         console.log(state);
         console.log(id);
         console.log(name);
            return {
              ...state,
              shoppingCart:{
                items:[...state.shoppingCart.items,{id,name}]
              }
            }
      })
    }
  }
  return (
    // <appConText.Consumer>
    //   {value => {
    //     return (
          <li className={Styles.cardContainer}>
            <img alt='robotes' src={`https://robohash.org/${id}`} />
            <h2>{name}</h2>
            <p>{email}</p>
            <span>作者：{value.userName}</span>
            <button onClick={addToCart}>加入购物车</button>
          </li>
    //     )
    //   }}
    // </appConText.Consumer>
  )
}
export default Robot
