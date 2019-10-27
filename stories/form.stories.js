import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import StringField from '../src/Form/StringField';
import StringFieldWithButton from '../src/Form/StringFieldWithButton';
import SelectField from '../src/Form/SelectField';
import Checkbox from '../src/Form/Checkbox';
import { HorizontalGroup } from '../src/Groups';
import { Body1 } from '../src/Typography';
import Label from '../src/Form/Label';
import DateRangeField from '../src/Form/DateRangeField';
import './consoleOverrides';
import themeForProvider from './theme';

const DateRangeFieldWrapper = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (
    <div
      css={`
        width: 37rem;
      `}
    >
      <DateRangeField
        startDate={startDate}
        endDate={endDate}
        onSelectStart={(date) => setStartDate(date)}
        onSelectEnd={(date) => setEndDate(date)}
        clearStart={() => setStartDate(null)}
        clearEnd={() => setEndDate(null)}
      />
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const SelectFieldWrapper = ({ size }) => {
  const [selectedValue, setSelectedValue] = useState(null);

  return (
    <SelectField
      label="My Cool Label"
      value={selectedValue}
      size={size}
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
  .addDecorator(withKnobs)
  .add('StringField', () => (
    <StringField
      label={text('label', 'My Cool Label')}
      placeholder={text('placeholder', 'Placeholder')}
      width={text('width', '20')}
    />
  ))
  .add('SelectField', () => {
    return (
      <SelectFieldWrapper
        size={select('Size', { sm: 'sm', md: 'md', lg: 'lg' }, 'md')}
      />
    );
  })
  .add('Label', () => <Label>My awesome field</Label>)
  .add('Checkbox', () => <Checkbox label="React (4)" />)
  .add('Checkbox Custom Label', () => (
    <Checkbox>
      {({ renderCheckbox }) => {
        return (
          <HorizontalGroup margin={10}>
            <Body1 color="ps.200">Hello</Body1> {renderCheckbox()}
          </HorizontalGroup>
        );
      }}
    </Checkbox>
  ))
  .add('DateRangeField', () => <DateRangeFieldWrapper />)
  .add('StringField with Button', () => (
    <StringFieldWithButton
      buttonContent="Add"
      onSubmit={action('submitted')}
      width="100%"
      placeholder={text('placeholder', 'Enter your url...')}
    />
  ));
