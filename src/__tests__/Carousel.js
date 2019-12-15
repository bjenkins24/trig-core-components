import React from 'react';
import { render } from 'test/utils';
import Carousel from 'Carousel';

const text = 'Slide';
const totalSlides = 10;

const buildCarousel = (props) => {
  const getSlides = () => {
    const slides = [];
    for (let i = 0; i < totalSlides; i += 1) {
      slides.push(`${text} ${i + 1}`);
    }
    return slides;
  };

  return (
    <Carousel {...props}>
      {getSlides().map((slideText) => {
        return <div key={slideText}>{slideText}</div>;
      })}
    </Carousel>
  );
};

test('renders and takes basic props', () => {
  const { getByText } = render(buildCarousel());

  expect(getByText(`${text} 1`)).toBeTruthy();
});
