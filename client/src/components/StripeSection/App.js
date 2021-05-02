import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import styled from "styled-components";
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  "pk_live_51ImDHzGahigLtd2yRmaXa0oM93DPwdsoYtt2qZDb18LboHLNU0yLXjbfzVJZ4Btvy8qYkAwRi4VZgap727PijToX00e5wJbbN0"
);

const Styles = styled.div`
  section {
    background: #ffffff;
    display: flex;
    flex-direction: column;
    width: 400px;
    height: 112px;
    border-radius: 6px;
    justify-content: space-between;

    @media screen and (max-width: 1060px) {
      width: 200px;
    }
  }

  .product {
    display: flex;
  }
  .description {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  p {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.154px;
    color: #242d60;
    height: 100%;
    width: 100%;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
  }
  .stripe-image {
    border-radius: 6px;
    margin: 10px;
    width: 54px;
    height: 57px;
  }
  h3,
  h5 {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.154px;
    color: #242d60;
    margin: 0;
  }
  h5 {
    opacity: 0.5;
  }
  #checkout-button {
    height: 36px;
    background: #12c2e9; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
      #f64f59,
      #c471ed,
      #12c2e9
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
      #f64f59,
      #c471ed,
      #12c2e9
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    color: white;
    width: 100%;
    font-size: 18px;
    border: 0;
    font-weight: 600;
    cursor: pointer;
    letter-spacing: 0.6;
    border-radius: 0 0 6px 6px;
    transition: all 0.2s ease;
    box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
  }
  #checkout-button:hover {
    opacity: 0.8;
  }
`;

const ProductDisplay = ({ handleClick }) => (
  <Styles>
    <section>
      <div className="product">
        <img
          className="stripe-image"
          src="https://mern-app-5000.s3-us-west-2.amazonaws.com/rocketship.png"
          alt="A rocket for sale"
        />
        <div className="description">
          <h3>Rocket</h3>
          <h5>$2050.00</h5>
        </div>
      </div>
      <button
        type="button"
        id="checkout-button"
        role="link"
        onClick={handleClick}
      >
        Checkout
      </button>
    </section>
  </Styles>
);

const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);

export default function Stripe() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  const handleClick = async (event) => {
    const stripe = await stripePromise;

    const response = await fetch("/create-checkout-session", {
      method: "POST",
    });

    const session = await response.json();

    // When the customer clicks on the button, redirect them to Checkout.
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer
      // using `result.error.message`.
    }
  };

  return message ? (
    <Message message={message} />
  ) : (
    <ProductDisplay handleClick={handleClick} />
  );
}
