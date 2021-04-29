import React, { useEffect, useState } from "react";
import NavigationBar from "./navigationBar";
import { Container, Col, Form } from "react-bootstrap";
import Layout from "./layout";
import userProfile from "../assets/user.gif";
import emblem from "../assets/fire.gif";
import camera from "../assets/camera.png";
import editImage from "../assets/editImage.png";
import { Redirect } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

const Styles = styled.div`
  .circle-img {
    border-radius: 50%;
    border: 7px solid #fff;
    width: 150px;
    height: 150px;
    margin: auto;
    display: block;
  }

  $avatar-size: 32px;
  $body-background: #353535;

  @font-face {
    font-family: "ubuntu";
    font-style: italic;
    font-weight: 300;

    src: local("Lato Light Italic"), local("Lato-LightItalic"),
      url(https://fonts.gstatic.com/s/ubuntucondensed/v8/u-4k0rCzjgs5J7oXnJcM_0kACGMtT-Dfqw.woff2)
        format("woff2");
  }

  h1 {
    overflow: hidden;
  }

  .wrapper {
    overflow: hidden;
  }

  .wrapper {
    text-align: center;
    h1 {
      color: #fff;
      font-size: 92px;
      font-family: "ubuntu";
      text-transform: uppercase;
      font-weight: 700;

      font-family: "Josefin Sans", sans-serif;
      background: linear-gradient(
        to right,
        rgba(185, 89, 188, 1) 10%,
        rgba(73, 89, 200, 1) 70%
      );
      background-size: auto auto;
      background-clip: border-box;
      background-size: 200% auto;
      color: #fff;
      background-clip: text;
      text-fill-color: transparent;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: textclip 100s linear infinite;
      display: inline-block;

      @media screen and (max-width: 960px) {
        font-size: 36px;
      }
    }
  }

  @keyframes textclip {
    to {
      background-position: 200% center;
    }
  }

  .container {
    background-color: white;
    margin-top: 50px;
    border-radius: 15px 15px 15px 15px;
  }

  .button {
    border-radius: 50%;
    border: none;
    width: 80px;
    height: 80px;
    position: relative;
    float: right;
    margin-bottom: 20px;
    margin-right: 10px;
    cursor: pointer;
    background-color: #66a5ad;
    top: -40px;
    transition: transform 0.7s ease-in-out;
    &:hover {
      transform: rotate(40deg);
    }

    @media screen and (max-width: 960px) {
      display: none;
    }
  }

  .button-2 {
    border-radius: 50%;
    border: none;
    width: 80px;
    height: 80px;
    position: relative;
    float: right;
    margin-bottom: 20px;
    margin-right: 10px;
    cursor: pointer;
    background-color: #008b8b;
    font-weight: 600;
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
    color: white;
    top: -40px;
    transition: transform 0.7s ease-in-out;
    &:hover {
      transform: rotate(40deg);
    }

    @media screen and (max-width: 960px) {
      display: none;
    }
  }

  .button-3 {
    border-radius: 50%;
    border: 2px solid black;
    width: 80px;
    height: 80px;
    position: relative;
    float: left;
    margin-bottom: 20px;
    margin-left: 200px;
    cursor: pointer;
    background-color: white;
    color: blue;
    top: -40px;
    transition: transform 0.7s ease-in-out;
    &:hover {
      transform: rotate(40deg);
    }

    @media screen and (max-width: 960px) {
      display: none;
    }
  }

  .button-4 {
    border-radius: 10px;
    border: 4px solid red;
    width: 200px;
    height: 80px;
    cursor: pointer;
    background-color: white;
    color: red;

    @media screen and (max-width: 960px) {
      display: none;
    }
  }

  .bottom-group {
    margin-bottom: 60px;
  }

  .form {
    padding: 5px;
  }

  .form-row-1 {
    padding: 2px;
  }

  .form-control {
    background-color: #f5f5f5;
    border-radius: 15px;
    font-weight: 700;
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  }

  .form-label {
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
    font-weight: 600;
  }

  .emblem {
    width: 40px;
    height: 40px;
    margin: auto;
    display: inline;
  }

  .edit-info {
    margin-right: auto;
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
    color: #ff7f50;
  }

  .edit-control {
    margin-left: auto;
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
    color: black;

    @media screen and (max-width: 960px) {
      display: none;
    }
  }
`;

