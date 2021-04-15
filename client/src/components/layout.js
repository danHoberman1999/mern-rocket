import React from 'react';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';

const Styles = styled.div`
  .container{
    background-color:#f7f7f7;
  }

`;


function Layout(props) {
  return (
    <Styles>
      <Container className="container">
        {props.children}
      </Container>
    </Styles>

  )
}

export default Layout;