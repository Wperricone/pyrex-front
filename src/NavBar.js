import React from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='nav-bar'>
      <h1>Welcome to Pyrex!</h1>
        <div className="navigation">
          <NavLink className='nav-button' exact to="/"> See All Patterns
          </NavLink>
          <NavLink className='nav-button' to='/search'>Search
          </NavLink>
          <NavLink className='nav-button' to='/favorites'> Favorites
          </NavLink>
        </div>
    </div>
  )
}

export default NavBar;
