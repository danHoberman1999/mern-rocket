import React, { useState } from "react";
import NavigationStripe from "../navigationStripe";
import GoogleMapReact from "google-map-react";

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
  MapsContainer,
} from "./mapsElement";

const Index = (props) => {
  const [maps, setMaps] = useState({
    center: { lat: 37.7749, lng: -122.4194 },
    zoom: 11,
  });

  return (
    <Div>
      <StripeContainer>
        <NavigationStripe loggedIn={props.loggedIn} />
        <InfoWrapper>
          <InfoRow>
            <Column1>
              <TextWrapper>
                <Heading>Integrated With Google Maps</Heading>
                <Subtitle>
                  Easy map access to see all your favorite locations.
                </Subtitle>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <MapsContainer>
                  <GoogleMapReact
                    bootstrapURLKeys={{
                      key: "AIzaSyC4b6kBXKSt1ctnEIDY8yCxjKhjPgoayPg",
                      language: "en",
                    }}
                    defaultCenter={maps.center}
                    defaultZoom={maps.zoom}
                  ></GoogleMapReact>
                </MapsContainer>
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </StripeContainer>
    </Div>
  );
};

export default Index;
