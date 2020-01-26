import React from 'react';
import { Field } from 'react-final-form';
import TextField, { textFieldTypes } from './TextField';

const TextFieldForm = ({ label, name, ...restProps }) => {
  return (
    <Field name={name}>
      {({ input, meta }) => {
        return (
          <TextField
            label={label}
            width="100%"
            {...input}
            {...restProps}
            error={meta.touched && meta.error}
          />
        );
      }}
    </Field>
  );
};

TextFieldForm.propTypes = textFieldTypes;

export default TextFieldForm;
