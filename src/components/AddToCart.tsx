import React, { useContext } from 'react'
import { appSetStateContext } from '../AppState'
import {RobotProps} from "./Robot";

export const withAddToCart = (Childcomponent: React.ComponentType<RobotProps>) => {
  // return class  extends React.Component{}  // 使用匿名类组件
  // 匿名函数式组件
  return (props:any) => {
    const setState = useContext(appSetStateContext)
    const addToCart = (id:number, name:string) => {
      if (setState) {
        setState(state => {
          console.log(state)
          console.log(id)
          console.log(name)
          return {
            ...state,
            shoppingCart: {
              items: [...state.shoppingCart.items, { id, name }]
            }
          }
        })
      }
    }
    return <Childcomponent {...props} addToCart={addToCart} />
  }
}
