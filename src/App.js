import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';
import './App.css';
import Home from './components/Home';
import messages from './message';
import Navbar from './components/Navbar';

function App() {
  
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
        <Navbar handleClick={handleClick} language={language}></Navbar>
          <Home />
      </div>
    </IntlProvider>
  );
}

export default App;
