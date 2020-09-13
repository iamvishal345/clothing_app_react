import CartActionTypes from "./cart.types";

export const toggleCartHidden = () => ({
  type: CartActionTypes.toggleCart,
});

export const addItem = (item) => ({
  type: CartActionTypes.addItem,
  payload: item,
});
