import React from 'react';
import { useField } from 'formik';
import { isEmpty } from 'lodash';
import TextField, { textFieldTypes, defaultProps } from './TextField';

const TextFieldFormik = ({ label, ...restProps }) => {
  const [field, meta] = useField(restProps);

  const hasError = meta.touched && !isEmpty(meta.error);

  return (
    <TextField
      label={label}
      {...field}
      {...restProps}
      error={hasError && meta.error}
    />
  );
};

TextFieldFormik.propTypes = textFieldTypes;
TextFieldFormik.defaultProps = defaultProps;

export default TextFieldFormik;
