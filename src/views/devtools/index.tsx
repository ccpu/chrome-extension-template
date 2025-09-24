import React from 'react';
import ReactDOM from 'react-dom/client';
import { DevTools } from './DevTools';
import '../../globals.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(
  <React.StrictMode>
    <DevTools />
  </React.StrictMode>,
);

chrome.devtools.panels.create('ReactCrx', '', '../../devtools.html', () => {
  console.warn('devtools panel create');
});
