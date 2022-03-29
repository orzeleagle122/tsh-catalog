import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import GlobalStyle from "./theme/global.styles";
import Card from "./components/Card/Card";
import ProductsPage from "./pages/ProductsPage/ProductsPage";

function App() {
  return (
      <>
        <GlobalStyle/>
        <Navbar/>
          <ProductsPage/>
      </>
  );
}

export default App;
