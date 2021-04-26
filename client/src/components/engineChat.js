import React from "react";
import NavigationBar from "./navigationBar";
import "react-animated-term/dist/react-animated-term.css";
import styled from "styled-components";
import { ChatEngine } from "react-chat-engine";

const Styles = styled.div`
  .container {
    margin-top: 35px;
    margin-bottom: 35px;
  }
`;

function Engine(props) {
  return (
    <Styles>
      <React.Fragment>
        <NavigationBar loggedIn={props.loggedIn} />
        <ChatEngine
          height="100vh"
          userName="dhoberman"
          userSecret="Sunny06031999?"
          projectID="c8bb63dd-2d91-4884-9b72-8a94e002284b"
        />
      </React.Fragment>
    </Styles>
  );
}

export default Engine;
