import React, { useState } from 'react'

interface AppStateValue {
  userName: string
  shoppingCart: { items: { id: number; name: string }[] }
}

const defaultConTextValue: AppStateValue = {
  userName: '阿莱克斯',
  shoppingCart: { items: [] }
}

export const appContext = React.createContext(defaultConTextValue)

// React.Dispatch<React.SetStateAction<AppStateValue>> 就是鼠标移入下面setState 的类型 这里赋值是undeifned 所以需要或

export const appSetStateContext = React.createContext<
  React.Dispatch<React.SetStateAction<AppStateValue>> | undefined
>(undefined)
/**
 * AppStateProvider相当于一个高阶函数HOC
 * 功能  将所有的子组件包裹起来，并从全局的角度进行参数支持
 * @returns
 */
export const AppStateProvider: React.FC = props => {
  // state 表示定义的defaultConTextValue
  // setState 就是state更新函数
  const [state, setState] = useState(defaultConTextValue)
  return (
    <appContext.Provider value={state}>
      <appSetStateContext.Provider value={setState}>{props.children}</appSetStateContext.Provider>
    </appContext.Provider>
  )
}
