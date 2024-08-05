import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import { Navbar, Sidebar, Footer } from "./components";

import {
  Home,
  About,
  Products,
  SingleProdut,
  Checkout,
  Error,
} from "./pages";

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<Products/>} />
        <Route path="products/:id" element={<SingleProdut />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
