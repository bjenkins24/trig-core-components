import React from 'react';
import { Field } from 'react-final-form';
import Checkbox, { checkboxTypes } from './Checkbox';

const CheckboxForm = ({ label, name, ...restProps }) => {
  return (
    <Field name={name} type="checkbox">
      {({ input, meta }) => {
        return (
          <Checkbox
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

CheckboxForm.propTypes = checkboxTypes;

export default CheckboxForm;
