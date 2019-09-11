import React from 'react';
import { ThemeProvider } from 'styled-components';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import StringField from '../src/Form/StringField';
import SelectField from '../src/Form/SelectField';
import Label from '../src/Form/Label';
import './consoleOverrides';
import themeForProvider from './theme';

storiesOf('Form', module)
  .addDecorator((story) => (
    <ThemeProvider theme={themeForProvider}>{story()}</ThemeProvider>
  ))
  .add('StringField', () => (
    <StringField
      label={text('label', 'My Cool Label')}
      placeholder={text('placeholder', 'Placeholder')}
      width={text('width', '20')}
    />
  ))
  .add('SelectField', () => (
    <SelectField
      label={text('label', 'My Cool Label')}
      width={text('width', '20')}
    >
      <option>First</option>
      <option>Second</option>
      <option>Third</option>
    </SelectField>
  ))
  .add('Label', () => <Label>My awesome field</Label>)
  .addDecorator(withKnobs);
