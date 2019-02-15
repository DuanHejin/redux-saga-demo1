import { UserAction } from '../../constants/actionTyps';

// export const getUsers = async () => {
//   const {data: users} = await axios.get("/users");
//   return {
//     type: UserAction.GET_USERS,
//     payload: users
//   };
// }
// export const getUsers = () => {
//   const {data: users} = {data: [{id: 1, name: 'mockUser1', age: 1}]};
//   return {
//     type: UserAction.GET_USERS,
//     payload: users
//   };
// }

// export const clearUsers = () => {
//   return {
//     type: UserAction.CLEAR_USERS
//   };
// }

// export const getUserById = (id) => {
//   const {data: user} = {data: {id: 1, name: 'mockUser1', age: 1}};
//   return {
//     type: UserAction.GET_USER_BY_ID,
//     payload: user
//   };
// }

export const getUsers = () => {
  return {
    type: UserAction.GET_USERS,
  };
}
export const getUsersSuccess = users => {
  return {
    type: UserAction.GET_USERS_SUCCESS,
    payload: users
  };
}

export const clearUsers = () => {
  return {
    type: UserAction.CLEAR_USERS
  };
}

export const getUserById = (id) => {
  return {
    type: UserAction.GET_USER_BY_ID,
    payload: {id}
  };
}

export const getUserByIdSuccess = (user) => {
  return {
    type: UserAction.GET_USER_BY_ID_SUCCESS,
    payload: user
  };
}
