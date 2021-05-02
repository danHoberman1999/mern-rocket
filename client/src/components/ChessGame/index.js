import React from "react";
import Chessboard from "chessboardjsx";

import StockFish from "./Stockfish.js";
import NavigationStripe from "../navigationStripe";

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
  ChessContainer,
} from "./ChessElement";

const Chess = (props) => {
  const boardsContainer = {
    justifyContent: "space-around",
    alignItems: "center",
    margin: "auto",
    width: "auto",
    height: "auto",
  };
  const boardStyle = {
    borderRadius: "7px",
    boxShadow: `0 5px 15px rgba(0, 0, 0, 0.5)`,
  };

  return (
    <Div>
      <StripeContainer>
        <NavigationStripe loggedIn={props.loggedIn} />
        <InfoWrapper>
          <InfoRow>
            <Column1>
              <TextWrapper>
                <Heading>Chess Engine Using Stockfish</Heading>
                <Subtitle>
                  Using the amazing code of willb335. Redesigning designs and
                  some components.
                </Subtitle>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <ChessContainer>
                  <div style={boardsContainer}>
                    <StockFish>
                      {({ position, onDrop }) => (
                        <Chessboard
                          id="stockfish"
                          position={position}
                          width={320}
                          onDrop={onDrop}
                          boardStyle={boardStyle}
                          orientation="black"
                        />
                      )}
                    </StockFish>
                  </div>
                </ChessContainer>
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </StripeContainer>
    </Div>
  );
};

export default Chess;
