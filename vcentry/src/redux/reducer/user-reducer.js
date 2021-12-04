const intailState = {
  userList : []
}

export default function userReducer(state = intailState, action){
  switch(action.type){
    case "ADD_USER_DATA":
      return {...state, userList : [ ...state.userList, action.value ]} 
    default:
      return state;
  }
}