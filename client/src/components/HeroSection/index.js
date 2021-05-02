import React, { useState } from "react";
import Video from "../../videos/video.mp4";
import { Button } from "../ButtonElement";

import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
  HeroLogged,
} from "./HeroElements";

const HeroSection = (props) => {
  const loggedIn = props.loggedIn;

  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Net Rocket</HeroH1>
        <HeroP>
          Created by Daniel Hoberman with help from Karsen Hansen, Evan Conrad,
          and stack overflow
        </HeroP>
        <HeroBtnWrapper>
          {loggedIn ? (
            <HeroLogged>Welcome to Net Rocket</HeroLogged>
          ) : (
            <Button
              to="/sign-up"
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary="true"
              dark="true"
            >
              Get started {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          )}
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
