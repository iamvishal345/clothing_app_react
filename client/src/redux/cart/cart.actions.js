import CartActionTypes from "./cart.types";

export const toggleCartHidden = () => ({
  type: CartActionTypes.toggleCart,
});

export const addItem = (item) => ({
  type: CartActionTypes.addItem,
  payload: item,
});

export const clearItemFromCart = (item) => ({
  type: CartActionTypes.clearItemFromCart,
  payload: item,
});

export const removeItem = (item) => ({
  type: CartActionTypes.removeItem,
  payload: item,
});

export const clearCart = () => ({
  type: CartActionTypes.CLEAR_CART,
});
