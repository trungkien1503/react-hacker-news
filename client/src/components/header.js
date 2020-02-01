import React from 'react';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';

export default function header(props) {
  return (
    <div className="container">
      <header className="app-header">
        <Link to='/' className="text-center story-link">
          <img src={logo} className="app-logo" alt="logo" />

          <h1 class="header-title h4">Hacker News</h1>
        </Link>
      </header>
    </div>
  )
}
