import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import GlobalStyle from "./theme/global.styles";
import Card from "./components/Card/Card";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import { BrowserRouter } from "react-router-dom";
import Modal from './components/Modal/Modal';

function App() {
    const [searchCheckbox, setSearchCheckbox] = React.useState({
        active: false,
        promo: false,
    });


  return (
      <BrowserRouter>
        <GlobalStyle/>
        <Navbar searchCheckbox={searchCheckbox} setSearchCheckbox={setSearchCheckbox}/>
        <ProductsPage searchCheckbox={searchCheckbox} setSearchCheckbox={setSearchCheckbox}/>
      </BrowserRouter>
  );
}

export default App;
