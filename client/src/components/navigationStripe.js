import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import axios from "axios";

const Styles = styled.div`
  .navbar {
    background: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 100%;

    @media screen and (max-width: 960px) {
      transition: 0.8s all ease;
    }
  }

  .nav {
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
  }

  .navbar-hamburger {
    color: purple !important;
  }

  .navbar-toggler {
    background: linear-gradient(to left, #ab68ca, #de67a3) #de67a3;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #de67a3;
    }
  }

  .navbar-nav .nav-link {
    color: #fff;
    display: flex;
    opacity: 0.8
    align-items: center;
    text-decoration: none;
    font-size: 1.3rem;
    margin-left: 35px;
    margin-right: 35px;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    text-decoration: none !important;

    &:active {
      border-bottom: 3px solid #01bf71;
    }

    &:hover {
      opacity: 0.6;
      color: #fff;
    }

    @media screen and (max-width: 1060px) {
      margin-left: 5px;
      margin-right: 5px;
    }
  }

  .navbar-brand {
    color: #fff;
    opacity: 0.8;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 2.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none !important;
    &:hover {
      opacity: 0.6;
      color: #fff;
    }
    @media screen and (max-width: 1060px) {
      font-size: 2rem;
    }
  }

  .sign-up {
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
    font-size: large;
    color: #333333;
    &:hover {
      color: #f5f5f7 !important;
    }
  }

  .log-in-special {
    color: #000 !important;
    text-decoration: none !important;
    @media screen and (max-width: 1010px) {
      transition: all 0.2s ease-in-out;
      color: #de67a3 !important;
      font-weight: bold;
      text-decoration: none !important;
      font-size: 130%;
    }
  }

  

  .log-out {
    border-radius: 7px;
    background: linear-gradient(to left, #ab68ca, #de67a3);
    white-space: nowrap;
    padding: 10px 7px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none !important;


    &:hover {
      transition: all 0.2s ease-in-out;
      background: #fff;
      color: #000;
    }

    @media screen and (max-width: 1010px) {
      transition: all 0.2s ease-in-out;
      background: black !important;
      margin: 0;
      padding: 0;
    }
  }

  .fonts {
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  }
`;

function NavigationBar(props) {
  const loggedIn = props.loggedIn;

  function logOut(event) {
    console.log("logging out");
    axios
      .post("/logout")
      .then((response) => {
        console.log(response.data);
        if (response.status === 200) {
          this.props.updateUser({
            loggedIn: false,
            username: null,
          });
        }
      })
      .catch((error) => {
        console.log("Logout error");
      });
  }

  return (
    <Styles>
      <Navbar expand="lg">
        <Navbar.Brand href="http://net-rocket.herokuapp.com">
          Rocket Apps
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Item className="fonts">
              <Nav.Link href="/checkout">Stripe</Nav.Link>
            </Nav.Item>
            <Nav.Item className="fonts">
              <Nav.Link href="/maps">Maps</Nav.Link>
            </Nav.Item>
            <Nav.Item className="fonts">
              <Nav.Link href="/chess">Chess</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  );
}

export default NavigationBar;
