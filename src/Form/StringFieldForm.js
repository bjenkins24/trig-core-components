import React from 'react';
import { Field } from 'react-final-form';
import StringField, { stringFieldTypes } from './StringField';

const StringFieldForm = ({ label, name, ...restProps }) => {
  return (
    <Field name={name}>
      {({ input, meta }) => {
        return (
          <StringField
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

StringFieldForm.propTypes = stringFieldTypes;

export default StringFieldForm;
