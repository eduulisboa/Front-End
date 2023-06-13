import React from "react";
import "./App.css";
import ProductList from "./pages/ProductList";
import SearchProduct from "./components/SearchProduct";

function App() {
  return <div className="App">
    <SearchProduct />
    <ProductList />
  </div>;
}

export default App;
