import { createContext, useEffect, useState } from "react";
import axios from 'axios';
import apiHelper from "../apiHelper/apiHelper";

export const PostContext = createContext({});

const PostProvider = ({ children }) => {
  const apiUrl = process.env.REACT_APP_API_URL
  const [post, setPost] = useState({});
  const [posts, setPosts] = useState([]);


  useEffect(() => {
    getAllPosts();
  }, [])

  const getAllPosts = async () => {
    const response = await axios.get(apiUrl + '/posts');
    setPosts(response.data);
  }

  const getPost = async () => {
    const response = await axios.get(`${apiUrl}/createpost`);
    setPost(response.data);
  }

  const getPostById = async (id) => {
    const response = await apiHelper.get(`/posts/post/${id}`);
    setPost(response.data);
  }

  const createPost = async (obj) => {
    const response = await axios.post(`${apiUrl}/posts/post`, obj);
    getAllPosts();
  }

  const updatePost = async (id) => {
    const response = await apiHelper.put(`/posts/post/${id}`);
    updatePost();
  }

  const deletePost = async (id) => {
    const response = await apiHelper.delete(`posts/post/${id}`);
    getAllPosts()
  }

  return (
    <PostContext.Provider
      value={{
        posts,
        post,
        setPost,
        createPost,
        updatePost,
        getPostById,
        deletePost,
      }}
    >
      {children}
    </PostContext.Provider>
  )
}

export default PostProvider
