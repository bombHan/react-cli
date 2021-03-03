import React, { useContext,useEffect } from "react";
import {Context} from '../index.jsx'
// console.log(Context)
export default function User() {
  const { state, dispatch } = useContext(Context);
  useEffect(() => {
    console.log('监听state change', state)
  }, [state]);
  const getInformation = () => {
    dispatch({ type: "setUser", user: {name: 'child1Name'} });
  }
  const reduce=()=>{
    let number = state.number - 1
    dispatch({ type: "setNumber", number });
  }
  return (
      <div className="child">
          这是子组件11111
          <div>个人信息</div>
          <div>name: {state.user ? state.user.name : ""}</div>
          <div>number: {state.number}</div>
          <button onClick={getInformation}>get Information</button>
          <button onClick={reduce}>number - 1</button>
      </div>
  );
}