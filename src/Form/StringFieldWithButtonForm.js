import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form';
import { object } from 'yup';
import StringFieldWithButton from './StringFieldWithButton';
import Form from './Form';

const stringFieldWithButtonTypes = {
  onSubmit: PropTypes.func.isRequired,
  validate: PropTypes.object.isRequired,
  initialValue: PropTypes.string,
  buttonProps: PropTypes.object,
};

const defaultProps = {
  initialValue: '',
  buttonProps: {},
};

const StringFieldWithButtonForm = ({
  onSubmit,
  validate,
  initialValue,
  buttonProps,
  ...restProps
}) => {
  let handleResetForm = null;

  const handleSubmitForm = ({ input }) => {
    onSubmit({
      value: input,
      resetForm: () => setTimeout(handleResetForm),
    });
  };

  const buttonPropsMerged = {
    type: 'submit',
    ...buttonProps,
  };

  return (
    <Form
      initialValues={{ input: initialValue }}
      onSubmit={handleSubmitForm}
      validationSchema={object().shape({
        input: validate,
      })}
    >
      {({ handleSubmit, form }) => {
        if (!handleResetForm && form && form.reset) {
          handleResetForm = form.reset;
        }
        return (
          <form
            onSubmit={(e) => {
              handleSubmit(e);
              form.reset();
            }}
          >
            <Field name="input">
              {({ input, meta }) => {
                return (
                  <StringFieldWithButton
                    {...restProps}
                    buttonProps={buttonPropsMerged}
                    name={input.name}
                    value={input.value}
                    onChange={input.onChange}
                    error={meta.touched && meta.error}
                  />
                );
              }}
            </Field>
          </form>
        );
      }}
    </Form>
  );
};

StringFieldWithButtonForm.propTypes = stringFieldWithButtonTypes;
StringFieldWithButtonForm.defaultProps = defaultProps;

export default StringFieldWithButtonForm;
