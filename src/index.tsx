import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import App from 'App';
import { CharacterContextProvider } from 'contexts/CharacterContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Router>
      <CharacterContextProvider>
        <CssBaseline />
        <App />
      </CharacterContextProvider>
    </Router>
  </React.StrictMode>,
);
