import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import get from 'lodash/get';
import capitalize from 'lodash/capitalize';
import { TinyText } from '../Typography';
import { getColor } from '../utils/getColor';
import mapIconTypes from './mapIconTypes';
import iconTypePropTypes from './iconTypePropTypes';

const files = require.context('./icons', false, /.*\.svg$/);
files.keys().forEach(files);

const getTitle = ({ title, mappedIcon, type }) => {
  if (title) return title;
  return get(mappedIcon, 'title', `${capitalize(type)} icon`);
};

const Container = styled.div`
  display: flex;
  position: relative;
`;

const StyledSvg = styled.svg`
  color: ${({ color }) => (color ? getColor() : 'inherit')};
  margin: 0 auto;
`;

const CountContainer = styled.div`
  width: ${({ count }) => (count > 9 ? '1.7rem' : '1.4rem')};
  height: 1.4rem;
  background: ${({ theme }) => theme.s};
  border-radius: 50%;
  display: flex;
  align-items: center;
  position: absolute;
  right: -0.6rem;
  top: -0.6rem;
`;

const Count = styled(TinyText)`
  margin: 0 auto;
  padding-top: 0.1rem;
`;

const iconTypes = {
  type: iconTypePropTypes.isRequired,
  size: PropTypes.number,
  title: PropTypes.string,
  desc: PropTypes.string,
  color: PropTypes.string,
  count: PropTypes.number,
};

const defaultProps = {
  size: 3.2,
  desc: '',
  title: '',
  count: 0,
  color: null,
};

const Icon = forwardRef(
  ({ type, size, title, desc, color, count, ...restProps }, ref) => {
    const mappedIcon = mapIconTypes(type);

    return (
      <Container {...restProps}>
        {count !== 0 && (
          <CountContainer count={count}>
            <Count color="sc">{count}</Count>
          </CountContainer>
        )}
        <StyledSvg
          ref={ref}
          width={`${size}rem`}
          height={`${size}rem`}
          color={color}
          role="img"
        >
          <title>{getTitle({ title, mappedIcon, type })}</title>
          <desc>{desc}</desc>
          <use xlinkHref={`#${mappedIcon.type}`} />
        </StyledSvg>
      </Container>
    );
  }
);

Icon.propTypes = iconTypes;
Icon.defaultProps = defaultProps;

export default Icon;
