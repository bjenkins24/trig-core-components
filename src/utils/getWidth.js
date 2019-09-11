import { css } from 'styled-components';

const getWidth = ({ width }) => {
  if (typeof width === 'string' && width.includes('%')) {
    return css`
      width: ${width};
    `;
  }

  return css`
    width: ${width}rem;
  `;
};

export default getWidth;
