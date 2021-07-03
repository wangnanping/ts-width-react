import React from "react";
import stroe from "../../redux/store"
export const SignInPage : React.FC = (props) => {
    console.log(props)
    console.log(stroe.getState());
    return <h1>登录页面</h1>;
}