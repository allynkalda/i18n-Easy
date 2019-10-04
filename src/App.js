import React from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';
import Main from './Main';

function App() {

  return (
    <div>
      <Switch>
          <Route exact path={["/", "/en", "/es"]} component={Main}></Route>
      </Switch>
    </div>
  );
}

export default App;
