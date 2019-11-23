import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { get, capitalize } from 'lodash';
import { getColor } from '../utils/getColor';
import mapIconTypes from './mapIconTypes';
import iconTypePropTypes from './iconTypePropTypes';

const files = require.context('./icons', false, /.*\.svg$/);
files.keys().forEach(files);

const getTitle = ({ title, mappedIcon, type }) => {
  if (title) return title;
  return get(mappedIcon, 'title', `${capitalize(type)} Icon`);
};

const Container = styled.div`
  display: flex;
  position: relative;
`;

const StyledSvg = styled.svg`
  color: ${({ color }) => (color ? getColor() : 'inherit')};
  margin: 0 auto;
  transition: all 0.2s;
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

const Count = styled.span`
  margin: 0 auto;
  padding-top: 0.1rem;
  font-size: 0.9rem;
  font-weight: 600;
  line-height: 1.3;
  text-transform: uppercase;
  color: ${({ theme }) => theme.sc};
`;

export const iconTypes = {
  type: iconTypePropTypes.isRequired,
  size: PropTypes.number,
  title: PropTypes.string,
  desc: PropTypes.string,
  color: PropTypes.string,
  count: PropTypes.number,
  defaultIfNoExtension: PropTypes.string,
};

const defaultProps = {
  size: 3.2,
  desc: '',
  title: '',
  count: 0,
  color: null,
  defaultIfNoExtension: null,
};

const Icon = forwardRef(
  (
    {
      type,
      size,
      title,
      desc,
      color,
      count,
      defaultIfNoExtension,
      ...restProps
    },
    ref
  ) => {
    const mappedIcon = mapIconTypes(type);
    if (!mappedIcon.type.includes('type-') && defaultIfNoExtension) {
      mappedIcon.type = defaultIfNoExtension;
    }

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
