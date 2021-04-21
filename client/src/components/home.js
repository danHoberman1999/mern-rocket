import React from "react";
import NavigationBar from "./navigationBar";
import Terminal from "react-animated-term";
import { Container } from "react-bootstrap";
import "react-animated-term/dist/react-animated-term.css";
import styled from "styled-components";

const Styles = styled.div`

  .container {
    margin-top: 35px;
    margin-bottom: 35px;
  }

  body{
      overflow: hidden !important;
  }
`;

function Home(props) {
  const spinner = ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"];

  const spinnerFrames = ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"];
  const spinnerLines = [
    {
      text: "node example.js",
      cmd: true,
    },
    {
      text: "",
      cmd: false,
      repeat: true,
      repeatCount: 2,
      frames: spinnerFrames.map(function (spinner) {
        return {
          text: spinner + " Loading app",
          delay: 80,
        };
      }),
      finalFrame: "✔ Loaded app",
    },
    {
      text: "",
      cmd: true,
    },
  ];
  const termLines = [
    {
      text: "yarn",
      cmd: true,
    },
    {
      text: "yarn install v1.6.0",
      cmd: false,
    },
    {
      text: "[1/4] 🔍  Resolving packages...",
      cmd: false,
    },
    {
      text: "[2/4] 🚚  Fetching packages...",
      cmd: false,
    },
    {
      text: "[3/4] 🔗  Linking dependencies...",
      cmd: false,
      frames: [
        {
          text: "[------------------------------------------------] 0/1000",
          delay: 200,
        },
        {
          text: "[#######-----------------------------------------] 100/1000",
          delay: 2000,
        },
        {
          text: "[###########################---------------------] 500/1000",
          delay: 200,
        },
        {
          text: "[################################################] 1000/1000",
          delay: 400,
        },
      ],
    },
    {
      text: "[4/4] 📃  Building fresh packages...",
      cmd: false,
      frames: [
        {
          text: "[------------------------------------------------] 0/1000",
          delay: 200,
        },
        {
          text: "[#######-----------------------------------------] 100/1000",
          delay: 300,
        },
        {
          text: "[###########################---------------------] 500/1000",
          delay: 1200,
        },
        {
          text: "[################################################] 1000/1000",
          delay: 400,
        },
      ],
    },
    {
      text: "✨  Done in 4.91s.",
      cmd: false,
    },
    {
      text: "Mern Net Rocket",
      cmd: true,
      delay: 80,
    },
    {
      text:
        "This website is a react template to use in the future. It took about 100 hours of coding design to create with help.",
      cmd: true,
      delay: 80,
    },
    {
      text:
        "Created by Daniel Hoberman with help from Karsen Hansen, Evan Conrad, and stack overflow",
      cmd: true,
      delay: 80,
    },
    {
      text: "Mern Net Rocket",
      cmd: true,
      delay: 80,
    },
    {
      text:
        "This website is a react template to use in the future. It took about 100 hours of coding design to create with help.",
      cmd: true,
      delay: 80,
    },
    {
      text:
        "Created by Daniel Hoberman with help from Karsen Hansen, Evan Conrad, and stack overflow",
      cmd: true,
      delay: 80,
    },
    {
      text: "✔ Loaded app",
      cmd: false,
      repeat: true,
      repeatCount: 5,
      frames: spinner.map(function (spinner) {
        return {
          text: spinner + " Loading app",
          delay: 40,
        };
      }),
    },
    {
      text: "",
      cmd: true,
    },
  ];

  return (
    <Styles>
      <React.Fragment>
        <NavigationBar loggedIn={props.loggedIn} />

        <Container className="container">
          <Terminal lines={termLines} interval={80} height={450} />
        </Container>
      </React.Fragment>
    </Styles>
  );
}

export default Home;
