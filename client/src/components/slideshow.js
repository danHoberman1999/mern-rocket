import React from 'react';
import { Carousel } from 'react-bootstrap';
import styled from 'styled-components';
import art1 from '../assets/mountain1.jpg';
import art2 from '../assets/mountain2.jpg';


const Styles = styled.div`
  img {
    height: auto;
    width: 100%;
    border-radius: 10px;
    margin-top: 30px;
    margin-bottom: 30px;
  }

  

`;

function SlideShow() {
    return (
        <Styles>
            <Carousel className="carousel">
                <Carousel.Item>
                    <img src={art1} alt="img" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={art2} alt="img" />

                </Carousel.Item>
            </Carousel>
        </Styles>

    )
}

export default SlideShow;