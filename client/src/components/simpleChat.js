import React from "react";
import NavigationBar from "./navigationBar";
import "react-animated-term/dist/react-animated-term.css";
import styled from "styled-components";

const Styles = styled.div`
  .container {
    margin-top: 35px;
    margin-bottom: 35px;
  }
`;

function Simple(props) {
  return (
    <Styles>
      <React.Fragment>
        <NavigationBar loggedIn={props.loggedIn} />
        <iframe
          src="https://deadsimplechat.com/tnYPjswQV"
          width="100%"
          height="600px"
        ></iframe>
      </React.Fragment>
    </Styles>
  );
}

export default Simple;
