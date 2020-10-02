import { css } from 'styled-components';

const getHeight = ({ height }) => {
  /* istanbul ignore next */
  if (!height) return false;
  if (
    (typeof height === 'string' && height.includes('%')) ||
    height === 'auto'
  ) {
    return css`
      height: ${height};
    `;
  }

  return css`
    height: ${height}rem;
  `;
};

export default getHeight;
