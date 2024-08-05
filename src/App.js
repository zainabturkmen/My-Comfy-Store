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
    <>
      <HomePage />
    </>
  );
}

export default App;
