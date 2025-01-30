import React from 'react'
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/AuthContext';
import "../styles/navbar.css"

const Navbar = () => {
    const { isLogin, logout } = useContext(UserContext);
    const navigate = useNavigate()

  return (
    <div className="navbar">
      <div className="navleft">
        <NavLink to="/" className="navlink">Home</NavLink>
        <NavLink to ="/books" className="navlink">Books</NavLink>
      </div>
      <div className='navright'>
        {isLogin ? (
          <button type="submit" onClick={logout}>
            Logout
          </button>
        ) : (
          <button
            type="submit"
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
}

export default Navbar