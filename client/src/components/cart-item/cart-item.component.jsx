import React from "react";

import "./cart-item.style.scss";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <div className="cart-item">
    <img src={imageUrl} alt="cloth" />
    <div className="item-details">
      <span className="name">{name}</span>
      <span className="price">
        {quantity} X ₹{price}
      </span>
    </div>
  </div>
);

export default CartItem;
