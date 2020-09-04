import { get } from 'lodash';
import { Theme } from './theme';

interface ColorProps {
  theme: Theme;
  color: string;
}

const getColor = (defaultColor = 'p') => ({ theme, color }: ColorProps) => {
  if (color && (color.includes('#') || color.includes('rgb'))) {
    return color;
  }
  return get(theme, color, get(theme, defaultColor));
};

const getColorContrast = (defaultColor = 'p') => ({
  theme,
  color,
}: ColorProps) => {
  return getColor(`${defaultColor}c`)({ theme, color: `color${color}` });
};

const getColorContrastShade = ({ defaultColor = 'p', shade = 600 }) => ({
  theme,
  color,
}: ColorProps) => {
  return getColorContrast(`${defaultColor}.${shade}`)({
    theme,
    color: `${color}.${shade}`,
  });
};

const getColorShade = ({ defaultColor = 'p', shade = 600 }) => ({
  theme,
  color,
}: ColorProps) => {
  return getColor(`${defaultColor}.${shade}`)({
    theme,
    color: `${color}.${shade}`,
  });
};

export { getColor, getColorShade, getColorContrast, getColorContrastShade };
