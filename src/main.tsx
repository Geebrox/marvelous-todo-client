import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactModal from 'react-modal';
import App from './App.tsx';

const rootElement = document.getElementById('root')!;

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

ReactModal.setAppElement(rootElement);
