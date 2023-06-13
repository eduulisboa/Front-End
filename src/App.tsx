import React from "react";
import "./App.css";
import ProductList from "./pages/ProductList";
import NavBar from "./components/navBar/NavBar";
import { Route, Routes, } from "react-router-dom";
import Favorite from "./pages/Favorite";
import ProductDetail from "./pages/ProductDetail";
import Footer from "./components/footer/Footer";


function App() {
  return <div className="App">
    <NavBar />
    <Routes>
      <Route path="/" ></Route>
      <Route path="/products" element={<ProductList />} ></Route>
      <Route path="/favorites" element={<Favorite />} ></Route>
      <Route path="/products/:id" element={<ProductDetail />} ></Route>
    </Routes>
    <Footer />
  </div>;
}

export default App;
