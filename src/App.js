import React, {useState} from 'react';
import { IntlProvider } from 'react-intl';
import { Switch, Route } from "react-router-dom";
import './App.css';
import Item from './components/Item';
import messages from './message';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App(props) {

  const [language, setLanguage] = useState('en');
  const handleClick = (lang) => {
    setLanguage(lang);
  }

  return (
    <div>
      <IntlProvider
        messages={messages[language]}
        locale={language}
       >
       <Navbar handleClick={handleClick} language={language}></Navbar>
      <Switch>
          <Route exact path={["/", "/en", "/es"]} render={(props) => <Home {...props} language={language} />} />
          <Route path="/en/:id" render={(props) => <Item {...props} language={language} />} />
          <Route path="/es/:id" render={(props) => <Item {...props} language={language} />} />
      </Switch>
      </IntlProvider>
    </div>
  );
}

export default App;
