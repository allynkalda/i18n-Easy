import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';
import './App.css';
import Home from './components/Home';
import messages from './message';
import Navbar from './components/Navbar';

export default function Main(props) {

    const [language, setLanguage] = useState('en');

    const handleClick = (lang) => {
      setLanguage(lang);
    }

    return (
        <IntlProvider
        messages={messages[language]}
        locale={language}
       >
        <div className="App">
          <Navbar history={props.history} handleClick={handleClick} language={language}></Navbar>
        </div>
            <Home></Home>
      </IntlProvider>
    )
}
