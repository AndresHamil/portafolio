import React from 'react';
import { createRoot } from 'react-dom/client'; 
import Router from './pages/router';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import './assets/styles/base.scss'

import { GlobalContextProvider } from './GlobalContextProvider';



const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalContextProvider>
      <Router />
    </GlobalContextProvider>
  </React.StrictMode>
);
