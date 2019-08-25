import get from 'lodash/get';

const getColor = (defaultColor = 'p') => ({ theme, color }) => {
  return get(theme, color, get(theme, defaultColor));
};

export default getColor;
