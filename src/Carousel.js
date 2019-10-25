import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { useSpring, animated } from 'react-spring';
import Icon from './Icon';

const Slider = styled.div`
  position: relative;
  margin: 0;
  padding: 0 4%;
  touch-action: pan-y;
  overflow-x: hidden;
`;

const buttonStyle = css`
  background: rgba(20, 20, 20, 0.5);
  color: white;
  border: 0;
  cursor: pointer;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 20;
  width: 4%;
  display: flex;
  justify-content: center;
  text-align: center;
  outline: none;
`;

const Previous = styled.button.attrs({ type: 'button' })`
  ${buttonStyle}
  left: 0;
`;

const Next = styled.button.attrs({ type: 'button' })`
  ${buttonStyle}
  right: 0;
`;

const SliderMask = styled.div`
  overflow-x: visible;
`;

const SliderContent = styled(animated.div)`
  white-space: nowrap;
`;

const Slide = styled.div`
  box-sizing: border-box;
  z-index: 1;
  display: inline-block;
  position: relative;
  white-space: normal;
  vertical-align: top;
  width: ${({ slidesPerPage }) => 100 / slidesPerPage}%;
`;

const defaultProps = {
  slidesPerPage: 5,
  defaultSlidesToScroll: 5,
};

const carouselTypes = {
  children: PropTypes.node.isRequired,
  slidesPerPage: PropTypes.number,
  defaultSlidesToScroll: PropTypes.number,
};

const Carousel = ({ children, slidesPerPage, defaultSlidesToScroll }) => {
  const totalItems = React.Children.count(children);
  const [currentPosition, setCurrentPosition] = useState(0);
  const [lastPosition, setLastPosition] = useState(0);
  const [isLastSlide, setIsLastSlide] = useState(false);

  const setPosition = (direction) => {
    let directionSign = -1;
    if (direction === 'prev') {
      directionSign = 1;
    }
    let slidesToScroll = defaultSlidesToScroll;
    setLastPosition(currentPosition);
    const percentWidthPerItem = 100 / slidesPerPage;
    let totalMovement = percentWidthPerItem * slidesToScroll * directionSign;
    const totalSlidesMoved = Math.abs(
      (currentPosition + totalMovement) / percentWidthPerItem
    );
    const nextSlidesMoved = totalSlidesMoved + slidesToScroll;
    if (
      totalSlidesMoved % defaultSlidesToScroll !== 0 &&
      direction === 'prev'
    ) {
      slidesToScroll = totalItems % slidesPerPage;
      totalMovement = percentWidthPerItem * slidesToScroll * directionSign;
    }
    if (nextSlidesMoved > totalItems) {
      slidesToScroll = slidesPerPage - (nextSlidesMoved - totalItems);
      totalMovement = percentWidthPerItem * slidesToScroll * directionSign;
    }
    if (lastPosition === 0 && currentPosition !== 0) {
      setIsLastSlide(true);
    } else {
      setIsLastSlide(false);
    }
    setCurrentPosition(currentPosition + totalMovement);
  };

  const renderSlides = () => {
    return [...Array(totalItems)].map((u, i) => {
      let newIndex = i;
      while (newIndex > totalItems - 1) {
        newIndex -= totalItems;
      }
      return (
        <Slide slidesPerPage={slidesPerPage}>
          {React.Children.map(children, (item, key) => {
            if (key === newIndex) return React.cloneElement(item);
            return false;
          })}
        </Slide>
      );
    });
  };

  const animateProps = useSpring({
    from: {
      transform: `translate3d(${lastPosition}%, 0px, 0px)`,
    },
    transform: `translate3d(${currentPosition}%, 0px 0px)`,
  });

  return (
    <Slider>
      <Previous
        onClick={() => {
          setPosition('prev');
        }}
        disabled={currentPosition === 0}
        aria-label="See previous deck"
      >
        <Icon type="arrow-left" />
      </Previous>
      <SliderMask>
        <SliderContent style={animateProps}>{renderSlides()}</SliderContent>
      </SliderMask>
      <Next
        onClick={() => {
          setPosition('next');
        }}
        disabled={isLastSlide}
        aria-label="See next deck"
      >
        <Icon type="arrow-right" />
      </Next>
    </Slider>
  );
};

Carousel.defaultProps = defaultProps;
Carousel.propTypes = carouselTypes;

export default Carousel;
