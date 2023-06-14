import React from "react";
import "./App.css";
import ProductList from "./pages/ProductList";
import NavBar from "./components/navBar/NavBar";
import { Route, Routes, } from "react-router-dom";
import FavoriteList from "./pages/FavoriteList";
import ProductDetail from "./pages/ProductDetail";
import Footer from "./components/footer/Footer";
import CartList from "./pages/CartList";
import About from "./pages/About";


function App() {
  return <div className="App">
    <NavBar />
    <Routes>
      <Route path="/" ></Route>
      <Route path="/products" element={<ProductList />} ></Route>
      <Route path="/favorites" element={<FavoriteList />} ></Route>
      <Route path="/products/:id" element={<ProductDetail />} ></Route>
      <Route path="/cart" element={<CartList />} ></Route>
      <Route path="/about" element={<About />} ></Route>
    </Routes>
    <Footer />
  </div>;
}

export default App;
