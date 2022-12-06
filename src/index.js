import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import LoginForm from './Components/LoginForm';
import Header from './Components/Header'
import Files from './Components/Files'
import './style.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='app'>
    <Header/>
    <LoginForm/>
    <Files/>
    <aside></aside>
  </div>
);
reportWebVitals();
