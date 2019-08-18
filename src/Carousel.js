import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import Icon from './Icon';

const Slider = styled.div`
  position: relative;
  margin: 0;
  padding: 0 4%;
  touch-action: pan-y;
`;

const Previous = styled.span`
  background: rgba(20, 20, 20, 0.5);
  color: white;
  left: 0;
  cursor: pointer;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 20;
  width: 4%;
  display: flex;
  justify-content: center;
  text-align: center;
`;

const Next = styled.span`
  background: rgba(20, 20, 20, 0.5);
  color: white;
  right: 0;
  cursor: pointer;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 20;
  width: 4%;
  display: flex;
  justify-content: center;
  text-align: center;
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

const Carousel = ({ children, slidesPerPage, defaultSlidesToScroll }) => {
  const [page, setPage] = useState(0);
  const [lastPage, setLastPage] = useState(0);
  const [additionalPages, setAdditionalPages] = useState(0);
  const totalItems = React.Children.count(children);
  const [copySlideCursor, setCopySlideCursor] = useState(totalItems);
  const totalPages = totalItems / defaultSlidesToScroll - 1 + additionalPages;

  const getSlidePosition = (selectedPage) => {
    return `${-(100 / slidesPerPage) * defaultSlidesToScroll * selectedPage}%`;
  };

  if (totalPages - page <= 1) {
    setAdditionalPages(additionalPages + 1);
    setCopySlideCursor(copySlideCursor + totalItems);
  }

  const renderSlides = () => {
    return [...Array(copySlideCursor)].map((u, i) => {
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
      transform: `translate3d(${getSlidePosition(lastPage)}, 0px, 0px)`,
    },
    transform: `translate3d(${getSlidePosition(page)}, 0px 0px)`,
  });

  return (
    <Slider>
      <Previous
        onClick={() => {
          if (page === 0) return false;
          setLastPage(page);
          return setPage(page - 1);
        }}
        role="button"
        tabindex={0}
        aria-label="See previous deck"
      >
        <Icon type="left-arrow" />
      </Previous>
      <SliderMask>
        <SliderContent style={animateProps}>{renderSlides()}</SliderContent>
      </SliderMask>
      <Next
        onClick={() => {
          if (page >= totalPages) return false;
          setLastPage(page);
          return setPage(page + 1);
        }}
        role="button"
        tabindex={0}
        aria-label="See next deck"
      >
        <Icon type="right-arrow" />
      </Next>
    </Slider>
  );
};

Carousel.defaultProps = {
  slidesPerPage: 5,
  defaultSlidesToScroll: 5,
};

Carousel.propTypes = {
  children: PropTypes.node.isRequired,
  slidesPerPage: PropTypes.number,
  defaultSlidesToScroll: PropTypes.number,
};

export default Carousel;
