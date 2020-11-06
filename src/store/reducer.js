//这是reducer
const reducer = (state , action) => {
  switch (action.type) {
    case 'COUNT':
      let count =  action.value;
      return {...state,...{count}};
    default:
      return state;
  }
};
export default reducer