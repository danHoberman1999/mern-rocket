import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import axios from 'axios';
import login from '../assets/login.png';

const Styles = styled.div`
  .navbar {
    background-color: #333333;
  }
  .navbar-nav .nav-link {
    color: #d8d8d8;
    &:hover {
      color: grey;
    }
    margin: 0px 8px;
  }

  .navbar-brand{
      color: #f5f5f7;
      font-weight: 400;
      font-size: 25px;
      margin: auto;
    &:hover{
        color: #f5f5f7 !important;
    }
  }
 
  .sign-up{
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
    font-size: large;
    color: #333333;
    &:hover{
        color: #f5f5f7 !important;
    }
  }

  .log-in{
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
    font-size: large;
    color: #f5f5f7
    &:hover{
        color: #f5f5f7 !important;
    }
    
  }

  .log-out{
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
    font-size: large;
    color: #f5f5f7
    &:hover{
        color: #f5f5f7 !important;
    }
  }

  .fonts{
      font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  }

`;


function NavigationBar(props) {
    const loggedIn = props.loggedIn;

    function logOut(event) {
        console.log('logging out')
        axios.post('/logout').then(response => {
            console.log(response.data)
            if (response.status === 200) {
                this.props.updateUser({
                    loggedIn: false,
                    username: null
                })
            }
        }).catch(error => {
            console.log('Logout error')
        })
    }

    return (
        <Styles>
            {loggedIn ? (
                <Navbar expand="lg">
                    <Navbar.Brand href="#home">Mern-Template</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Item className="fonts"><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                            <Nav.Item className="fonts"><Nav.Link href="/my-profile">My Profile</Nav.Link></Nav.Item>
                            <Nav.Item className="fonts"><Nav.Link href="/users">Users</Nav.Link></Nav.Item>
                            <Nav.Item className="fonts"><Nav.Link href="/payment">Donation</Nav.Link></Nav.Item>

                        </Nav>
                        <Nav className="ml-auto">
                            <Nav.Item className='log-out'><Nav.Link href="/" onClick={logOut}>Sign out</Nav.Link></Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            ) : (
                <Navbar expand="lg">
                    <Navbar.Brand href="#home">Mern-Template</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Item className="fonts"><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                            <Nav.Item className="fonts"><Nav.Link href="/privacy-policy">Privacy Policy</Nav.Link></Nav.Item>
                            <Nav.Item className="fonts"><Nav.Link href="/users">Users</Nav.Link></Nav.Item>
                        </Nav>

                        <Nav className="ml-auto">
                            <Nav.Item className="sign-up"><Nav.Link href="/sign-up">Sign-Up</Nav.Link></Nav.Item>
                            <Nav.Item className="log-in"><Nav.Link href="/log-in">Log-In</Nav.Link></Nav.Item>

                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            )}
        </Styles>
    )
}


export default NavigationBar;