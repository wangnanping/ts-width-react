import React,{useContext} from "react";
import { appSetStateContext } from '../AppState'
import {ItemType} from "./RobotList"
// React.ComponentType 组件类型
export const withAddToCart =(ChildComponent:React.ComponentType<ItemType>)=>{
//    return class extends React.Component{} // 返回匿名的类组件
      return (props:ItemType)=>{  // 返回一个函数式组件  
        const setState = useContext(appSetStateContext)
        const addToCart = (id:number,name:string) => {
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
            return<ChildComponent {...props}/>
      }
}