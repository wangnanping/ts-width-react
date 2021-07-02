import React, { useState } from 'react'

interface types {
  defalutName: string
  shopList: { items: { id: number; name: string }[] }
}

const defalutContextValue: types = {
  defalutName: '罗伯特',
  shopList: { items: [] }
}

export const appContext = React.createContext(defalutContextValue) // 传值
export const appSetStateContext = React.createContext<
  React.Dispatch<React.SetStateAction<types>> | undefined
>(undefined) // 传事件 修改全局变量  React.Dispatch<React.SetStateAction<types>>就是setState的类型

// hoc高阶组件
export const AppState: React.FC = props => {
  const [state, setState] = useState(defalutContextValue) // 将setState传出去
  return (
    <appContext.Provider value={state}>
      <appSetStateContext.Provider value={setState}>
        {props.children}
      </appSetStateContext.Provider>
    </appContext.Provider>
  )
}
