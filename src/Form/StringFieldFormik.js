import React from 'react';
import { useField } from 'formik';
import { isEmpty } from 'lodash';
import StringField, { stringFieldTypes } from './StringField';

const StringFieldFormik = ({ label, ...restProps }) => {
  const [field, meta] = useField(restProps);

  const hasError = meta.touched && !isEmpty(meta.error);

  return (
    <StringField
      label={label}
      width="100%"
      {...field}
      {...restProps}
      error={hasError && meta.error}
    />
  );
};

StringFieldFormik.propTypes = stringFieldTypes;

export default StringFieldFormik;
