import React, { useState, useEffect } from 'react';
import { Container, Col, Form } from 'react-bootstrap';
import Layout from './layout'
import NavigationBar from './navigationBar';
import userProfile from '../assets/user.gif'
import styled from 'styled-components';

const Styles = styled.div`
  .circle-img{
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


.wrapper {
	text-align: center;
	h1 {
		color: #fff;
		font-size: 92px;
		font-family: "ubuntu";
		text-transform: uppercase;
		font-weight: 700;
		font-family: "Josefin Sans", sans-serif;
		background: linear-gradient(to right,rgba(185,89,188,1) 10%, rgba(73,89,200,1) 70%);
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
	}
}

@keyframes textclip {
	to {
		background-position: 200% center;
	}
}


  .container{
      background-color: white;
      margin-top: 50px;
      border-radius: 15px 15px 15px 15px;
  }

  .button{
      border-radius: 50%;
        border: none;
        width: 80px;
        height: 80px;
        position: relative;
        float: right;
        margin-bottom: 20px;
        margin-right: 10px;
        cursor: pointer;
        background-color: #66A5AD;
        top: -40px;
        transition: transform .7s ease-in-out;
        &:hover{
            transform: rotate(40deg);
        }
  }

  .button-2{
      border-radius: 50%;
        border: none;
        width: 80px;
        height: 80px;
        position: relative;
        float: right;
        margin-bottom: 20px;
        margin-right: 10px;
        cursor: pointer;
        background-color: #008B8B;
        font-weight: 600;
        font-family: -apple-system, BlinkMacSystemFont, sans-serif;
        color: white;
        top: -40px;
        transition: transform .7s ease-in-out;
        &:hover{
            transform: rotate(40deg);
        }
  }

 
  .bottom-group{
      margin-bottom: 60px;
  }

  .form{
      padding: 5px;
  }

  .form-row-1{
      padding: 2px;
  }

  .form-control{
      background-color: #F5F5F5;
      border-radius: 15px;
      font-weight: 700;
      font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  }

  .form-label{
      font-family: -apple-system, BlinkMacSystemFont, sans-serif;
      font-weight: 600;
  }

  .edit-info{
      margin-right: auto;
      font-family: -apple-system, BlinkMacSystemFont, sans-serif;
      color: #FF7F50;
  }

  .edit-control{
      margin-left:auto;
      font-family: -apple-system, BlinkMacSystemFont, sans-serif;
      color: black;
  }




 



`;




function UserInfo(props) {


    const [user, setUsers] = useState([{
        firstname: '',
        lastname: '',
        username: '',
        birth: '',
        gender: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        addressShip: '',
        cityShip: '',
        stateShip: '',
        zipShip: '',
        skill1: '',
        skill2: '',
        skill3: '',
        skiing: '',
        react: '',
        email: '',
        password: ''
    }])




    useEffect(() => {
        fetch('/infoFound').then(res => {
            if (res.ok) {
                return res.json()
            }
        }).then(jsonRes => setUsers(jsonRes))
    })








    return (
        <Styles>
            <React.Fragment>
                <NavigationBar loggedIn={props.loggedIn} />
                <Container className="container">
                    <Layout className="layout">
                        <Form className="form" >
                            <img className="circle-img" src={userProfile} alt="avatar_img" />
                            <div className="wrapper">
                                <h1 className="username">{user.username}</h1>
                            </div>
                            <Form.Row className="form-row-1">
                                <Form.Group as={Col} md="4">
                                    <Form.Label className="form-label">First name:</Form.Label>
                                    <Form.Control className="form-control"
                                        name="firstname"
                                        type="text"
                                        value={user.firstname}
                                        disabled
                                    />
                                </Form.Group>
                                <Form.Group as={Col} md="4">
                                    <Form.Label>Last name:</Form.Label>
                                    <Form.Control
                                        name="lastname"
                                        type="text"
                                        value={user.lastname}
                                        disabled

                                    />
                                </Form.Group>
                                <Form.Group as={Col} md="4">
                                    <Form.Label>Phone:</Form.Label>
                                    <Form.Control
                                        name="phone"
                                        type="text"
                                        value={user.phone}
                                        disabled

                                    />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} md="6">
                                    <Form.Label>City:</Form.Label>
                                    <Form.Control
                                        name="city"
                                        type="text"
                                        value={user.city}
                                        disabled

                                    />
                                </Form.Group>

                                <Form.Group as={Col} md="6">
                                    <Form.Label>State:</Form.Label>
                                    <Form.Control
                                        name="state"
                                        type="text"
                                        value={user.city}
                                        disabled

                                    />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row className="bottom-row">
                                <Form.Group as={Col} md="4">
                                    <Form.Label>Skill 1</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={3}
                                        value={user.skill1}
                                        name="skill1"
                                        type="text"
                                        disabled
                                    />

                                </Form.Group>
                                <Form.Group as={Col} md="4">
                                    <Form.Label>Skill 2</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={3}
                                        value={user.skill2}
                                        name="skill2"
                                        type="text"
                                        disabled
                                    />
                                </Form.Group>
                                <Form.Group as={Col} md="4">
                                    <Form.Label>Skill 3</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={3}
                                        value={user.skill3}
                                        name="skill3"
                                        type="text"
                                        disabled
                                    />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} md="6">
                                    <Form.Label>Skiing?</Form.Label>
                                    <Form.Control
                                        name="skiing"
                                        type="text"
                                        value={user.skiing}
                                        disabled

                                    />
                                </Form.Group>
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                <Form.Group as={Col} md="6" controlId="validationCustom04">
                                    <Form.Label>React?</Form.Label>
                                    <Form.Control
                                        name="react"
                                        type="text"
                                        value={user.react}
                                        disabled

                                    />
                                </Form.Group>
                            </Form.Row>



                        </Form>

                    </Layout>
                </Container>

            </React.Fragment>
        </Styles>


    )
};

export default UserInfo;