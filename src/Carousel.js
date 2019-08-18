import React, { useState } from 'react';
import PropTypes from 'prop-types';
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

const SliderContent = styled.div`
  white-space: nowrap;
  transform: translate3d(
    -${({ page, slidesPerPage, slidesToScroll }) => (100 / slidesPerPage) * slidesToScroll * page}%,
    0px,
    0px
  );
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

const Carousel = ({ children, slidesPerPage, slidesToScroll }) => {
  const [page, setPage] = useState(0);
  const totalPages = React.Children.count(children) / slidesToScroll - 1;

  return (
    <Slider>
      <Previous
        onClick={() => {
          if (page === 0) return false;
          return setPage(page - 1);
        }}
        role="button"
        tabindex={0}
        aria-label="See previous deck"
      >
        <Icon type="left-arrow" />
      </Previous>
      <SliderMask>
        <SliderContent
          page={page}
          slidesPerPage={slidesPerPage}
          slidesToScroll={slidesToScroll}
        >
          {React.Children.map(children, (item) => {
            return (
              <Slide slidesPerPage={slidesPerPage}>
                {React.cloneElement(item)}
              </Slide>
            );
          })}
        </SliderContent>
      </SliderMask>
      <Next
        onClick={() => {
          if (page >= totalPages) return false;
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
  slidesToScroll: 5,
};

Carousel.propTypes = {
  children: PropTypes.node.isRequired,
  slidesPerPage: PropTypes.number,
  slidesToScroll: PropTypes.number,
};

export default Carousel;
