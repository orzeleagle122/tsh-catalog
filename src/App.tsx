import React from 'react';
import Navbar from './components/organisms/Navbar/Navbar';
import GlobalStyle from './theme/global.styles';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<><Navbar /><ProductsPage /></>}/>
        <Route path="/login" element={<LoginPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
