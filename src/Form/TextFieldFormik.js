import React from 'react';
import { Field } from 'formik';
import { isEmpty } from 'lodash';
import TextField, { textFieldTypes } from './TextField';

const TextFieldFormik = ({ label, name, ...restProps }) => {
  return (
    <Field name={name}>
      {({ field, meta }) => {
        return (
          <TextField
            label={label}
            width="100%"
            {...field}
            {...restProps}
            error={meta.touched && !isEmpty(meta.error) && meta.error}
          />
        );
      }}
    </Field>
  );
};

TextFieldFormik.propTypes = textFieldTypes;

export default TextFieldFormik;
