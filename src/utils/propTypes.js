import PropTypes from 'prop-types';

export const sizeProp = PropTypes.oneOf(['sm', 'md', 'lg']);
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
  PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
]);

export const widthType = PropTypes.oneOfType([percentType, PropTypes.number]);
