import React, { useState, useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { object, bool, string } from 'yup';
import {
  Form,
  StringField,
  StringFieldForm,
  TextField,
  TextFieldForm,
  Fieldset,
  Legend,
  StringFieldWithButtonForm,
  SelectField,
  CheckboxForm,
  Tag,
  Label,
  DateRangeField,
  Button,
} from '../src';
import './consoleOverrides';
import themeForProvider from './theme';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const FormComponent = () => {
  const supRef = useRef(null);
  return (
    <Form
      initialValues={{ sup: '', joe: '' }}
      onSubmit={action('submitted')}
      validationSchema={object().shape({
        sup: string().required('Add one please'),
        joe: string().required('add another one!'),
      })}
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Fieldset>
            <Legend>Stuff</Legend>
            <StringFieldForm
              ref={supRef}
              name="sup"
              label={text('label', 'My Cool Label')}
              placeholder={text('placeholder', 'Placeholder')}
            />
            <TextFieldForm
              name="joe"
              label={text('label', 'My Cool Label')}
              placeholder={text('placeholder', 'Placeholder')}
            />
          </Fieldset>
          <button type="submit">Submit</button>
        </form>
      )}
    </Form>
  );
};

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
const SelectFieldWrapper = ({ size, Component, ...restProps }) => {
  const [selectedValue, setSelectedValue] = useState(null);

  return (
    <Component
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
      {...restProps}
    />
  );
};

storiesOf('Form', module)
  .addDecorator((story) => (
    <ThemeProvider theme={themeForProvider}>{story()}</ThemeProvider>
  ))
  .addDecorator(withKnobs)
  .add('Form', () => <FormComponent />)
  .add('StringField', () => (
    <StringField
      label={text('label', 'My Cool Label')}
      placeholder={text('placeholder', 'Placeholder')}
    />
  ))
  .add('TextField', () => (
    <TextField
      placeholder={text('placeholder', 'This is where a placeholder would go')}
      label={text('label', 'Description')}
    />
  ))
  .add('SelectField', () => {
    return (
      <SelectFieldWrapper
        Component={SelectField}
        size={select('Size', { sm: 'sm', md: 'md', lg: 'lg' }, 'md')}
      />
    );
  })
  .add('Label', () => <Label>My awesome field</Label>)
  .add('Checkbox', () => (
    <Form
      initialValues={{ test: false }}
      onSubmit={action('submitted')}
      validationSchema={object().shape({
        test: bool().oneOf([true], 'You have to set this'),
      })}
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Fieldset>
            <CheckboxForm name="test" label="React (4)" />
            <Button type="submit">Hello</Button>
          </Fieldset>
        </form>
      )}
    </Form>
  ))
  .add('DateRangeField', () => <DateRangeFieldWrapper />)
  .add('StringField with Button', () => {
    return (
      <StringFieldWithButtonForm
        buttonContent="Add"
        width="100%"
        placeholder={text('placeholder', 'Enter your url...')}
        label="Hello Friends!"
        validate={string()
          .required('Has to be there')
          .email('has to be email')}
        onSubmit={async ({ value, resetForm }) => {
          await sleep(300);
          console.log(value);
          resetForm();
        }}
      />
    );
  })
  .add('Tag', () => (
    <Tag onRequestRemove={action('hello')}>
      {text('content', 'Development')}
    </Tag>
  ));
