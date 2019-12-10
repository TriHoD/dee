import React from 'react'; 
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css';
import './App.css';

import MenuBar from './components/menubar/menubar'
import Home from './components/home/home';
import Login from './components/login/login';
import Register from './components/register/register';

function App() {
  return (
    <Router>
      <Container>
        <MenuBar />
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        {/* <Route exact path="/posts/:postId" component={SinglePost} /> */}
      </Container>
    </Router>
  );
}

export default App;
