import React from "react";
import { useContext } from "react";
import {products_url as url } from "../utils/constants"

const initialState = {};

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
  return (
    <ProductsContext.Provider value="products context">
      {children}
    </ProductsContext.Provider>
  );
};



export const useProductsContext = () => {
    return useContext(ProductsContext)
}
