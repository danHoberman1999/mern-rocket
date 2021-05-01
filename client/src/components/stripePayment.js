import React from "react";

import ElementDemos from "./ElementDemos";
import CardForm from "./demos/CardForm";
import FpxBankForm from "./demos/FpxBankForm";
import IbanForm from "./demos/IbanForm";
import IdealBankForm from "./demos/IdealBankForm";
import PaymentRequestForm from "./demos/PaymentRequestForm";
import SplitForm from "./demos/SplitForm";
import AfterpayClearpayMessage from "./demos/AfterpayClearpayMessage";
import styled from "styled-components";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  "pk_test_51ImDHzGahigLtd2ypOeUr8ckMe18kw3T3y8gipqG6A3GZFxk2ZvR220rXm6z9TPvPHC5ueTP9gc5HOdgFVcqtJFF00UJloyLFl"
);

const Styles = styled.div`
  * {
    box-sizing: border-box;
  }

  body,
  html {
    background-color: #f6f9fc;
    font-size: 18px;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    margin: 0;
  }

  .DemoPickerWrapper {
    padding: 0 12px;
    font-family: "Source Code Pro", monospace;
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
    border-radius: 3px;
    background: white;
    margin: 24px 0 48px;
    width: 100%;
  }

  .DemoPicker {
    font-size: 18px;
    border-radius: 3px;
    background-color: white;
    height: 48px;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    border: 0;
    width: 100%;
    color: #6772e5;
    outline: none;
    background: transparent;

    -webkit-appearance: none;
  }

  .DemoWrapper {
    margin: 0 auto;
    max-width: 500px;
    padding: 0 24px;
    display: flex;
    flex-direction: column;
    height: 100vh;
  }

  .Demo {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-bottom: 40%;
  }

  label {
    color: #6b7c93;
    font-weight: 300;
    letter-spacing: 0.025em;
  }

  button {
    white-space: nowrap;
    border: 0;
    outline: 0;
    display: inline-block;
    height: 40px;
    line-height: 40px;
    padding: 0 14px;
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
    color: #fff;
    border-radius: 4px;
    font-size: 15px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.025em;
    background-color: #6772e5;
    text-decoration: none;
    -webkit-transition: all 150ms ease;
    transition: all 150ms ease;
    margin-top: 10px;
  }

  button:hover {
    color: #fff;
    cursor: pointer;
    background-color: #7795f8;
    transform: translateY(-1px);
    box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
  }

  input,
  .StripeElement {
    display: block;
    margin: 10px 0 20px 0;
    max-width: 500px;
    padding: 10px 14px;
    font-size: 1em;
    font-family: "Source Code Pro", monospace;
    box-shadow: rgba(50, 50, 93, 0.14902) 0px 1px 3px,
      rgba(0, 0, 0, 0.0196078) 0px 1px 0px;
    border: 0;
    outline: 0;
    border-radius: 4px;
    background: white;
  }

  input::placeholder {
    color: #aab7c4;
  }

  input:focus,
  .StripeElement--focus {
    box-shadow: rgba(50, 50, 93, 0.109804) 0px 4px 6px,
      rgba(0, 0, 0, 0.0784314) 0px 1px 3px;
    -webkit-transition: all 150ms ease;
    transition: all 150ms ease;
  }

  .StripeElement.IdealBankElement,
  .StripeElement.FpxBankElement,
  .StripeElement.PaymentRequestButton {
    padding: 0;
  }

  .StripeElement.PaymentRequestButton {
    height: 40px;
  }
`;

const demos = [
  {
    path: "/card-element",
    label: "CardElement",
    component: CardForm,
  },
  {
    path: "/split-card-elements",
    label: "Split Card Elements",
    component: SplitForm,
  },
  {
    path: "/payment-request-button-element",
    label: "PaymentRequestButtonElement",
    component: PaymentRequestForm,
  },
  {
    path: "/ideal-bank-element",
    label: "IdealBankElement",
    component: IdealBankForm,
  },
  {
    path: "/iban-element",
    label: "IbanElement",
    component: IbanForm,
  },
  {
    path: "/fpx-bank-element",
    label: "FpxBankElement",
    component: FpxBankForm,
  },
  {
    path: "/afterpay-clearpay-message",
    label: "AfterpayClearpayMessageElement",
    component: AfterpayClearpayMessage,
  },
];

const stripePayment = () => {
  return (
    <Styles>
      <Elements stripe={stripePromise}>
        <ElementDemos demos={demos} />
      </Elements>
    </Styles>
  );
};

export default stripePayment;
