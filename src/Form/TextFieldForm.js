import React, { forwardRef } from 'react';
import { Field } from 'react-final-form';
import TextField, { textFieldTypes } from './TextField';

const TextFieldForm = forwardRef(({ label, name, ...restProps }, ref) => {
  return (
    <Field name={name}>
      {({ input, meta }) => {
        return (
          <TextField
            ref={ref}
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
});

TextFieldForm.propTypes = textFieldTypes;

export default TextFieldForm;
