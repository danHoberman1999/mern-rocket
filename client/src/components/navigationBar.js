import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import axios from 'axios';

const Styles = styled.div`
  .navbar {
    background-color: white;
  }
  .navbar-nav .nav-link {
    color: black;
    &:hover {
      color: grey;
    }
    margin: 0px 8px;
  }

  .navbar-brand{
      color: #4B0082;
      font-weight: 990;
      font-size: 25px;
    &:hover{
        color: #2F4F4F;
    }
  }
 
  .sign-up{
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
    font-size: large;
    background-color: white;
  }

  .log-in{
    border-radius: 8px;
    background-color: rgba(185,89,188,1);
    color: white;
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
    &:hover{
        background-color: #79a7d3;
    }
    
  }

  .log-out{
      border-radius: 8px;
    background-color: rgba(185,89,188,1);
    color: black;
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
    &:hover{
        background-color: #48D1CC;
        font-size: large;
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