import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import login from '../assets/login.gif';
import styled from 'styled-components';
import axios from 'axios';
import NavigationBar from './navigationBar';
import { Redirect } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import Recaptcha from 'react-recaptcha';



const Styles = styled.div`
  .form-body{
      margin: 50px 250px 150px 250px;
      border-radius: 8px;
      background-color: white;
      padding: 15px;
  }

  .username-input, .password-input{
    text-align:center;
    display: block;
    margin: 0 auto 1em auto;
    width: 70%;  /*280px;*/
    border: 1px solid #818181;
    border-radius: 8px;
    padding: 5px;
  }

  .username-control, .password-control{
      text-align: center;
      display: block;
  }

  .username-label, .password-label{
      text-align: center;
      display: block;
      font-size: 20px;
  }

  .custom-btn{
      text-align:center;
    display: block;
    margin: 0 auto 2em auto;
    width: 70%;
    height: 45px;
    border: 1px solid #818181;
    border-radius: 8px;
    padding: 5px;
    color: black;
    background-color: rgba(185,89,188,1);
  }

  .google-button, .facebook-button, .google-recaptcha{
    text-align:center !important;
    display: block !important;
    margin: 0 auto 2em auto !important;
    width: 30% !important;
  }

  .circle-img{
       border-radius: 50%;
        border: 7px solid #fff;
        width: 120px;
        height: 120px;
        margin: auto;
        display: block;
  }

  .text-intro{
      display:block;
      text-align:center;
      font-size: 60px;
  }

  .privacy{
      display:block;
      text-align:center;
  }

  .change-screen{
      color: #2F4F4F;
      font-size: 20px;
      text-decoration: none;
      &:hover{
          color: #696969;
          cursor: pointer;
      }
  }

  .remove-underline{
      text-decoration: none;
      &:hover{
          color: #1E90FF;
          cursor: pointer;
      }
  }

  .error{
      color: red;
      margin-top: 5px;
  }

`;


function LogIn(props) {

    var callback = function () {
        console.log('Done!!!!');
    };

    // specifying verify callback function
    var verifyCallback = function (response) {
        if (response) {
            setCaptcha(true);
        }
    };

    const responseGoogle = (response) => {
        console.log(response);
    }

    const responseFacebook = (response) => {
        console.log(response);
    }

    const [captcha, setCaptcha] = useState(false)



    const [redirectTo, setRedirectTo] = useState(null)

    const [error, setError] = useState('')


    const [user, setInput] = useState({
        username: '',
        password: ''
    })

    function handleChange(event) {

        const { name, value } = event.target;

        setInput(function (prevInput) {
            return {
                ...prevInput,
                [name]: value
            }
        })
    }

    function handleClick(event) {

        if (!captcha) {
            setError('must fill out reCaptcha')
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.preventDefault();
            console.log('hello')
            axios.post('/login', {
                username: user.username,
                password: user.password
            })
                .then(response => {
                    console.log('login response: ')
                    console.log(response)
                    if (response.status === 200) {
                        console.log('logged in');
                        setRedirectTo('/')
                    }
                }).catch(error => {
                    console.log('login error: ')
                    console.log(error);
                    setError('Username or Password incorrect')
                    event.preventDefault();
                    event.stopPropagation();

                })
        }
    }

    if (redirectTo) {
        return <Redirect to={{ pathname: redirectTo }} />
    } else {
        return (

            <Styles >
                <NavigationBar loggedIn={props.loggedIn} />
                <Form className="form-body">
                    <h1 className="text-intro">Log In</h1>
                    <img className="circle-img" src={login} alt="icons8" />
                    <a className="change-screen" href="/sign-up">Don't have an account, click here</a>
                    <h3 className="error">{error}</h3>
                    <Form.Group className="username-control" controlId="formBasicUsername">
                        <Form.Label className="username-label">Username</Form.Label>
                        <Form.Control onChange={handleChange} value={user.username} className="username-input" type="username" name="username" placeholder="Enter username" />
                    </Form.Group>

                    <Form.Group className="password-control" controlId="formBasicPassword">
                        <Form.Label className="password-label">Password</Form.Label>
                        <Form.Control onChange={handleChange} value={user.password} className="password-input" type="password" name="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="privacy">
                        <a className="remove-underline" href="/privacy-policy">When registered you agreed to the privacy policy and site terms</a>
                    </Form.Group>
                    <Recaptcha className="google-recaptcha"
                        sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                        render="explicit"
                        verifyCallback={verifyCallback}
                        onloadCallback={callback}
                    />
                    <Button onClick={handleClick} className="custom-btn" variant="primary" type="submit">
                        Log In
                </Button>
                    <GoogleLogin className="google-button"
                        clientId="133162901525-dn1t48orgcke7sioi415tp0jj6l7gnoj.apps.googleusercontent.com"
                        buttonText="Login"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                        isSignedIn={true}

                    />

                    <FacebookLogin className="facebook-button"
                        appId="205646574320139"
                        autoLoad={false}
                        callback={responseFacebook}
                    />


                </Form>


            </Styles>
        )
    }
};


export default LogIn;