function MyProfile(props) {
  function submit(event) {
    event.preventDefault();
    event.stopPropagation();
    confirmAlert({
      title: "Confirm to submit",
      message: "Are you sure to do this.",
      buttons: [
        {
          label: "Yes",
          onClick: function () {
            deleteAccount();
          },
        },
        {
          label: "No",
          onClick: () => alert("Click No"),
        },
      ],
    });
    setRedirectTo("/");
  }

  const [edit, setEdit] = useState(false);

  const [redirectTo, setRedirectTo] = useState(null);

  const [image, setImage] = useState("");
  const [completed, setCompleted] = useState(false);

  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    username: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    email: "",
  });

  const [updateUser, setUpdateUser] = useState({
    firstname: "...",
    lastname: "...",
    phone: "...",
    address: "...",
    city: "...",
    state: "...",
    zip: "...",
    email: "...",
  });

  function handleClick(event) {
    setEdit(true);
  }

  // useEffect(() => {
  //   fetch("/userInfo")
  //     .then((res) => {
  //       if (res.ok) {
  //         return res.json();
  //       }
  //     })
  //     .then((jsonRes) => setUser(jsonRes));
  // });

  // useEffect(() => {
  //   fetch("/completed")
  //     .then((res) => {
  //       if (res.ok) {
  //         return res.json();
  //       }
  //     })
  //     .then((response) => setCompleted(response[0].completed));
  // });

  // useEffect(() => {
  //   axios
  //     .get("/userPhoto")
  //     .then((response) => [setImage(response.data[0].photo)])

  //     .catch((error) => console.log(error));
  // }, []);

  // useEffect(() => {
  //   fetch("/userPhoto")
  //     .then((res) => {
  //       if (res.ok) {
  //         return res.json();
  //       }
  //     })
  //     .then((response) => [setImage(response.data[0].photo)]);
  // });

  function deleteAccount() {
    console.log("starting deletion process");
    axios
      .post("/deleteAccount")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log("Logout error");
      });
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setUpdateUser(function (prevInput) {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  const handleClick2 = (event) => {
    const newInfo = {
      firstname: updateUser.firstname,
      lastname: updateUser.lastname,
      phone: updateUser.phone,
      address: updateUser.address,
      city: updateUser.city,
      state: updateUser.state,
      zip: updateUser.zip,
      email: updateUser.email,
    };
    axios
      .post("/changeInfo", newInfo)
      .then((response) => {
        console.log(response);
        console.log("successful change");
      })
      .catch((error) => {
        console.log("System error: " + error);
        event.preventDefault();
        event.stopPropagation();
      });
    setRedirectTo("/");
  };

  console.log(completed);
  console.log(image);

  if (redirectTo) {
    return <Redirect to={{ pathname: redirectTo }} />;
  } else {
    return (
      <Styles>
        <React.Fragment>
          <NavigationBar loggedIn={props.loggedIn} />
          <Container className="container">
            <Layout className="layout">
              <Form className="form">
                <div className="container">
                  <button className="button-4" onClick={submit}>
                    Delete Account
                  </button>
                </div>

                {completed ? (
                  <img
                    className="circle-img"
                    src={`/uploads/${image}`}
                    alt="..."
                  />
                ) : (
                  <img className="circle-img" src={userProfile} alt="icons8" />
                )}

                {completed ? (
                  <img className="emblem" src={emblem} alt="pngTree" />
                ) : (
                  <h5>Finish Profile for emblem</h5>
                )}

                <div className="wrapper">
                  <h1 className="username">{props.updateUser}</h1>
                </div>
                <Form.Row className="form-row-1">
                  <Form.Group as={Col} md="4">
                    <Form.Label className="form-label">First name:</Form.Label>
                    <Form.Control
                      className="form-control"
                      onChange={handleChange}
                      name="firstname"
                      type="text"
                      value={edit ? updateUser.firstname : user.firstname}
                    />
                  </Form.Group>
                  <Form.Group as={Col} md="4">
                    <Form.Label>Last name:</Form.Label>
                    <Form.Control
                      onChange={handleChange}
                      name="lastname"
                      type="text"
                      value={edit ? updateUser.lastname : user.lastname}
                    />
                  </Form.Group>
                  <Form.Group as={Col} md="4">
                    <Form.Label>Phone:</Form.Label>
                    <Form.Control
                      onChange={handleChange}
                      name="phone"
                      type="text"
                      value={edit ? updateUser.phone : user.phone}
                    />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} md="4">
                    <Form.Label>Address:</Form.Label>
                    <Form.Control
                      onChange={handleChange}
                      name="address"
                      type="text"
                      value={edit ? updateUser.address : user.address}
                    />
                  </Form.Group>
                  <Form.Group as={Col} md="4">
                    <Form.Label>City:</Form.Label>
                    <Form.Control
                      onChange={handleChange}
                      name="city"
                      type="text"
                      value={edit ? updateUser.city : user.city}
                    />
                  </Form.Group>
                  <Form.Group as={Col} md="4">
                    <Form.Label>State:</Form.Label>
                    <Form.Control
                      onChange={handleChange}
                      name="state"
                      type="text"
                      value={edit ? updateUser.state : user.state}
                    />
                  </Form.Group>
                </Form.Row>
                <Form.Row className="bottom-row">
                  <Form.Group as={Col} md="6" className="bottom-group">
                    <Form.Label>Zip:</Form.Label>
                    <Form.Control
                      onChange={handleChange}
                      name="zip"
                      type="text"
                      value={edit ? updateUser.zip : user.zip}
                    />
                  </Form.Group>
                  <Form.Group as={Col} md="6">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control
                      onChange={handleChange}
                      name="email"
                      type="text"
                      value={edit ? updateUser.email : user.email}
                    />
                  </Form.Group>
                </Form.Row>
                {completed ? null : (
                  <h3 className="edit-control">Complete profile: </h3>
                )}
                {edit ? (
                  <button className="button-2" onClick={handleClick2}>
                    Submit
                  </button>
                ) : (
                  <div>
                    <a href="#" onClick={handleClick}>
                      <img className="button" src={editImage}></img>
                    </a>
                  </div>
                )}
                <a href="/profile-upload">
                  <img className="button-3" src={camera}></img>
                </a>
              </Form>
            </Layout>
          </Container>
        </React.Fragment>
      </Styles>
    );
  }
}

export default MyProfile;
