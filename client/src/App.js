import React from 'react';
import logo from './logo.svg';
import {
  HashRouter as Router,
  Route
} from 'react-router-dom';
import PostListTutorial from './components/PostListTutorial';
import './App.css';

import Stories from './containers/Stories';
import Navbar from './components/navbar';
import Posts from './containers/Posts';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <br></br>
        <Container>
          <Route exact path="/" component={Stories} />
          <Route exact path="/posts" component={Posts} />
        </Container>

      </div>
    </Router>
  );
}

export default App;
