import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Bannerprincipal from './components/Bannerprincipal';
import Aboutspacerose from './components/aboutspacerose.jsx';
import Personajes from './components/personajes.jsx'

ReactDOM.render(
  <React.StrictMode>
    
    <Bannerprincipal/>
    <Aboutspacerose/>
    <Personajes/>

  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
