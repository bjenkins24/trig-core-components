import React from 'react';
import styled from 'styled-components';
import Carousel from 'nuka-carousel';

const StyledSlide = styled.div`
  background: ${({ color }) => color};
`;

const Container = styled.div`
  .slider-control-bottomcenter {
    /*display: none;*/
  }
`;

const slides = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'purple',
  'indigo',
  'violet',
  'red',
  'orange',
];

const Carousel2 = () => {
  return (
    <Container>
      <Carousel
        slidesToShow={5.25}
        cellSpacing={5}
        speed={150}
        cellAlign="center"
        wrapAround
        renderBottomCenterControls={() => null}
      >
        {slides.map((color, key) => {
          return (
            <StyledSlide color={color} index={key}>
              First one!
            </StyledSlide>
          );
        })}
      </Carousel>
    </Container>
  );
};

export default Carousel2;
