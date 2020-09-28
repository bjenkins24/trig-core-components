/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, select, number, text } from '@storybook/addon-knobs';

import { ThemeProvider } from 'styled-components';
import './consoleOverrides';
import { Button, ButtonToggle, Fab, ButtonSelect } from '../src/Buttons';
import Icon from '../src/Icon';
import Logo from '../src/Logo';
import Avatar from '../src/Avatar';
import { Popover, PopoverNavigation } from '../src/Popovers';
import Deck from '../src/Deck';
import {
  Huge,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  BodyBiggest,
  BodyBig,
  Body1,
  Body2,
  Body3,
  TinyText,
} from '../src/Typography';
import theme from './theme';

const icons = {
  deck: 'deck',
  cards: 'cards',
  comment: 'comment',
  avatar: 'avatar',
  followers: 'followers',
  document: 'document',
  link: 'link',
  file: 'file',
  aggregate: 'aggregate',
  organize: 'organize',
};

storiesOf('Button', module)
  .addDecorator((story) => {
    return <ThemeProvider theme={theme}>{story()}</ThemeProvider>;
  })
  .addDecorator(withKnobs)
  .add('default', () => {
    return (
      <Button
        as="a"
        width={40}
        iconProps={{ type: 'google' }}
        size={select(
          'Size',
          { huge: 'hg', small: 'sm', medium: 'md', large: 'lg' },
          'md'
        )}
        onClick={action('clicked')}
        variant={select(
          'variant',
          {
            transparent: 'transparent',
            'transparent-dark': 'transparent-dark',
            s: 's',
            'inverse-s': 'inverse-s',
            'inverse-pc': 'inverse-pc',
            'inverse-pl': 'inverse-pl',
          },
          's'
        )}
      >
        {text('Button Text', 'Hello Button')}
      </Button>
    );
  })
  .add('Fab', () => {
    return (
      <Fab>
        <Icon type="cards" color="sc" />
      </Fab>
    );
  })
  .add('Select', () => {
    return (
      <ButtonSelect
        title={text('Title', 'Wiki')}
        iconType={select('Icon Type', icons, 'document')}
        description={text(
          'Description',
          'Create a wiki to document anything in your orginization'
        )}
        color={select(
          'Color',
          { a1: 'a1', a2: 'a2', a3: 'a3', a4: 'a4', a5: 'a5' },
          'a1'
        )}
      />
    );
  })
  .add('Toggle', () => {
    return (
      <ButtonToggle>
        <Icon type="row-view" onClick={action('clicked row')} size={1.6} />
        <Icon
          type="thumbnail-view"
          onClick={action('clicked thumbnail')}
          size={1.6}
        />
      </ButtonToggle>
    );
  });

storiesOf('Popover', module)
  .addDecorator((story) => (
    <ThemeProvider theme={theme}>{story()}</ThemeProvider>
  ))
  .addDecorator(withKnobs)
  .add('default', () => (
    <Popover variant="dark" renderPopover={() => <span>Hello</span>}>
      <button type="button">Trigger</button>
    </Popover>
  ))
  .add('navigation', () => (
    <PopoverNavigation
      navigationList={[
        { onClick: action('clicked first one'), item: 'My cool friend' },
        {
          onClick: action('clicked second one'),
          item: 'My second cool friend',
        },
        {
          onClick: action('clicked third one'),
          item: 'My third cool friend',
        },
      ]}
    >
      <button type="button">Trigger</button>
    </PopoverNavigation>
  ));

storiesOf('Icons', module)
  .addDecorator((story) => (
    <ThemeProvider theme={theme}>{story()}</ThemeProvider>
  ))
  .addDecorator(withKnobs)
  .add('default', () => <Icon type="deck" size={number('size', 3.2)} />)
  .add('hamburger', () => <Icon type="hamburger" size={number('size', 3.2)} />)
  .add('with count', () => (
    <div
      css={`
        width: 1.6rem;
      `}
    >
      <Icon
        size={number('size', 1.6)}
        type={select('Icon', icons, 'comment')}
        color={text('color', 's')}
        count={number('count', 5)}
      />
    </div>
  ));

