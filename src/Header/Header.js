import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
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

Header.propTypes = {
  handleReset: PropTypes.func
}

export default Header;