import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';
import './App.css';
import Home from './components/Home';
import messages from './message';

function App() {
  
  const [language, setLanguage] = useState('en');

  return (
    <IntlProvider
      messages={messages[language]}
      locale={language}
     >
      <div className="App">
        <button onClick={() => setLanguage('en')}>English</button>
        <button onClick={() => setLanguage('es')}>Spanish</button>
          <Home />
      </div>
    </IntlProvider>
  );
}

export default App;
