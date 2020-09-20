import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const onToken = (token) => {
    axios({
      url: "http://localhost:5000/payment",
      method: "POST",
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((res) => {
        alert("Payment Successful");
      })
      .catch((err) => {
        console.log("Payment Failed", err);
        alert("Payment Failed. Please make sure you use provided credit card");
      });
  };
  const publishableKey =
    "pk_test_51HSGXTGLBUAUQkpyEG67OxPlUXgZ8As3IjvqeA6ZxI38OAvmKDXINHZXPw7dx5tCWTuwWdwZG4s3sh7CHUdmL8NQ002apRopX3";
  return (
    <StripeCheckout
      label="Pay Now"
      name="React Commerce"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
      currency="INR"
    />
  );
};

export default StripeCheckoutButton;
