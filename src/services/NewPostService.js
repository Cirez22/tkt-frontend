import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;

export const getNewPostFromApi = async () => {
  const response = await axios.get(`${apiUrl}/newpost`);
  return response;
}

export const getSingleNewPostFromApi = async (id) => {
  const response = await axios.get(`${apiUrl}/newpost/newpost/${id}`);
  return response;
}

export const postNewPostToApi = async (newpost) => {
  const response = await axios.post(`${apiUrl}/newpost/newpost`, newpost);
  return response;
}

export const updateNewPostToApi = async (newpost) => {
  const response = await axios.put(`${apiUrl}/newpost/newpost/${newpost._id}`, newpost)
  return response;
}

export const deleteNewPostFromApi = async (id) => {
  const response = await axios.delete(`${apiUrl}/newpost/newpost/${id}`);
  return response;
}