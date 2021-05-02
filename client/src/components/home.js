import React from "react";
import NavigationBar from "./navigationBar";
import Hero from "./HeroSection/index";
import Info from "./InfoSection/index";
import Footer from "./Footer/index";
import {
  homeObjOne,
  homeObjThree,
  homeObjTwo,
  homeObjFour,
  homeObjFive,
  homeObjSix,
  homeObjOneLogged,
  homeObjTwoLogged,
  homeObjThreeLogged,
  homeObjFourLogged,
  homeObjFiveLogged,
  homeObjSixLogged,
} from "./InfoSection/Data";

function Home(props) {
  const loggedIn = props.loggedIn;

  return (
    <React.Fragment>
      <>
        <NavigationBar loggedIn={props.loggedIn} />
        <Hero loggedIn={props.loggedIn} />
        {loggedIn ? (
          <>
            <Info {...homeObjOneLogged} />
            <Info {...homeObjTwoLogged} />
            <Info {...homeObjThreeLogged} />
            <Info {...homeObjFourLogged} />
            <Info {...homeObjFiveLogged} />
            <Info {...homeObjSixLogged} />
          </>
        ) : (
          <>
            <Info {...homeObjOne} />
            <Info {...homeObjTwo} />
            <Info {...homeObjThree} />
            <Info {...homeObjFour} />
            <Info {...homeObjFive} />
            <Info {...homeObjSix} />
          </>
        )}
        <Footer />
      </>
    </React.Fragment>
  );
}

export default Home;
