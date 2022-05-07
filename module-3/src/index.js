import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './components/Home';

// ReactDOM.render(
//   <Home />,
//   document.getElementById('app')
// );

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);