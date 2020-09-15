import CartActionTypes from "./cart.types";
import {
  addItemToCart,
  clearItemFromCart,
  removeItemFromCart,
} from "./cart.utils";
const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.toggleCart:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CartActionTypes.addItem:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case CartActionTypes.removeItem:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };
    case CartActionTypes.clearItemFromCart:
      return {
        ...state,
        cartItems: clearItemFromCart(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};
export default cartReducer;
