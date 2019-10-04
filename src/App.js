import React from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';
import Main from './Main';
import Index from './components/Item'

function App() {

  return (
    <div>
      <Switch>
          <Route exact path={["/", "/en", "/es"]} component={Main}></Route>
          <Route path="/en/:id" component={Index}></Route>
          <Route path="/es/:id" component={Index}></Route>
      </Switch>
    </div>
  );
}

export default App;
