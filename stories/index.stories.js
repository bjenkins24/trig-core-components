import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Button from '../src/Buttons';
import { TinyText, Body1, Body2, Body3, H4, H3, H2, H1, Huge } from '../src/Typography.js';

storiesOf('Button', module)
  .add('default', () => <Button onClick={action('clicked')}>Hello Button</Button>);

const sample = 'Sample Text';
const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
storiesOf('Typography', module)
  .add('all', () => {
    return (
        <table>
           <tr><td><Body1>Huge</Body1></td><td><Huge>{sample}</Huge></td></tr>
           <tr><td><Body1>H1</Body1></td><td><H1>{sample}</H1></td></tr>
           <tr><td><Body1>H2</Body1></td><td><H2>{sample}</H2></td></tr>
           <tr><td><Body1>H3</Body1></td><td><H3>{sample}</H3></td></tr>
           <tr><td><Body1>H4</Body1></td><td><H4>{sample}</H4></td></tr>
           <tr><td><Body1>Body1</Body1></td><td><Body1 as="p">{lorem}</Body1></td></tr>
           <tr><td><Body1>Body2</Body1></td><td><Body2 as="p">{lorem}</Body2></td></tr>
           <tr><td><Body1>Body3</Body1></td><td><Body3 as="p">{lorem}</Body3></td></tr>
           <tr><td><Body1>TinyText</Body1></td><td><TinyText>{sample}</TinyText></td></tr>
       </table>
    )
   });
