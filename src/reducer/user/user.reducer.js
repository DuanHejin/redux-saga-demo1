import {UserAction} from '../../constants/actionTyps';

const initState = {
  users: [],
  user: null
};

export default function userReducer(state = initState, action) {
  switch(action.type) {
    case UserAction.GET_USERS_SUCCESS: 
      return {
        ...state,
        users: action.payload
      }
    case UserAction.GET_USER_BY_ID_SUCCESS:
      return {
        ...state,
        user: action.payload
      }
    case UserAction.CLEAR_USERS:
      return {
        ...state,
        users: [],
        user: null
      }
    default:
      return state;
  }
}