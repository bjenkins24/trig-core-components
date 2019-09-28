import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import StringField from '../src/Form/StringField';
import SelectField from '../src/Form/SelectField';
import Checkbox from '../src/Form/Checkbox';
import Label from '../src/Form/Label';
import './consoleOverrides';
import themeForProvider from './theme';

const SelectFieldWrapper = () => {
  const [selectedValue, setSelectedValue] = useState(null);

  return (
    <SelectField
      label="My Cool Label"
      value={selectedValue}
      onChange={(value) => setSelectedValue(value)}
      options={[
        { value: 1, label: 'First one' },
        { value: 2, label: 'Second one' },
        { value: 3, label: 'Third one' },
        { value: 4, label: 'Fourth one' },
        { value: 5, label: 'Fifth one' },
        { value: 6, label: 'Sixth one' },
        { value: 7, label: 'Seventh one' },
      ]}
    />
  );
};

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
  .add('SelectField', () => {
    return <SelectFieldWrapper />;
  })
  .add('Label', () => <Label>My awesome field</Label>)
  .add('Checkbox', () => <Checkbox />)
  .addDecorator(withKnobs);
