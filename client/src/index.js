import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Landing from './components/landing';
import Home from './components/home';
import Results from './components/results';
import Profile from './components/profile';
import 'bootstrap';

const routing = (
    <Router>
      <div>
        <Route exact path="/" component={Landing} />
        <Route path="/home" component={Home} />
        <Route path="/results" component={Results} />
        <Route path="/profile/:id" component={Profile} />
      </div>
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'));
