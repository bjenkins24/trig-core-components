import get from 'lodash/get';

const getColor = (defaultColor = 'p') => ({ theme, color }) => {
  return get(theme, color, get(theme, defaultColor));
};

const getColorContrast = (defaultColor = 'p') => ({ theme, color }) => {
  return get(theme, `${color}c`, get(theme, `${defaultColor}c`));
};

const getColorContrastShade = (defaultColor = 'p', shade = 600) => ({
  theme,
  color,
}) => {
  return get(
    theme,
    `${color}cs.${shade}`,
    get(theme, `${defaultColor}cs.${shade}`)
  );
};

const getColorShade = (defaultColor = 'p', shade = 600) => ({
  theme,
  color,
}) => {
  return get(
    theme,
    `${color}s.${shade}`,
    get(theme, `${defaultColor}s.${shade}`)
  );
};

export { getColor, getColorShade, getColorContrast, getColorContrastShade };
