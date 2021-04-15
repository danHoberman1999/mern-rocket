import React from 'react';
import NavigationBar from './navigationBar';
import Carousel from './slideshow';
import Layout from './layout'
import { Container, Row } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .layout {
    background-color: red;
  }

  .container{
      margin-top: 30px;
      border-radius: 15px;
  }

  
`;

function Home(props) {
    return (
        <Styles>
            <React.Fragment>
                <NavigationBar loggedIn={props.loggedIn} />
                <Container className="container">
                    <Layout className="layout">
                        <Carousel />

                        <h1>Information about Website</h1>
                        <Container>
                            <Row>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                            </Row>
                        </Container>
                    </Layout>
                </Container>
            </React.Fragment>
        </Styles>
    )
};

export default Home;