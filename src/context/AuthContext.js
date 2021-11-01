import { createContext, useEffect, useState } from "react";
import axios from 'axios';
import apiHelper from "../apiHelper/apiHelper";

export const AuthContext = createContext({});

const AuthProvider = ({children}) => {
  const [ loggedIn, setLoggedIn] = useState(false);
  const apiUrl = process.env.REACT_APP_API_URL;
  // const [admin, setAdmin] = useState(false);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({})

  useEffect(() => {
    isAdmin();
    checkLogged();
    getAllUsers();
  }, [])
  
  const getAllUsers = async (user) => {
    // .env file missing -> add REACT_APP_API_URL
    const response = await axios.get(apiUrl + '/auth');
    setUsers(response.data);
  }

  const loginUser = async (user) => {

    const response = await axios.post(apiUrl +  '/auth/login', user);
    const { data } = response;
    localStorage.setItem('jwtreservespot', JSON.stringify({user: data.user, token: data.token}));
    setLoggedIn(true);
    isAdmin();
    return data
  }

  const signUpUser = async (user) => {
      try {
        const response = await  apiHelper.post('/auth/signup', user);
        const {data} = response;
        setUser(data.user);
        localStorage.setItem('jwtreservespot', JSON.stringify({user_role:data.user.role, token:data.token}));
        setLoggedIn(true);
      } catch (error) {
        console.log(error);
      }
  }



  const checkLogged = () => {
    const tokenValue = localStorage.getItem('jwtreservespot');
    return tokenValue ? setLoggedIn(true) : setLoggedIn(false); 
  }

  const isAdmin = () => {
    const token = JSON.parse(localStorage.getItem('jwtreservespot'));
  }

  const logOutUser = () => {
    localStorage.removeItem('jwtreservespot');
    setLoggedIn(false);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        users,
        loggedIn,
        setUser,
        loginUser,
        logOutUser,
        signUpUser
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider