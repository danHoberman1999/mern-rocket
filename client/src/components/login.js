import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import login from "../assets/login.gif";
import styled from "styled-components";
import axios from "axios";
import NavigationBar from "./navigationBar";
import { Redirect } from "react-router-dom";
import Recaptcha from "react-recaptcha";

const Styles = styled.div`
  .form-body {
    margin: 50px 250px 150px 250px;
    border-radius: 8px;
    background-color: white;
    padding: 15px;

    @media screen and (max-width: 960px) {
      margin: 0 0 0 0;
    }
  }

  .username-input,
  .password-input {
    text-align: center;
    display: block;
    margin: 0 auto 1em auto;
    width: 70%; /*280px;*/
    border: 1px solid #818181;
    border-radius: 8px;
    padding: 5px;
  }

  .username-control,
  .password-control {
    text-align: center;
    display: block;
  }

  .username-label,
  .password-label {
    text-align: center;
    display: block;
    font-size: 20px;
  }

  .custom-btn {
    text-align: center;
    font-size: large;
    display: block;
    margin: 0 auto 2em auto;
    width: 70%;
    height: 45px;
    border: 1px solid #818181;
    border-radius: 8px;
    padding: 5px;
    color: #fff;
    font-weight: 800;
    background: linear-gradient(to left, #ab68ca, #de67a3);
    margin-top: 20px;
    cursor: pointer;
    border: none;
    border-radius: 20px;
    &:hover {
      opacity: 0.7;
    }
  }

  .circle-img {
    border-radius: 50%;
    border: 7px solid #fff;
    width: 120px;
    height: 120px;
    margin: auto;
    display: block;
  }

  .text-intro {
    display: block;
    text-align: center;
    font-size: 60px;
  }

  .privacy {
    display: block;
    text-align: center;
  }

  .change-screen {
    color: #2f4f4f;
    font-size: 20px;
    text-decoration: none;
    &:hover {
      color: #696969;
      cursor: pointer;
    }
  }

  .remove-underline {
    text-decoration: none;
    &:hover {
      color: #1e90ff;
      cursor: pointer;
    }
  }

  .error {
    color: red;
    margin-top: 5px;
  }

  ul {
    display: inline-block !important;

    @media screen and (max-width: 960px) {
      display: inline-block !important;
      margin: 0;
      padding: 0;
    }
  }
  ul li {
    list-style: none;
    @media screen and (max-width: 960px) {
      display: inline-block !important;
      margin: 0;
      padding: 0;
    }
  }

  li {
    display: inline-block !important;
    margin: auto;
    @media screen and (max-width: 960px) {
      display: inline-block;
      margin: 0;
      padding: 0;
    }
  }

  .li1 {
    margin-right: 10rem;
    @media screen and (max-width: 960px) {
      margin: 0;
    }
  }

  .li2 {
    margin-left: 10rem;
    @media screen and (max-width: 960px) {
      margin: 0;
    }
  }
  ul li a {
    display: inline-block;
    position: relative;
    width: 100px;
    height: 100px;
    line-height: 100px;
    font-size: 40px;
    text-align: center;
    text-decoration: none;
    color: #404040;
    margin: 0 30px;
    transition: 0.5s;
    @media screen and (max-width: 965px) {
      display: inline-block;
      margin: 22px;
      margin-top: 0px;
    }
  }
  ul li a span {
    position: absolute;
    transition: transform 0.5s;
  }
  ul li a span:nth-child(1),
  ul li a span:nth-child(3) {
    width: 100%;
    height: 3px;
    background: #404040;
  }
  ul li a span:nth-child(1) {
    top: 0;
    left: 0;
    transform-origin: right;
  }
  ul li a:hover span:nth-child(1) {
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.5s;
  }

  ul li a span:nth-child(3) {
    bottom: 0;
    left: 0;
    transform-origin: left;
  }
  ul li a:hover span:nth-child(3) {
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.5s;
  }

  ul li a span:nth-child(2),
  ul li a span:nth-child(4) {
    width: 3px;
    height: 100%;
    background: #404040;
  }
  ul li a span:nth-child(2) {
    top: 0;
    left: 0;
    transform: scale(0);
    transform-origin: bottom;
  }
  ul li a:hover span:nth-child(2) {
    transform: scale(1);
    transform-origin: top;
    transition: transform 0.5s;
  }
  ul li a span:nth-child(4) {
    top: 0;
    right: 0;
    transform: scale(0);
    transform-origin: top;
  }
  ul li a:hover span:nth-child(4) {
    transform: scale(1);
    transform-origin: bottom;
    transition: transform 0.5s;
  }

  .facebook:hover {
    color: #3b5998;
  }
  .facebook:hover span {
    background: #3b5998;
  }
  .google1:hover {
    color: #dd4b39;
  }
  .google1:hover span {
    background: #dd4b39;
  }
  ul li a:hover:nth-child(3) {
    color: #c32aa3;
  }
  ul li a:hover:nth-child(4) {
    color: #dd4b39;
  }
`;

