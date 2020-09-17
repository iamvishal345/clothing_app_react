import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
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
    />
  );
};

export default StripeCheckoutButton;
