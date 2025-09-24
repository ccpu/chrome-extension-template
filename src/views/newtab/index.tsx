import React from 'react';
import ReactDOM from 'react-dom/client';
import { NewTab } from './NewTab';
import '../../globals.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(
  <React.StrictMode>
    <NewTab />
  </React.StrictMode>,
);
