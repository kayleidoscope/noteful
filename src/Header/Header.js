import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header(props) {
  return (
    <header 
      className='header'
      onClick={() => {props.handleReset()}}
    >
      <Link to={'/'}>
        Noteful
      </Link>
    </header>
  );
}

export default Header;