import React from 'react';
import { useField } from 'formik';
import { isEmpty } from 'lodash';
import StringField, { stringFieldTypes, defaultProps } from './StringField';

const StringFieldFormik = ({ label, ...restProps }) => {
  const [field, meta] = useField(restProps);

  const hasError = meta.touched && !isEmpty(meta.error);

  return (
    <StringField
      label={label}
      {...field}
      {...restProps}
      error={hasError && meta.error}
    />
  );
};

StringFieldFormik.propTypes = stringFieldTypes;
StringFieldFormik.defaultProps = defaultProps;

export default StringFieldFormik;
