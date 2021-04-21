import React from 'react';
import NavigationBar from './navigationBar';
import Layout from './layout'
import { Container, Row, Form } from 'react-bootstrap';
import styled from 'styled-components';
import { PayPalButton } from "react-paypal-button-v2";

const Styles = styled.div`


  .form-body{
      margin: 50px 250px 150px 250px;
      border-radius: 8px;
      background-color: white;
      padding: 50px;
  }

  .title{
      border-radius: 15px;
      font-weight: 700;
      font-family: -apple-system, BlinkMacSystemFont, sans-serif;
      margin-bottom: 25px;
  }

  
`;

function Payment(props) {
    return (
        <Styles>
            <React.Fragment>
                <NavigationBar loggedIn={props.loggedIn} />
                <Form className="form-body">
                    <h1 className="title">Payment to site creator</h1>
                    <PayPalButton
                        amount="0.01"
                        // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                        onSuccess={(details, data) => {
                            alert("Transaction completed by " + details.payer.name.given_name);

                            // OPTIONAL: Call your server to save the transaction
                            return fetch("/paypal-transaction-complete", {
                                method: "post",
                                body: JSON.stringify({
                                    orderId: data.orderID
                                })
                            });
                        }}
                        options={{
                            clientId: "AQg1448pBFX9AIyRP0VbhKUU6Ykp5R0z-5T3nHXZQK2chI5eXA7CPGN34X8J-WclM_ZMX9tq2w34KDWL"
                        }}
                    />
                </Form>
            </React.Fragment>
        </Styles>
    )
};

export default Payment;