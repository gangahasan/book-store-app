import React,{useContext} from 'react'
import { UserContext } from '../context/AuthContext'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {
    const {isLogin} = useContext(UserContext)
  return isLogin? children : <Navigate to="/login"/>
}

export default PrivateRoute