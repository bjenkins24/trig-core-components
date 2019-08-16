import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, text } from '@storybook/addon-knobs';
import Slider from 'react-slick';

import Icon from '../src/Icon';
import './consoleOverrides';

import Deck from '../src/Deck';
import themeForProvider from './theme';

// eslint-disable-next-line
const DeckDemo = ({ title }) => (
  <Deck
    css={`
      margin: 100px;
    `}
    user={{
      firstName: 'Brian',
      lastName: 'Jenkins',
      position: 'President, CEO',
    }}
    image="https://code.org/images/fill-480x360/tutorials/hoc2018/danceparty-characters.jpg"
    totalFollowers={number('followers', 9)}
    totalCards={number('cards', 22)}
    title={title}
    description={text(
      'description',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea'
    )}
  />
);

const Wrapper = styled.div`
  .slick-slider {
    position: relative;

    display: block;
    box-sizing: border-box;

    user-select: none;

    touch-action: pan-y;
  }

  .slick-list {
    position: relative;

    display: block;
    overflow: hidden;

    margin: 0;
    padding: 0;
  }
  .slick-list:focus {
    outline: none;
  }
  .slick-list.dragging {
    cursor: pointer;
    cursor: hand;
  }

  .slick-track {
    position: relative;
    top: 0;
    left: 0;

    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .slick-slider .slick-track,
  .slick-slider .slick-list {
    transform: translate3d(0, 0, 0);
  }

  .slick-track:before,
  .slick-track:after {
    display: table;

    content: '';
  }
  .slick-track:after {
    clear: both;
  }
  .slick-loading .slick-track {
    visibility: hidden;
  }

  .slick-slide {
    display: none;
    float: left;

    height: 100%;
    min-height: 1px;
  }
  [dir='rtl'] .slick-slide {
    float: right;
  }
  .slick-slide img {
    display: block;
  }
  .slick-slide.slick-loading img {
    display: none;
  }
  .slick-slide.dragging img {
    pointer-events: none;
  }
  .slick-initialized .slick-slide {
    display: block;
  }
  .slick-loading .slick-slide {
    visibility: hidden;
  }
  .slick-vertical .slick-slide {
    display: block;

    height: auto;

    border: 1px solid transparent;
  }
  .slick-arrow {
    filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.2));
    transition: transform 0.2s;
  }
  .slick-arrow:hover {
    transform: translate(0, -50%) scale(1.2);
  }
  .slick-arrow.slick-hidden {
    display: none;
  }
  @charset 'UTF-8';
  /* Slider */
  .slick-loading .slick-list {
    background: #fff url('./ajax-loader.gif') center center no-repeat;
  }

  .slick-prev,
  .slick-next {
    font-size: 0;
    line-height: 0;

    position: absolute;
    top: 50%;

    display: block;

    width: 3.2rem;
    height: 3.2rem;
    padding: 0;
    transform: translate(0, -50%);

    cursor: pointer;

    color: rgb(${({ theme }) => theme.csc});
    z-index: 1;
    border: none;
    outline: none;
    background: transparent;
  }

  .slick-prev {
    left: 0;
  }
  [dir='rtl'] .slick-prev {
    right: -25px;
    left: auto;
  }

  .slick-next {
    right: 0;
  }
  [dir='rtl'] .slick-next {
    right: auto;
    left: -25px;
  }
`;

storiesOf('Carousel', module)
  .addDecorator((story) => (
    <ThemeProvider theme={themeForProvider}>{story()}</ThemeProvider>
  ))
  .add('default', () => (
    <Wrapper>
      <Slider
        prevArrow={<Icon type="left-arrow" />}
        nextArrow={<Icon type="right-arrow" />}
        dots
        infinite
        speed={500}
        slidesToShow={4}
        slidesToScroll={1}
      >
        <DeckDemo title="My first slide" />
        <DeckDemo title="My second slide" />
        <DeckDemo title="My third slide" />
        <DeckDemo title="My fourth slide" />
        <DeckDemo title="My fifth slide" />
        <DeckDemo title="My sixth slide" />
        <DeckDemo title="My seventh slide" />
        <DeckDemo title="My eighth slide" />
        <DeckDemo title="My third slide" />
      </Slider>
    </Wrapper>
  ))
  .addDecorator(withKnobs);
