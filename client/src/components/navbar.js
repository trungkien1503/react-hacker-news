import React from 'react';
import { NavLink } from 'react-router-dom';

const linkStyle = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

export default function Navbar() {
    return (
      <div >
        <NavLink to="/" style={linkStyle} activeStyle={{background: 'darkblue'}}>Hacker News Feed</NavLink>
        <NavLink to="/posts" style={linkStyle} activeStyle={{background: 'darkblue'}}>Users Posts</NavLink>
      </div>
    )
}
