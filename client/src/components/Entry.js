import React, { useState } from "react";
import styled from 'styled-components';
import { Button, Col } from 'react-bootstrap';
import user from '../assets/blinker.gif'

import axios from 'axios';
import { Redirect } from 'react-router-dom';

const Styles = styled.div`
  .user-control{
      background-color: white;
      border-radius: 5px;
      margin: 20px;
      padding-bottom: 4px;
      padding-top: 4px;
      padding: 8px;
  }

  .img{
        width: 80px;
        height: 80px;
        margin: auto;
        display: block;
  }

 

  .username, .address, .age, .more{
      text-align: center;
      display: block;
      padding-left: 20px;
      padding: 3px;
  }

  .button{
      display: block;
      text-align:center;
       margin: 0 auto 2em auto;
  }

`;

function Entry(props) {

    const [redirectTo, setRedirectTo] = useState(null)

    const username = props.username;

    function handleClick(event) {
        event.preventDefault();
        console.log('hello')
        axios.post('/infoLocator', {
            username: username
        })
            .then(response => {
                console.log('login response: ')
                console.log(response)
                if (response.status === 200) {
                    console.log('User info located');
                    setRedirectTo('/user')
                }
            }).catch(error => {
                console.log('Error finding user error: ')
                console.log(error);
                event.preventDefault();
                event.stopPropagation();

            })
    }


    if (redirectTo) {
        return <Redirect to={{ pathname: redirectTo }} />
    } else {
        return (
            <Styles>
                <Col>
                    <div className="user-control">
                        <img className="img" src={user} alt="icons8" />

                        <h3 className="username" >Firstname: {props.firstname}</h3>
                        <hr></hr>
                        <h3 className="address" >Lastname: {props.lastname}</h3>
                        <hr></hr>
                        <h3 className="age" >Username: {props.username}</h3>
                        <hr></hr>
                        <Button onClick={handleClick} className="button" variant="info" type="submit">Learn more...</Button>
                    </div>
                </Col>
            </Styles>
        );
    }
}

export default Entry;