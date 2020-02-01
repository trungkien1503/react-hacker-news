import React from 'react';
import {
  HashRouter as Router,
  Route
} from 'react-router-dom';
import './App.css';
import './styles/story.css';

import Stories from './containers/Stories';
import Story from './containers/Story';
import Header from './components/header';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <Router>
      <Header/>
      <Container>
        <Route exact path="/" component={Stories} />
        <Route exact path="/stories/:id" component={Story} />
      </Container>
    </Router>
  );
}

export default App;
