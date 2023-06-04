import axios from "axios";

axios.defaults.baseURL = "https://6479a171a455e257fa6373c2.mockapi.io/";

export const fetchUsers = async (page, limit) => {
  const { data } = await axios.get(`/users?p=${page}&l=${limit}`);
  console.log(data);
  return data;
};

export const fetchOneUser = async (id) => {
  const { data } = await axios.get(`/users/${id}`);

  return data;
};

export const followUser = async (id, followers) => {
  const { data } = await axios.put(`/users/${id}`, {
    isFollowed: true,
    followers: followers + 1,
  });
  return data;
};

export const unFollowUser = async (id, followers) => {
  const { data } = await axios.put(`/users/${id}`, {
    isFollowed: false,
    followers: followers - 1,
  });
  return data;
};
