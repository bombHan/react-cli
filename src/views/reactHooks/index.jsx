import React, { useReducer, useContext, useEffect } from "react";
import './index.scss';
import Child1 from './child1'
import Child2 from './child2'
const store = {
  user: null,
  number: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "setUser":
      return { ...state, user: action.user };
    case "setNumber":
      return { ...state, number: action.number };
    default:
      throw new Error();
  }
}

export const Context = React.createContext(null);

export default function App() {
  const [state, dispatch] = useReducer(reducer, store);

  const api = { state, dispatch };
  return (
    <Context.Provider value={api}>
      <div className="top">
        这是顶层父组件！！！！
        通过useContext和useReducer来替换redux
          <div>个人信息</div>
        <div>name: {state.user ? state.user.name : ""}</div>
        <div>number: {state.number}</div>
      </div>

      <Child1 />
      <Child2 />
    </Context.Provider>
  );
}

