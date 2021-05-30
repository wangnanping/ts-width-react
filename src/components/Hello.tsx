import React from "react";
interface IHelloProps{
    message?:string
}
// FC -> React.FcuntionComponent  
// 一个返回了 JSX 或 createElement 的 Function 就可以当作 React 组件
const Hello:React.FC<IHelloProps>= (props:IHelloProps)=>{
    return <h1>{props.message}</h1>
}

Hello.defaultProps = {
    message:"默认值"
}

export default Hello;