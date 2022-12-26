import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './components/header/Header';

const AppRoot = ReactDOM.createRoot(document.getElementById('root'));
AppRoot.render(
  <React.StrictMode>
    <Header />
    <App />
  </React.StrictMode>,
);
