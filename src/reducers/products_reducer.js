import { act, useEffect } from "react";

const products_reducer = (state, action) => {
  if (action.type === "SIDEBAR_OPEN") {
    return { ...state, isSidebarOpen: true };
  }
  if (action.type === "SIDEBAR_CLOSE") {
    return { ...state, isSidebarOpen: false };
  }
  if (action.type === "GET_PRODUCTS_BEGIN") {
    return { ...state, products_loading: true };
  }

  if (action.type === "GET_PRODUCTS_SUCCESS") {
    const featured_products = action.payload.filter(
      (product) => product.featured === true
    );
    return {
      ...state,
      products_loading: false,
      products: action.payload,
      featured_products,
    };
  }
  if (action.type === "GET_PRODUCTS_ERROR") {
    return { ...state, products_loading: false, products_error: true };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default products_reducer;
