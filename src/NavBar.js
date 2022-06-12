import React from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='nav-bar'>
      <h1 className='site-title'>Welcome to Pyrex Party!</h1>
        <div className="navigation">
          <NavLink className='nav-button' exact to="/"> See All Patterns
          </NavLink>
          <NavLink className='nav-button' to='/search'>Search
          </NavLink>
          <NavLink className='fav-button' to='/favorites'> Favorites
          </NavLink>
        </div>
    </div>
  )
}

export default NavBar;
