import React from "react";
import { ReactComponent as ShoppingIcon } from "../../asset/shopping-bag.svg";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import "./cart-icon.style.scss";
import { selectCartItemsCount } from "../../redux/cart/cart.selector";
import { createStructuredSelector } from "reselect";

const CartIcon = ({ toggleCartHidden, quantity }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="item-count" />
    <span className="item-count">{quantity}</span>
  </div>
);

const mapStateToProps = createStructuredSelector({
  quantity: selectCartItemsCount,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
