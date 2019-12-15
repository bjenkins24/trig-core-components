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

const getTransition = ({ disabled }) => {
  if (disabled) return false;
  return css`
    transition: all 200ms;
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
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 20;
  width: 4%;
  display: flex;
  justify-content: center;
  text-align: center;
  outline: none;
  ${getTransition}
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

  const renderSlides = () => {
    return [...Array(totalItems)].map((u, i) => {
      let newIndex = i;
      while (newIndex > totalItems - 1) {
        newIndex -= totalItems;
      }
      return (
        <Slide
          key={newIndex}
          slidesPerPage={slidesPerPage}
          slideSpacing={slideSpacing}
        >
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

  const isPrevDisabled = currentPosition === 0;
  const isNextDisabled = isLastSlide || totalItems < defaultSlidesToScroll;

  return (
    <Slider {...restProps}>
      {!isPrevDisabled && (
        <Previous
          onClick={() => {
            setPosition('prev');
          }}
          disabled={isPrevDisabled}
          aria-label="See previous deck"
        >
          <Icon
            className="Carousel__Arrow"
            type="arrow-left"
            color={!isPrevDisabled ? 'pc' : 'ps.100'}
          />
        </Previous>
      )}
      <SliderMask>
        <SliderContent style={animateProps}>{renderSlides()}</SliderContent>
      </SliderMask>
      {!isNextDisabled && (
        <Next
          onClick={() => {
            setPosition('next');
          }}
          disabled={isNextDisabled}
          aria-label="See next deck"
        >
          <Icon
            className="Carousel__Arrow"
            type="arrow-right"
            color={!isNextDisabled ? 'pc' : 'ps.100'}
          />
        </Next>
      )}
    </Slider>
  );
};

Carousel.defaultProps = defaultProps;
Carousel.propTypes = carouselTypes;

export default Carousel;
