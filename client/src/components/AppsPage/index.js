import React, { useState } from "react";
import NavigationStripe from "../navigationStripe";
import Img6 from "../../images/svg-6.svg";

import {
  StripeContainer,
  ImgWrap,
  Column1,
  Column2,
  InfoWrapper,
  InfoRow,
  TextWrapper,
  Heading,
  Subtitle,
  Div,
  AppsContainer,
  Img,
} from "./appElement";

const AppPage = (props) => {
  return (
    <Div>
      <StripeContainer>
        <NavigationStripe loggedIn={props.loggedIn} />
        <InfoWrapper>
          <InfoRow>
            <Column1>
              <TextWrapper>
                <Heading>Stripe, Maps, Chess</Heading>
                <Subtitle>
                  Stripe payments with a secure server, google maps api for
                  viewing pleasure, and a chess framework using stockfish.
                </Subtitle>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <AppsContainer>
                  <Img src={Img6} alt="unDraw" content-type="image/svg+xml" />
                </AppsContainer>
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </StripeContainer>
    </Div>
  );
};

export default AppPage;
