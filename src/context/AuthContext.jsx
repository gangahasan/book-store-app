import React,{useState} from 'react'
import { createContext } from 'react';
import { useNavigate } from 'react-router-dom';

export const UserContext = createContext();
const AuthContext = ({children}) => {
   const[isLogin,setIsLogin] = useState(()=>{localStorage.getItem('token')? true : false});
    const navigate = useNavigate();

    const login = (token)=>{
        setIsLogin(true)
        localStorage.setItem('token', token);
        navigate("/") 
    }
    const logout = ()=>{
        setIsLogin(false)
        localStorage.removeItem('token');
        navigate("/login") 
    }
  return (
    <UserContext.Provider value={{isLogin,login,logout}}>
      {children}
    </UserContext.Provider>
  )
}

export default AuthContext