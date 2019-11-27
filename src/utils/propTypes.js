import PropTypes from 'prop-types';

export const sizeProp = PropTypes.oneOf(['sm', 'md', 'lg', 'hg']);
export const cardType = PropTypes.oneOf(['doc']);

const percentType = (props, propName, componentName) => {
  const propValue = props[propName];
  if (typeof propValue === 'string' && !propValue.includes('%')) {
    return new Error(
      `Invalid prop ${propName} supplied to ${componentName}. ${propValue} provided. A string must contain a %.`
    );
  }
  return true;
};

export const refType = PropTypes.oneOfType([
  PropTypes.func,
  PropTypes.shape({ current: PropTypes.any }),
]);

export const placementType = PropTypes.oneOf([
  'auto',
  'auto-start',
  'auto-end',
  'top',
  'top-start',
  'top-end',
  'right',
  'right-start',
  'right-end',
  'bottom',
  'bottom-start',
  'bottom-end',
  'left',
  'left-start',
  'left-end',
]);

export const widthType = PropTypes.oneOfType([percentType, PropTypes.number]);
