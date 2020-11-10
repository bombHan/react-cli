//这是reducer
const reducer = (state, action) => {
  switch (action.type) {
    case 'COUNT':
      let count = action.value;
      return { ...state, ...{ count } };
    case 'USERINFO':
      let userInfo = action.value;
      return { ...state, ...{ userInfo } };
    default:
      return state;
  }
};
export default reducer