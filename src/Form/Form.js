import React from 'react';
import PropTypes from 'prop-types';
import { Form as FinalForm } from 'react-final-form';
import createDecorator from 'final-form-focus';
import { get, set } from 'lodash';

const convertYupErrorsToFieldErrors = (yupErrors) => {
  return yupErrors.inner.reduce((errors, { path, message }) => {
    /* istanbul ignore next */
    if (get(errors, path)) {
      set(errors, path, `${get(errors, path)} ${message}`);
    } else {
      set(errors, path, message);
    }
    return errors;
  }, {});
};

const focusOnError = createDecorator();

const formTypes = {
  validationSchema: PropTypes.shape({ validate: PropTypes.func }),
  validate: PropTypes.func,
};

/* istanbul ignore next */
const defaultProps = {
  validationSchema: null,
  validate: () => null,
};

const Form = ({ validationSchema, validate, ...restProps }) => {
  return (
    <FinalForm
      decorators={[focusOnError]}
      {...restProps}
      validate={async (values) => {
        /* istanbul ignore else */
        if (validationSchema) {
          try {
            await validationSchema.validate(values, {
              abortEarly: false,
            });
          } catch (errors) {
            return convertYupErrorsToFieldErrors(errors);
          }
        }
        return validate(values);
      }}
    />
  );
};

Form.propTypes = formTypes;
Form.defaultProps = defaultProps;

export default Form;
