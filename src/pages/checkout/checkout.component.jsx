import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selector";
import "./checkout.style.scss";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const CheckoutPage = ({ cartItems, totalPrice }) => (
  <div className="checkout-page">
    {cartItems.length ? (
      <React.Fragment>
        <div className="checkout-header">
          <div className="header-block">
            <span>Product</span>
          </div>
          <div className="header-block">
            <span>Description</span>
          </div>
          <div className="header-block">
            <span>Quantity</span>
          </div>
          <div className="header-block">
            <span>Price</span>
          </div>
          <div className="header-block">
            <span>Remove</span>
          </div>
        </div>
        {cartItems.map((cartItem) => (
          <CheckoutItem cartItem={cartItem} key={cartItem.id} />
        ))}
        <div className="total">
          <span>Total: ${totalPrice}</span>
        </div>
      </React.Fragment>
    ) : (
      <span>Your Cart is Empty</span>
    )}
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
