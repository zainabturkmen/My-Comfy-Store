import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/cart_reducer";

const getLocalStorage = () => {
  const cart = localStorage.getItem("cart");
  try {
    return cart ? JSON.parse(cart) : [];
  } catch (error) {
    console.error("Error parsing JSON from localStorage:", error);
    return [];
  }
};

const initialState = {
  cart: getLocalStorage(),
  total_items: 0,
  total_amount: 0,
  shipping_fee: 534,
};

const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Add to cart
  const addToCart = (id, amount, color, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, amount, product, color } });
  };

  // Remove item
  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  // Toggle amount
  const toggleAmount = (id, value) => {
    dispatch({ type: "TOGGLE_CART_ITEM_AMOUNT", payload: { id, value } });
  };

  // Clear cart
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  // Sync cart with localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{ ...state, addToCart, removeItem, toggleAmount, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
