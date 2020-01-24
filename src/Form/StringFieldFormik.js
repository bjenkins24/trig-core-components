import React from 'react';
import { Field } from 'formik';
import { isEmpty } from 'lodash';
import StringField, { stringFieldTypes } from './StringField';

const StringFieldFormik = ({ label, name, ...restProps }) => {
  return (
    <Field name={name}>
      {({ field, meta }) => {
        return (
          <StringField
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

StringFieldFormik.propTypes = stringFieldTypes;

export default StringFieldFormik;
