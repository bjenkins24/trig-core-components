import React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';

import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import Deck from '../src/Deck';
import Carousel from '../src/Carousel';
import './consoleOverrides';
import themeForProvider from './theme';

const Item = styled.div`
  height: 200px;
  width: 100%;
`;

const MyDeck = () => {
  return (
    <Item>
      <Deck
        user={{
          firstName: 'Brian',
          lastName: 'Jenkins',
          position: 'President, CEO',
        }}
        image="https://code.org/images/fill-480x360/tutorials/hoc2018/danceparty-characters.jpg"
        totalFollowers={9}
        totalCards={22}
        title="Onboarding Support"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea"
      />
    </Item>
  );
};

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;
storiesOf('Carousel', module)
  .addDecorator((story) => (
    <>
      <GlobalStyle />
      <ThemeProvider theme={themeForProvider}>{story()}</ThemeProvider>
    </>
  ))
  .addDecorator(withKnobs)
  .add('default', () => (
    <Carousel>
      <MyDeck />
      <MyDeck />
      <MyDeck />
      <MyDeck />
      <MyDeck />
      <MyDeck />
      <MyDeck />
      <MyDeck />
      <MyDeck />
      <Item>
        <h1>Slide 2</h1>
      </Item>
      <Item>
        <h1>Slide 3</h1>
      </Item>
      <Item>
        <h1>Slide 4</h1>
      </Item>
      <Item>
        <h1>Slide 5</h1>
      </Item>
      <Item>
        <h1>Slide 6</h1>
      </Item>
      <Item>
        <h1>Slide 7</h1>
      </Item>
      <Item>
        <h1>Slide 8</h1>
      </Item>
      <Item>
        <h1>Slide 9</h1>
      </Item>
      <Item>
        <h1>Slide 10</h1>
      </Item>
      <Item>
        <h1>Slide 11</h1>
      </Item>
      <Item>
        <h1>Slide 12</h1>
      </Item>
      <Item>
        <h1>Slide 13</h1>
      </Item>
    </Carousel>
  ));
