import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <div className="sessionButtons">
          <LoginFormModal />
          <Link to="/signup">
            <button>Sign Up</button>
          </Link>
      </div>
    );
  }

  return (
    <div className='navbarContainer'>
      <div className='navbar'>
        <div className='leftNavbar'>
          <image src='frontend/src/images/logo.png'></image>
          <div className='logo' background>
            Welp
          </div>
          <div className='navbarLinks'>
            <NavLink exact to="/" style={{textDecoration: 'none'}}>Home</NavLink>
          </div>
          <div className='navbarLinks'>
            <NavLink to="/shops" style={{textDecoration: 'none'}}>Shops</NavLink>
          </div>
        </div>
        <div className='rightNavbar'>
          {isLoaded && sessionLinks}
        </div>
      </div>
    </div>
  );
}

export default Navigation;
