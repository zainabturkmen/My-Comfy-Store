import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import { Navbar, Sidebar, Footer } from "./components";

import {
  HomePage,
  AboutPage,
  ProductsPage,
  SingleProdut,
  CheckoutPage,
  ErrorPage,
} from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="products/:id" element={<SingleProdut />} />
        <Route path="checkout" element={<CheckoutPage />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
