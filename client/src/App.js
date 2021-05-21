import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './components/login'
import Register from './components/register'
import Todo from './components/todo'
import './App.css';
function App() {
 return(
  <Router>
  <Route exact path="/" component={Login}/>
  <Route path="/register" component={Register}/>
  <Route path="/todo" component={Todo}/>
</Router>
  );
}

export default App;
