import React, { forwardRef } from 'react';
import { Field } from 'react-final-form';
import StringField, { stringFieldTypes } from './StringField';

const StringFieldForm = forwardRef(({ label, name, ...restProps }, ref) => {
  return (
    <Field name={name}>
      {({ input, meta }) => {
        return (
          <StringField
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

StringFieldForm.propTypes = stringFieldTypes;

export default StringFieldForm;
