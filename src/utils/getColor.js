import { get } from 'lodash';

const getColor = (defaultColor = 'p') => ({ theme, color }) => {
  return get(theme, color, get(theme, defaultColor));
};

const getColorContrast = (defaultColor = 'p') => ({ theme, color }) => {
  return getColor(`${defaultColor}c`)({ theme, color: `color${color}` });
};

const getColorContrastShade = ({ defaultColor = 'p', shade = 600 }) => ({
  theme,
  color,
}) => {
  return getColorContrast(`${defaultColor}.${shade}`)({
    theme,
    color: `${color}.${shade}`,
  });
};

const getColorShade = ({ defaultColor = 'p', shade = 600 }) => ({
  theme,
  color,
}) => {
  return getColor(`${defaultColor}.${shade}`)({
    theme,
    color: `${color}.${shade}`,
  });
};

export { getColor, getColorShade, getColorContrast, getColorContrastShade };