storiesOf('Logo', module)
  .addDecorator((story) => (
    <ThemeProvider theme={theme}>{story()}</ThemeProvider>
  ))
  .addDecorator(withKnobs)
  .add('default', () => (
    <Logo type={select('type', ['dark', 'light'], 'dark')} />
  ));

storiesOf('Deck', module)
  .addDecorator((story) => (
    <ThemeProvider theme={theme}>{story()}</ThemeProvider>
  ))
  .addDecorator(withKnobs)
  .add('default', () => (
    <div
      css={`
        width: 20%;
        height: 200px;
      `}
    >
      <Deck
        css={`
          margin: 100px;
        `}
        href="https://google.com"
        onClick={action('clicked!')}
        user={{
          firstName: 'Brian',
          lastName: 'Jenkins',
          position: 'President, CEO',
        }}
        image={text(
          'image',
          'https://code.org/images/fill-480x360/tutorials/hoc2018/danceparty-characters.jpg'
        )}
        totalFollowers={number('followers', 9)}
        totalCards={number('cards', 22)}
        title={text('title', 'Onboarding Support')}
        description={text(
          'description',
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea laboris nisi ut aliquip ex ea laboris nisi ut aliquip ex ea laboris nisi ut aliquip ex ea'
        )}
      />
    </div>
  ));

storiesOf('Avatar', module)
  .addDecorator((story) => (
    <ThemeProvider theme={theme}>{story()}</ThemeProvider>
  ))
  .addDecorator(withKnobs)
  .add('default', () => (
    <Avatar
      firstName={text('first name', 'Brian')}
      lastName={text('last name', 'Jenkins')}
      size={number('size', 3.2)}
    />
  ));

const sample = 'Sample Text';
const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
storiesOf('Typography', module)
  .addDecorator((story) => (
    <ThemeProvider theme={theme}>{story()}</ThemeProvider>
  ))
  .add('all', () => {
    return (
      <table>
        <tbody>
          <tr>
            <td>
              <Body1>Huge</Body1>
            </td>
            <td>
              <Huge>{sample}</Huge>
            </td>
          </tr>
          <tr>
            <td>
              <Body1>H1</Body1>
            </td>
            <td>
              <Heading1>{sample}</Heading1>
            </td>
          </tr>
          <tr>
            <td>
              <Body1>H2</Body1>
            </td>
            <td>
              <Heading2>{sample}</Heading2>
            </td>
          </tr>
          <tr>
            <td>
              <Body1>H3</Body1>
            </td>
            <td>
              <Heading3>{sample}</Heading3>
            </td>
          </tr>
          <tr>
            <td>
              <Body1>H4</Body1>
            </td>
            <td>
              <Heading4>{sample}</Heading4>
            </td>
          </tr>
          <tr>
            <td>
              <Body1>BodyBiggest</Body1>
            </td>
            <td>
              <BodyBiggest as="p">{lorem}</BodyBiggest>
            </td>
          </tr>
          <tr>
            <td>
              <Body1>BodyBig</Body1>
            </td>
            <td>
              <BodyBig as="p">{lorem}</BodyBig>
            </td>
          </tr>
          <tr>
            <td>
              <Body1>Body1</Body1>
            </td>
            <td>
              <Body1 as="p">{lorem}</Body1>
            </td>
          </tr>
          <tr>
            <td>
              <Body1>Body2</Body1>
            </td>
            <td>
              <Body2 as="p">{lorem}</Body2>
            </td>
          </tr>
          <tr>
            <td>
              <Body1>Body3</Body1>
            </td>
            <td>
              <Body3 as="p">{lorem}</Body3>
            </td>
          </tr>
          <tr>
            <td>
              <Body1>TinyText</Body1>
            </td>
            <td>
              <TinyText>{sample}</TinyText>
            </td>
          </tr>
        </tbody>
      </table>
    );
  })
  .add('separator', () => {
    return <Heading2 separator>Hello there</Heading2>;
  });
