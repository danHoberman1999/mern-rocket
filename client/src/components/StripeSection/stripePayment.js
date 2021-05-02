import React from "react";
import Stripe from "./App";
import Img4 from "../../images/svg-4.svg";
import NavigationStripe from "../navigationStripe";

import {
  StripeContainer,
  ImgWrap,
  Img,
  Column1,
  Column2,
  InfoWrapper,
  InfoRow,
  TextWrapper,
  Heading,
  Subtitle,
  Div,
} from "./stripeElement";

const StripePayment = (props) => {
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
    <Div>
      <StripeContainer>
        <NavigationStripe loggedIn={props.loggedIn} />
        <InfoWrapper>
          <InfoRow>
            <Column1>
              <TextWrapper>
                <Heading>Payments for the internet</Heading>
                <Subtitle>
                  The world’s most powerful and easy-to-use APIs. Set up for
                  easy payment on Net-Rocket
                </Subtitle>
                <Stripe />
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
