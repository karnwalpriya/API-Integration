import React, { Component } from 'react';
import Register from './components/register.components';
import Login from './components/login.component';
import { Container, Row, Col } from 'reactstrap';
import Welcome from './components/welcome';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Welcome} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;