import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import Carousel from '../src/Carousel';
import './consoleOverrides';
import themeForProvider from './theme';

const Item = styled.div`
  height: 200px;
  width: 100%;
  background: blue;
  border: 1px solid black;
`;

storiesOf('Carousel', module)
  .addDecorator((story) => (
    <ThemeProvider theme={themeForProvider}>{story()}</ThemeProvider>
  ))
  .add('default', () => (
    <Carousel>
      <Item>
        <h1>Slide 1</h1>
      </Item>
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
  ))
  .addDecorator(withKnobs);
