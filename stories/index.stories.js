import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Button from '../src/Buttons';

storiesOf('Button', module)
  .add('default', () => <Button onClick={action('clicked')}>Hello Button</Button>);
