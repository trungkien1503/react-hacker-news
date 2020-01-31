import React from 'react';
import logo from '../logo.svg';

export default function header(props) {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>Welcome to News Feed from Hacker News.</p>

      </header>
    </div>
  )
}
