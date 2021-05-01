import React, { useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";
import Img4 from "../../images/svg-4.svg";
import NavigationStripe from "../navigationStripe";

import {
  StripeContainer,
  ImgWrap,
  Img,
  BtnWrap,
  StripeButton,
  Column1,
  Column2,
  InfoWrapper,
  InfoRow,
  TextWrapper,
  Heading,
  Subtitle,
  Div,
} from "./stripeElement";

import "react-toastify/dist/ReactToastify.css";

toast.configure();

const StripePayment = (props) => {
  const [product, setProduct] = useState({
    name: "Rocket",
    price: 500.33,
    description: "Beautiful Rocket",
  });

  async function handleToken(token, addresses) {
    // const response = await axios.post(
    //   "https://ry7v05l6on.sse.codesandbox.io/checkout",
    //   { token, product }
    // );
    // const { status } = response.data;
    // console.log("Response:", response.data);
    // const status = "success";
    // if (status === "success") {
    //   toast("Success! Check email for details", { type: "success" });
    // } else {
    //   toast("Something went wrong", { type: "error" });
    // }
  }

  return (
    <Div loggedIn={props.loggedIn}>
      <StripeContainer>
        <NavigationStripe />
        <InfoWrapper>
          <InfoRow>
            <Column1>
              <TextWrapper>
                <Heading>Payments for the internet</Heading>
                <Subtitle>
                  The world’s most powerful and easy-to-use APIs. Set up for
                  easy payment on Net-Rocket
                </Subtitle>
                <BtnWrap>
                  <StripeCheckout
                    stripeKey="pk_test_51ImDHzGahigLtd2ypOeUr8ckMe18kw3T3y8gipqG6A3GZFxk2ZvR220rXm6z9TPvPHC5ueTP9gc5HOdgFVcqtJFF00UJloyLFl"
                    token={handleToken}
                    amount={product.price * 100}
                    name="Rocket"
                    billingAddress
                    shippingAddress
                  >
                    <StripeButton>Pay With Stripe</StripeButton>
                  </StripeCheckout>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img
                  src={Img4}
                  alt="Rocket-Image"
                  content-type="image/svg+xml"
                />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </StripeContainer>
    </Div>
  );
};

export default StripePayment;
