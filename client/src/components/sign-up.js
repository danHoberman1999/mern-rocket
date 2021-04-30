import React, { useState } from "react";
import { Button, Col, Form, InputGroup } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import signup from "../assets/signup.gif";
import styled from "styled-components";
import NavigationBar from "./navigationBar";
import axios from "axios";

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

  .privacy,
  .privacy-checkbox {
    display: block;
    text-align: center;
  }

  .form-row {
    margin: auto;
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

  .errors {
    color: red;
    margin-top: 5px;
  }
`;

function SignUp(props) {
  const [redirectTo, setRedirectTo] = useState(null);

  const [errorType, setErrorType] = useState("");

  const [address, setAddress] = useState(true);

  const [completed, setCompleted] = useState(true);

  function handleAddress() {
    setAddress(!address);
  }

  const [input, setInput] = useState({
    firstname: "",
    lastname: "",
    username: "",
    birth: "",
    gender: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    addressShip: "",
    cityShip: "",
    stateShip: "",
    zipShip: "",
    skill1: "",
    skill2: "",
    skill3: "",
    skiing: "",
    react: "",
    password: "",
    passwordConfirm: "",
  });

  const [skiing, setSkiing] = useState(false);

  function handleSkiing() {
    setSkiing(!skiing);
    if (skiing) {
      input.skiing = "Likes Skiing";
    } else {
      input.skiing = "Doesn't like skiing";
    }
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setInput(function (prevInput) {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  function validatePhone(phone) {
    const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return re.test(phone);
  }

  function validatePasswordLength(password) {
    if (password.length < 8) {
      return false;
    }
  }

  function validatePasswordLetter(password) {
    if (password.search(/[a-z]/i) < 0) {
      return false;
    }
  }

  function validatePasswordDigit(password) {
    if (password.search(/[0-9]/) < 0) {
      return false;
    }
  }

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else if (!validateEmail(input.email)) {
      event.preventDefault();
      event.stopPropagation();
      setErrorType("Email must be correct");
    }
    // else if (!validatePasswordLength(input.password)) {
    // 	(form.checkValidity() === false)
    // 	event.preventDefault();
    // 	event.stopPropagation();
    // 	setErrorType('Password must be 8+ characters')

    // }
    // else if (!validatePasswordDigit(input.password)) {
    // 	(form.checkValidity() === false)
    // 	event.preventDefault();
    // 	event.stopPropagation();
    // 	setErrorType('Password must contain a digit')

    // }
    // else if (!validatePasswordLetter(input.password)) {
    // 	(form.checkValidity() === false)
    // 	event.preventDefault();
    // 	event.stopPropagation();
    // 	setErrorType('Password must contain a letter')
    // }
    else if (!validatePhone(input.phone)) {
      event.preventDefault();
      event.stopPropagation();
      console.log(input.phone);
      console.log("Phone Incorrect");
      setErrorType("Phone must be correct");
    } else if (input.password != input.passwordConfirm) {
      event.preventDefault();
      event.stopPropagation();
      setErrorType("Passwords must match");
    } else {
      if (input.addressShip == "") {
        input.addressShip = input.address;
        input.cityShip = input.city;
        input.stateShip = input.state;
        input.zipShip = input.zip;
      }

      if (input.skiing == "") {
        input.skiing = "No Answer";
        setCompleted(!completed);
      }
      event.preventDefault();

      const newUser = {
        firstname: input.firstname,
        lastname: input.lastname,
        username: input.username,
        birth: input.birth,
        gender: input.gender,
        phone: input.phone,
        address: input.address,
        city: input.city,
        state: input.state,
        zip: input.zip,
        addressShip: input.addressShip,
        cityShip: input.cityShip,
        stateShip: input.stateShip,
        zipShip: input.zipShip,
        skill1: input.skill1,
        skill2: input.skill2,
        skill3: input.skill3,
        skiing: input.skiing,
        react: input.react,
        email: input.email,
        password: input.password,
        completed: completed,
      };

      axios
        .post("/register", newUser)
        .then((response) => {
          console.log(response);
          if (!response.data.errmsg) {
            console.log(response.data.errmsg);
            console.log("successful signup");
            setRedirectTo("/log-in");
          } else {
            console.log("username already taken");
            event.preventDefault();
            event.stopPropagation();
            setErrorType("Username already taken");
          }
        })
        .catch((error) => {
          console.log("signup error: ");
          event.preventDefault();
          event.stopPropagation();
          setErrorType("System error");
          console.log(error);
        });
    }
    setValidated(true);
  };

  if (redirectTo) {
    return <Redirect to={{ pathname: redirectTo }} />;
  } else {
    return (
      <Styles>
        <NavigationBar loggedIn={props.loggedIn} />
        <Form
          className="form-body"
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
        >
          <h1 className="text-intro">Sign Up</h1>
          <img className="circle-img" src={signup} alt="avatar_img" />
          <a className="change-screen" href="/log-in">
            Have an account, click here
          </a>
          <p>if * on field= required</p>
          <h3 className="errors">{errorType}</h3>
          <Form.Row>
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>First name*</Form.Label>
              <Form.Control
                onChange={handleChange}
                value={input.firstname}
                name="firstname"
                required
                type="text"
                placeholder="First name"
                defaultValue="Mark"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Last name*</Form.Label>
              <Form.Control
                required
                onChange={handleChange}
                value={input.lastname}
                name="lastname"
                type="text"
                placeholder="Last name"
                defaultValue="Otto"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
              <Form.Label>Username*</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Prepend>
                  <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  onChange={handleChange}
                  value={input.username}
                  name="username"
                  type="text"
                  placeholder="Username"
                  aria-describedby="inputGroupPrepend"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please choose a username.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="6" controlId="validationCustom01">
              <Form.Label>Date of Birth*</Form.Label>
              <Form.Control
                type="date"
                name="birth"
                onChange={handleChange}
                value={input.birth}
                required
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustom02">
              <Form.Label>Gender*</Form.Label>
              <Form.Control
                as="select"
                defaultValue="Choose..."
                onChange={handleChange}
                value={input.gender}
                name="gender"
                required
              >
                <option>Choose...</option>
                <option>Male</option>
                <option>Female</option>
              </Form.Control>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="6" controlId="validationCustom01">
              <Form.Label>Phone number*</Form.Label>
              <Form.Control
                required
                onChange={handleChange}
                value={input.phone}
                name="phone"
                type="tel"
                placeholder="555-555-5555"
                defaultValue=""
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustom02">
              <Form.Label>Email*</Form.Label>
              <Form.Control
                required
                onChange={handleChange}
                value={input.email}
                name="email"
                type="email"
                placeholder="123@gmail.com"
                defaultValue=""
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          Primary
          <Form.Row>
            <Form.Group as={Col} md="3" controlId="validationCustom02">
              <Form.Label>Address*</Form.Label>
              <Form.Control
                required
                onChange={handleChange}
                value={input.address}
                name="address"
                type="text"
                placeholder="123 Main St"
                defaultValue=""
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom03">
              <Form.Label>City*</Form.Label>
              <Form.Control
                type="text"
                placeholder="City"
                onChange={handleChange}
                value={input.city}
                name="city"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom04">
              <Form.Label>State*</Form.Label>
              <Form.Control
                as="select"
                defaultValue="Choose..."
                onChange={handleChange}
                value={input.state}
                name="state"
                required
              >
                <option>Alabama</option>
                <option>Alaska</option>
                <option>Arizona</option>
                <option>Arkansas</option>
                <option>California</option>
                <option>Colorado</option>
                <option>Conneticut</option>
                <option>Delaware</option>
                <option>Florida</option>
                <option>Georgia</option>
              </Form.Control>
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom05">
              <Form.Label>Zip*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Zip"
                onChange={handleChange}
                value={input.zip}
                name="zip"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="12" controlId="validationCustom01">
              <Form.Label>Use primary address for shipping</Form.Label>
              <Form.Check
                defaultChecked={false}
                type="switch"
                id="address-switch"
                name="adress-switch"
                onChange={handleAddress}
              />
            </Form.Group>
          </Form.Row>
          Ship to
          <Form.Row>
            <Form.Group as={Col} md="3" controlId="validationCustom02">
              <Form.Label>Address*</Form.Label>
              {address ? (
                <Form.Control
                  required
                  onChange={handleChange}
                  value={input.addressShip}
                  name="addressShip"
                  type="text"
                  placeholder="123 Main St"
                  defaultValue=""
                />
              ) : (
                <Form.Control
                  disabled
                  onChange={handleChange}
                  value={input.address}
                  name="addressShip"
                  type="text"
                  placeholder="123 Main St"
                  defaultValue=""
                />
              )}
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom03">
              <Form.Label>City*</Form.Label>
              {address ? (
                <Form.Control
                  type="text"
                  placeholder="City"
                  onChange={handleChange}
                  value={input.cityShip}
                  name="cityShip"
                  required
                />
              ) : (
                <Form.Control
                  type="text"
                  placeholder="City"
                  value={input.city}
                  onChange={handleChange}
                  disabled
                />
              )}

              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom04">
              <Form.Label>State*</Form.Label>
              {address ? (
                <Form.Control
                  as="select"
                  defaultValue="Choose..."
                  onChange={handleChange}
                  value={input.stateShip}
                  name="stateShip"
                  required
                >
                  <option>Alabama</option>
                  <option>Alaska</option>
                  <option>Arizona</option>
                  <option>Arkansas</option>
                  <option>California</option>
                  <option>Colorado</option>
                  <option>Conneticut</option>
                  <option>Deleware</option>
                  <option>Florida</option>
                  <option>Georiga</option>
                </Form.Control>
              ) : (
                <Form.Control
                  as="select"
                  defaultValue="Choose..."
                  value={input.state}
                  onChange={handleChange}
                  name="stateShip"
                  disabled
                >
                  <option>Alabama</option>
                  <option>Alaska</option>
                  <option>Arizona</option>
                  <option>Arkansas</option>
                  <option>California</option>
                  <option>Colorado</option>
                  <option>Conneticut</option>
                  <option>Deleware</option>
                  <option>Florida</option>
                  <option>Georiga</option>
                </Form.Control>
              )}

              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom05">
              <Form.Label>Zip*</Form.Label>
              {address ? (
                <Form.Control
                  type="text"
                  placeholder="Zip"
                  onChange={handleChange}
                  value={input.zipShip}
                  name="zipShip"
                  required
                />
              ) : (
                <Form.Control
                  type="text"
                  placeholder="Zip"
                  onChange={handleChange}
                  value={input.zip}
                  name="zipShip"
                  disabled
                />
              )}
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <h5>Skills</h5>
          <Form.Row>
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Skill 1*</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                required
                onChange={handleChange}
                value={input.skill1}
                name="skill1"
                type="text"
                defaultValue=""
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Skill 2*</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                required
                onChange={handleChange}
                value={input.skill2}
                name="skill2"
                type="text"
                defaultValue=""
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Skill 3*</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                required
                onChange={handleChange}
                value={input.skill3}
                name="skill3"
                type="text"
                defaultValue=""
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="6">
              <Form.Label>Check if you like skiing</Form.Label>
              <Col sm={10}>
                <Form.Check
                  defaultChecked={false}
                  onChange={handleSkiing}
                  name="skiing"
                />
              </Col>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustom04">
              <Form.Label>Select if you like React*</Form.Label>
              <Form.Control
                as="select"
                defaultValue="Choose..."
                onChange={handleChange}
                value={input.react}
                name="react"
              >
                <option>Choose...</option>
                <option>I love it</option>
              </Form.Control>
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="6" controlId="validationCustom01">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                onChange={handleChange}
                value={input.password}
                name="password"
                type="password"
                placeholder=""
                defaultValue=""
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustom02">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                required
                onChange={handleChange}
                value={input.passwordConfirm}
                name="passwordConfirm"
                type="password"
                placeholder=""
                defaultValue=""
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Form.Group className="privacy">
            <a className="remove-underline" href="/privacy-policy">
              When registered you agreed to the privacy policy and site terms
            </a>
          </Form.Group>
          <Form.Group>
            <Form.Check
              required
              label="Agree to terms and conditions"
              feedback="You must agree before submitting."
            />
          </Form.Group>
          <Button className="custom-btn" type="submit">
            Sign Up
          </Button>
        </Form>
      </Styles>
    );
  }
}

export default SignUp;
