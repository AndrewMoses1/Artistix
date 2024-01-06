import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Routes/Home';
import Portraits from './Routes/Portraits';
import Cartoons from './Routes/Cartoons';
import Calligraphy from './Routes/Calligraphy';
import Animations from './Routes/Animations';


// Top level router configuration for the entire web application 
const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Portraits" element={<Portraits />} />
      <Route path="/Cartoons" element={<Cartoons />} />
      <Route path="/Calligraphy" element={<Calligraphy />} />
      <Route path="/Animations" element={<Animations />} />
    </Routes>
  </BrowserRouter>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);