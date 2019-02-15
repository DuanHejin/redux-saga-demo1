import axios from 'axios';

export const getUsers = async () => {
  const {data: users} = await axios.get("/users");
  return users;
}

export const getUserById = async id => {
  const {data: user} = await axios.get(`/user/${id}`);
  return user;
}