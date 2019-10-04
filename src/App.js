import React from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Main from './Main';


function App() {

  return (
    <div>
      <Switch>
          <Route exact path="/" component={Main}></Route>
          <Route path="/en" component={Main}></Route>
          <Route path="/es" component={Main}></Route>
      </Switch>
    </div>
  );
}

export default App;
