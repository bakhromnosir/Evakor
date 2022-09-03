import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import './App.css';
import './media.css'
import { BrowserRouter } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

