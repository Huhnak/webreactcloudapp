import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './style.scss'
import App from './App'
import axios from 'axios';

const root = ReactDOM.createRoot(document.getElementById('root'));
axios.defaults.withCredentials = true;
root.render(
    <App/>
);
reportWebVitals();
