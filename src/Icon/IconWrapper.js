import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getColor } from '../utils';

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
  children: PropTypes.node.isRequired,
  size: PropTypes.number,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string,
  color: PropTypes.string,
  count: PropTypes.number,
  defaultIfNoExtension: PropTypes.string,
  svgProps: PropTypes.shape({
    className: PropTypes.string,
    preserveAspectRatio: PropTypes.string,
    style: PropTypes.object,
    viewBox: PropTypes.string,
  }),
};

const defaultProps = {
  size: 3.2,
  desc: '',
  count: 0,
  color: null,
  defaultIfNoExtension: null,
  svgProps: {},
};

const IconWrapper = forwardRef(
  (
    { children, size, title, desc, color, count, svgProps, ...restProps },
    ref
  ) => {
    return (
      <Container {...restProps}>
        {count !== 0 && (
          <CountContainer
            count={count}
            data-testid="iconWrapper__countContainer"
          >
            <Count color="sc">{count}</Count>
          </CountContainer>
        )}
        <StyledSvg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          ref={ref}
          width={`${size}rem`}
          height={`${size}rem`}
          color={color}
          role="img"
          {...svgProps}
        >
          {children}
          <title>{title}</title>
          <desc>{desc}</desc>
        </StyledSvg>
      </Container>
    );
  }
);

IconWrapper.propTypes = iconTypes;
IconWrapper.defaultProps = defaultProps;

export default IconWrapper;
