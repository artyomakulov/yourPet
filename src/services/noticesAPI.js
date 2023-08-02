import axios from 'axios';

export const getUserNotices = async () => {
  const { data } = await axios.get(`notices/own`);
  return data;
};
export const deleteUserNoticeById = async (id) => {
  // const config = {
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  // };
  const { data } = await axios.delete(`notices/${id}`);
  return data;
};

export const getUserFavoritesNotices = async () => {
  const { data } = await axios.get(`/notices/favorites`);
  return data;
};

export const addToFavoriteNotices = async _id => {
  const { data } = await axios.post(`notices/favorites/${_id}`);
  return data;
};

export const removeFromFavoriteNotices = async _id => {
  const { data } = await axios.delete(`notices/favorites/${_id}`);
  return data;
};
