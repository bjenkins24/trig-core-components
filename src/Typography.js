import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { get } from 'lodash';
import Separator from './Separator';
import { getColor } from './utils/getColor';

const getWeight = ({ weight }) => {
  const weightMap = {
    normal: 400,
    bold: 600,
  };
  return get(weightMap, weight, 400);
};

const buttonStyles = ({ as }) => {
  if (as !== 'button') return false;
  return css`
    margin-top: 0;
    border: 0;
    padding: 0;
    cursor: pointer;
    font-family: hero-new, sans-serif;
    &:focus {
      outline: 0;
      color: ${({ theme }) => theme.s};
    }
  `;
};

const HugeStyles = css`
  font-size: 6.4rem;
  line-height: 1.3;
  color: ${getColor()};
  font-weight: 500;
  margin-top: 0;
  margin-bottom: 2.4rem;
  ${buttonStyles};
`;

const HugeComponent = styled.h1`
  ${HugeStyles}
`;

const Huge = (props) => <Typography Component={HugeComponent} {...props} />;

const Heading1Styles = css`
  font-size: 3.4rem;
  line-height: 1.3;
  color: ${getColor()};
  font-weight: 500;
  margin-top: 0;
  margin-bottom: ${({ noMargin }) => (noMargin ? 0 : '1.6rem')};
  ${buttonStyles};
`;

const Heading1Component = styled.h1`
  ${Heading1Styles};
`;

const Heading1 = (props) => (
  <Typography Component={Heading1Component} marginBottom {...props} />
);

const Heading2Styles = css`
  font-size: 2.6rem;
  line-height: 1.3;
  font-weight: 600;
  color: ${getColor('s')};
  margin-top: 0;
  margin-bottom: ${({ noMargin }) => (noMargin ? 0 : '1.6rem')};
  ${buttonStyles};
`;

const Heading2Component = styled.h2`
  ${Heading2Styles}
`;

const Heading2 = (props) => (
  <Typography Component={Heading2Component} marginBottom {...props} />
);

const Heading3Styles = css`
  font-size: 1.5rem;
  line-height: 1.5;
  font-weight: 600;
  color: ${getColor()};
  margin-top: 0;
  margin-bottom: ${({ noMargin }) => (noMargin ? 0 : '1.6rem')};
  ${buttonStyles};
`;

const Heading3Component = styled.h3`
  ${Heading3Styles};
`;

const Heading3 = (props) => (
  <Typography Component={Heading3Component} marginBottom {...props} />
);

const Heading4Styles = css`
  font-size: 1.3rem;
  line-height: 1.7;
  color: ${getColor('bcs.200')};
  margin-top: 0;
  margin-bottom: ${({ noMargin }) => (noMargin ? 0 : '1.6rem')};
  ${buttonStyles};
`;

const Heading4Component = styled.h4`
  ${Heading4Styles};
`;

const Heading4 = (props) => (
  <Typography Component={Heading4Component} marginBottom {...props} />
);

const Body1Styles = css`
  font-size: 1.6rem;
  line-height: 1.7;
  font-weight: ${getWeight};
  color: ${getColor()};
  ${buttonStyles};
`;

const Body1Component = styled.span`
  ${Body1Styles}
`;

const Body1 = (props) => {
  return <Typography Component={Body1Component} {...props} />;
};

const Body2Styles = css`
  font-size: 1.4rem;
  line-height: 1.7;
  font-weight: ${getWeight};
  color: ${getColor()};
  ${buttonStyles};
`;

const Body2Component = styled.span`
  ${Body2Styles}
`;

const Body2 = (props) => <Typography Component={Body2Component} {...props} />;

const Body3Styles = css`
  font-size: 1.1rem;
  line-height: 1.7;
  font-weight: ${getWeight};
  color: ${getColor()};
  ${buttonStyles};
`;

const Body3Component = styled.span`
  ${Body3Styles}
`;

const Body3 = (props) => <Typography Component={Body3Component} {...props} />;

const TinyTextStyles = css`
  font-size: 0.9rem;
  font-weight: 600;
  line-height: 1.3;
  text-transform: uppercase;
  color: ${getColor()};
  ${buttonStyles};
`;

const TinyTextComponent = styled.span`
  ${TinyTextStyles};
`;

const TinyText = (props) => (
  <Typography Component={TinyTextComponent} {...props} />
);

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const typographyTypes = {
  Component: PropTypes.node.isRequired,
  separator: PropTypes.bool,
  marginBottom: PropTypes.bool,
  className: PropTypes.string,
};

const defaultProps = {
  separator: false,
  marginBottom: false,
  className: '',
};

const Typography = ({
  Component,
  separator,
  marginBottom,
  className,
  ...restProps
}) => {
  if (!separator) return <Component className={className} {...restProps} />;

  const getStyle = () => {
    if (marginBottom) {
      return { marginBottom: '1.6rem' };
    }
    return {};
  };

  return (
    <Container className={className} style={getStyle()}>
      <Component
        style={{ flexShrink: 0, paddingRight: '1.6rem' }}
        noMargin={marginBottom}
        {...restProps}
      />
      <Separator />
    </Container>
  );
};

Typography.propTypes = typographyTypes;
Typography.defaultProps = defaultProps;

export {
  HugeStyles,
  HugeComponent,
  Huge,
  Heading1Styles,
  Heading1Component,
  Heading1,
  Heading2Styles,
  Heading2Component,
  Heading2,
  Heading3Styles,
  Heading3Component,
  Heading3,
  Heading4Styles,
  Heading4Component,
  Heading4,
  Body1Styles,
  Body1Component,
  Body1,
  Body2Styles,
  Body2Component,
  Body2,
  Body3Styles,
  Body3Component,
  Body3,
  TinyTextStyles,
  TinyTextComponent,
  TinyText,
};
