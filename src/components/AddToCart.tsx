import React, { useContext } from 'react'
import { appSetStateContext } from '../AppState'
import {RobotProps} from "./Robot";


// hoc高阶组件 Robot使用
// https://reactjs.org/docs/higher-order-components.html 理解
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


// 自定义HOOK  use命名开头 RobotDiscount
export const useAddToCart =()=> {
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
    return addToCart;
}