function LogIn(props) {
  var callback = function () {
    console.log("Done!!!!");
  };

  // specifying verify callback function
  var verifyCallback = function (response) {
    if (response) {
      setCaptcha(true);
    }
  };

  const [captcha, setCaptcha] = useState(false);

  const [redirectTo, setRedirectTo] = useState(null);

  const [error, setError] = useState("");

  const [user, setInput] = useState({
    username: "",
    password: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setInput(function (prevInput) {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  function handleClick(event) {
    if (!captcha) {
      setError("must fill out reCaptcha");
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      console.log("hello");
      axios
        .post("/login", {
          username: user.username,
          password: user.password,
        })
        .then((response) => {
          console.log("login response: ");
          console.log(response);
          if (response.status === 200) {
            console.log("logged in");
            setRedirectTo("/");
          }
        })
        .catch((error) => {
          console.log("login error: ");
          console.log(error);
          setError("Username or Password incorrect");
          event.preventDefault();
          event.stopPropagation();
        });
    }
  }

  if (redirectTo) {
    return <Redirect to={{ pathname: redirectTo }} />;
  } else {
    return (
      <Styles>
        <NavigationBar loggedIn={props.loggedIn} />
        <Form className="form-body">
          <h1 className="text-intro">Log In</h1>
          <img className="circle-img" src={login} alt="icons8" />
          <a className="change-screen" href="/sign-up">
            Don't have an account, click here
          </a>
          <h3 className="error">{error}</h3>
          <Form.Group
            className="username-control"
            controlId="formBasicUsername"
          >
            <Form.Label className="username-label">Username</Form.Label>
            <Form.Control
              onChange={handleChange}
              value={user.username}
              className="username-input"
              type="username"
              name="username"
              placeholder="Enter username"
            />
          </Form.Group>
          <Form.Group
            className="password-control"
            controlId="formBasicPassword"
          >
            <Form.Label className="password-label">Password</Form.Label>
            <Form.Control
              onChange={handleChange}
              value={user.password}
              className="password-input"
              type="password"
              name="password"
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group className="privacy">
            <a className="remove-underline" href="/privacy-policy">
              When registered you agreed to the privacy policy and site terms
            </a>
          </Form.Group>
          <Recaptcha
            className="google-recaptcha"
            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
            render="explicit"
            verifyCallback={verifyCallback}
            onloadCallback={callback}
          />
          <Button
            onClick={handleClick}
            className="custom-btn"
            variant="primary"
            type="submit"
          >
            Log In
          </Button>

          <ul>
            <li className="li1">
              <a class="facebook" href="auth/facebook">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <i class="fa fa-facebook" aria-hidden="true"></i>
              </a>
            </li>
            <li className="li2">
              <a class="google1" href="/auth/google">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <i class="fa fa-google-plus" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </Form>
      </Styles>
    );
  }
}

export default LogIn;
