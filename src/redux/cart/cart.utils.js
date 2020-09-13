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
