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

const getTransition = () => {
  return css`
    transition: all 200ms;
    & .Carousel__Arrow {
      flex-direction: row;
      align-self: center;
    }
    & .Carousel__Arrow svg {
      transition: all 200ms;
    }
    &:hover {
      background: rgba(0, 0, 0, 0.4);
      & .Carousel__Arrow svg {
        transform: scale(1.2);
      }
    }
  `;
};

const buttonStyle = css`
  background: rgba(0, 0, 0, 0.3);
  color: white;
  border: 0;
  cursor: pointer;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 2;
  display: flex;
  justify-content: center;
  text-align: center;
  outline: none;
  ${getTransition}
`;

const Previous = styled.button.attrs({ type: 'button' })`
  ${buttonStyle}
  width: calc(4% - ${({ slideSpacing }) => slideSpacing}rem);
  left: 0;
`;

const Next = styled.button.attrs({ type: 'button' })`
  ${buttonStyle}
  width: 4%;
  right: 0;
`;

const SliderMask = styled.div`
  overflow-x: visible;
`;

const SliderContent = styled(animated.div)`
  white-space: nowrap;
`;

const getWidth = ({ slidesPerPage, slideSpacing }) => {
  return `calc(${100 / slidesPerPage}% - ${slideSpacing}rem)`;
};

const Slide = styled.div`
  box-sizing: border-box;
  z-index: 1;
  display: inline-block;
  position: relative;
  white-space: normal;
  vertical-align: top;
  width: ${getWidth};
  margin-right: ${({ slideSpacing }) => slideSpacing}rem;
`;

const defaultProps = {
  slidesPerPage: 5,
  defaultSlidesToScroll: 5,
  slideSpacing: 0.4,
};

const carouselTypes = {
  children: PropTypes.node.isRequired,
  slidesPerPage: PropTypes.number,
  defaultSlidesToScroll: PropTypes.number,
  slideSpacing: PropTypes.number,
};

const Carousel = ({
  children,
  slidesPerPage,
  defaultSlidesToScroll,
  slideSpacing,
  ...restProps
}) => {
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
      setIsLastSlide(true);
    } else {
      setIsLastSlide(false);
    }
    setCurrentPosition(currentPosition + totalMovement);
  };

  const getSlidePage = (slidePosition) => {
    return Math.floor(slidePosition / slidesPerPage) + 1;
  };

  const getCurrentPage = () => {
    if (currentPosition === 0) {
      return 1;
    }
    return Math.abs(currentPosition) / 100 + 1;
  };

  const renderSlides = () => {
    return [...Array(totalItems)].map((u, i) => {
      let renderSlide = true;
      if (Math.abs(getCurrentPage() - getSlidePage(i)) >= 3) {
        renderSlide = false;
      }
      return (
        <Slide
          key={`slide-${i + 1}`}
          data-testid={`carousel__slide-${i + 1}`}
          slidesPerPage={slidesPerPage}
          slideSpacing={slideSpacing}
        >
          {renderSlide &&
            React.Children.map(children, (item, key) => {
              if (key === i) return React.cloneElement(item);
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

  const isPrevShowing = currentPosition !== 0;
  const isNextShowing = !isLastSlide && totalItems > defaultSlidesToScroll;

  return (
    <Slider {...restProps}>
      {isPrevShowing && (
        <Previous
          slideSpacing={slideSpacing}
          onClick={() => {
            setPosition('prev');
          }}
          aria-label="Go to previous page"
        >
          <Icon className="Carousel__Arrow" type="arrow-left" color="pc" />
        </Previous>
      )}
      <SliderMask>
        <SliderContent style={animateProps}>{renderSlides()}</SliderContent>
      </SliderMask>
      {isNextShowing && (
        <Next
          onClick={() => {
            setPosition('next');
          }}
          aria-label="Go to next page"
        >
          <Icon className="Carousel__Arrow" type="arrow-right" color="pc" />
        </Next>
      )}
    </Slider>
  );
};

Carousel.defaultProps = defaultProps;
Carousel.propTypes = carouselTypes;

export default Carousel;
