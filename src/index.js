import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddProduct from './pages/AddProduct';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> 
  <BrowserRouter>
  <Routes>
    <Route path ='/Products/'element={<App/>}/> 
    <Route path ='/' element ={<AddProduct/>}/> 
  </Routes>

  </BrowserRouter>
    
  </React.StrictMode>
)
