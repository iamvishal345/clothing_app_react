export const addItemToCart = (cartItem, item) => {
  const existingCartItem = cartItem.find((cartItem) => cartItem.id === item.id);
  if (existingCartItem) {
    return cartItem.map((cartItem) => {
      return cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem;
    });
  }
  return [...cartItem, { ...item, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  if (cartItemToRemove.quantity === 1) {
    return clearItemFromCart(cartItems, cartItemToRemove);
  } else {
    return cartItems.map((cartItem) => {
      if (cartItem.id === cartItemToRemove.id) {
        return { ...cartItem, quantity: cartItem.quantity - 1 };
      }
      return cartItem;
    });
  }
};

export const clearItemFromCart = (cartItems, cartItemToClear) => {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
};
