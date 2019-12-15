import React from 'react';
import { render } from 'test/utils';
import user from '@testing-library/user-event';
import Carousel from 'Carousel';

const text = 'Slide';

// eslint-disable-next-line react/prop-types
const buildCarousel = ({ slidesToRender, ...restProps }) => {
  const getSlides = () => {
    const slides = [];
    for (let i = 0; i < slidesToRender; i += 1) {
      slides.push(`${text} ${i + 1}`);
    }
    return slides;
  };

  return (
    <Carousel {...restProps}>
      {getSlides().map((slideText) => {
        return <div key={slideText}>{slideText}</div>;
      })}
    </Carousel>
  );
};

test('renders and takes basic props', () => {
  const { getByText, queryByLabelText } = render(
    buildCarousel({ slidesToRender: 4, slidesPerPage: 5 })
  );

  expect(getByText(`${text} 1`)).toBeTruthy();

  const prevButton = queryByLabelText(/go to previous page/i);
  const nextButton = queryByLabelText(/go to next page/i);
  expect(prevButton).toBeNull();
  expect(nextButton).toBeNull();
});

test('renders navigation buttons when appropriate', () => {
  const { queryByLabelText } = render(
    buildCarousel({ slidesToRender: 11, slidesPerPage: 5 })
  );

  const getButtons = () => {
    return {
      prev: queryByLabelText(/go to previous page/i),
      next: queryByLabelText(/go to next page/i),
    };
  };

  let buttons = getButtons();
  expect(buttons.prev).toBeNull();
  expect(buttons.next).toBeTruthy();

  user.click(buttons.next);
  buttons = getButtons();
  expect(buttons.prev).toBeTruthy();
  expect(buttons.next).toBeTruthy();

  user.click(buttons.next);
  buttons = getButtons();
  expect(buttons.prev).toBeTruthy();
  expect(buttons.next).toBeNull();

  user.click(buttons.prev);
  buttons = getButtons();
  expect(buttons.prev).toBeTruthy();
  expect(buttons.next).toBeTruthy();
});

test('adds slide spacing and width correctly', () => {
  const { getByTestId } = render(
    buildCarousel({ slidesToRender: 2, slidesPerPage: 5, slideSpacing: 0.8 })
  );
  const slide = getByTestId(/carousel__slide-1/i);

  expect(slide).toHaveStyleRule('margin-right', '0.8rem');
  expect(slide).toHaveStyleRule('width', 'calc(20% - 0.8rem)');
});
