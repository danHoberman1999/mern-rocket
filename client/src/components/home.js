import React from "react";
import NavigationBar from "./navigationBar";
import Hero from "./HeroSection/index";
import Info from "./InfoSection/index";
import Footer from "./Footer/index";
import { homeObjOne, homeObjThree, homeObjTwo } from "./InfoSection/Data";

function Home(props) {
  return (
    <React.Fragment>
      <>
        <NavigationBar loggedIn={props.loggedIn} />
        <Hero />
        <Info {...homeObjOne} />
        <Info {...homeObjTwo} />
        <Info {...homeObjThree} />
        <Footer />
      </>
    </React.Fragment>
  );
}

export default Home;
