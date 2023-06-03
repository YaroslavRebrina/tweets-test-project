import axios from "axios";

axios.defaults.baseURL = "https://6479a171a455e257fa6373c2.mockapi.io/";

export const fetchUsers = async () => {
  const { data } = await axios.get("/users");
  return data;
};
