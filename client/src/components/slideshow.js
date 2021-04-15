import React from 'react';
import { Carousel } from 'react-bootstrap';
import styled from 'styled-components';
import art1 from '../assets/art1.jpg';
import art2 from '../assets/art2.jpg';
import art3 from '../assets/art3.jpg';


const Styles = styled.div`
  img {
    height: 200px;
    width: 100%;
    border-radius: 10px;
    margin-top: 10px;
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
                <Carousel.Item>
                    <img src={art3} alt="img" />

                </Carousel.Item>
            </Carousel>
        </Styles>

    )
}

export default SlideShow;