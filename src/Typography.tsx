import React from 'react';
import styled, { css } from 'styled-components';
// @ts-ignore
import { device } from '@trig-app/constants';
import {
  position,
  shadow,
  space,
  color,
  typography,
  PositionProps,
  ColorProps,
  SpaceProps,
  TypographyProps,
  ShadowProps,
} from 'styled-system';
import Separator from './Separator';
import { AsType } from './utils/types';
import { Theme } from './utils/theme';

const buttonStyles = ({ as }: { as?: AsType }) => {
  if (as !== 'button') return false;
  return css`
    margin-top: 0;
    border: 0;
    padding: 0;
    cursor: pointer;
    font-family: hero-new, sans-serif;
    &:focus {
      outline: 0;
      color: ${({ theme }: { theme: Theme }) => theme.s};
    }
  `;
};

type StyleProps = SpaceProps &
  PositionProps &
  ColorProps &
  TypographyProps &
  ShadowProps & {
    dark: boolean;
    theme: Theme;
    as?: AsType;
  };

const styledSystem = () => {
  return css`
    ${position} 
    ${shadow}
    ${space}
    ${color}
    ${typography}
  `;
};

const HugeStyles = css<StyleProps>`
  font-size: 4.8rem;
  @media ${device.tabletPortraitUp} {
    font-size: 6.4rem;
  }
  line-height: 1.3;
  font-weight: 500;
  margin-top: 0;
  margin-bottom: 2.4rem;
  transition: all 0.15s;
  ${buttonStyles};
  ${styledSystem}
`;

const HugeComponent = styled.h1`
  ${HugeStyles}
`;

const Huge = (props: any) => (
  <Typography Component={HugeComponent} {...props} />
);

const Heading1Styles = css<StyleProps>`
  font-size: 3.4rem;
  line-height: 1.3;
  color: ${({ theme }) => theme.p};
  font-weight: 500;
  margin-top: 0;
  margin-bottom: 1.6rem;
  transition: all 0.15s;
  ${buttonStyles};
  ${styledSystem}
`;

const Heading1Component = styled.h1`
  ${Heading1Styles};
`;

const Heading1 = (props: any) => (
  <Typography Component={Heading1Component} {...props} />
);

const Heading2Styles = css<StyleProps>`
  font-size: 2.6rem;
  line-height: 1.3;
  font-weight: 600;
  color: ${({ theme }) => theme.s}
  margin-top: 0;
  transition: all 0.15s;
  ${buttonStyles};
  ${styledSystem}
`;

const Heading2Component = styled.h2.attrs({ color: 's' })`
  ${Heading2Styles}
`;

const Heading2 = (props: any) => (
  <Typography Component={Heading2Component} {...props} />
);

const Heading3Styles = css<StyleProps>`
  font-size: 1.5rem;
  line-height: 1.5;
  font-weight: 600;
  color: ${({ theme }) => theme.p};
  margin-top: 0;
  margin-bottom: 1.6rem;
  transition: all 0.15s;
  ${buttonStyles};
  ${styledSystem}
`;

const Heading3Component = styled.h3`
  ${Heading3Styles};
`;

const Heading3 = (props: any) => (
  <Typography Component={Heading3Component} {...props} />
);

const Heading4Styles = css<StyleProps>`
  font-size: 1.3rem;
  line-height: 1.7;
  color: ${({ theme }) => theme.bcs[200]};
  margin-top: 0;
  margin-bottom: 1.6rem;
  transition: all 0.15s;
  ${buttonStyles};
  ${styledSystem}
`;

const Heading4Component = styled.h4`
  ${Heading4Styles};
`;

const Heading4 = (props: any) => (
  <Typography Component={Heading4Component} {...props} />
);

const BodyBiggestStyles = css<StyleProps>`
  font-size: 2.1rem;
  line-height: 1.5;
  transition: all 0.15s;
  ${buttonStyles};
  ${styledSystem}
`;

const BodyBiggest = styled.span`
  ${BodyBiggestStyles}
`;

const BodyBigStyles = css<StyleProps>`
  font-size: 1.8rem;
  line-height: 1.5;
  transition: all 0.15s;
  ${buttonStyles};
  ${styledSystem}
`;

const BodyBig = styled.span`
  ${BodyBigStyles}
`;

const Body1Styles = css<StyleProps>`
  font-size: 1.6rem;
  line-height: 1.7;
  transition: all 0.15s;
  ${buttonStyles};
  ${styledSystem}
`;

const Body1Component = styled.span<StyleProps>`
  ${Body1Styles}
`;

const Body1 = (props: any) => {
  return <Typography Component={Body1Component} {...props} />;
};

const Body2Styles = css<StyleProps>`
  font-size: 1.4rem;
  line-height: 1.7;
  transition: all 0.15s;
  ${buttonStyles};
  ${styledSystem}
`;

const Body2Component = styled.span<StyleProps>`
  ${Body2Styles}
`;

const Body2 = (props: any) => (
  <Typography Component={Body2Component} {...props} />
);

const Body3Styles = css<StyleProps>`
  font-size: 1.1rem;
  line-height: 1.7;
  transition: all 0.15s;
  ${buttonStyles};
  ${styledSystem}
`;

const Body3Component = styled.span.attrs({
  'data-testid': 'typography',
})`
  ${Body3Styles}
`;

const Body3 = (props: any) => (
  <Typography Component={Body3Component} {...props} />
);

const TinyTextStyles = css<StyleProps>`
  font-size: 0.9rem;
  font-weight: 600;
  line-height: 1.3;
  text-transform: uppercase;
  transition: all 0.15s;
  ${buttonStyles};
  ${styledSystem}
`;

const TinyTextComponent = styled.span`
  ${TinyTextStyles};
`;

const TinyText = (props: any) => (
  <Typography
    data-testid="typography"
    Component={TinyTextComponent}
    {...props}
  />
);

const Container = styled.div`
  display: flex;
  align-items: center;
`;

interface NewTypographyProps {
  Component: any;
  separator: boolean;
  className?: string;
}

const Typography = ({
  Component,
  separator = false,
  className = '',
  ...restProps
}: NewTypographyProps) => {
  if (!separator) return <Component className={className} {...restProps} />;

  return (
    <Container data-testid="typography" className={className}>
      <Component
        style={{ flexShrink: 0, paddingRight: '1.6rem' }}
        {...restProps}
      />
      <Separator data-testid="typography__separator" />
    </Container>
  );
};

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
  BodyBiggestStyles,
  BodyBiggest,
  BodyBigStyles,
  BodyBig,
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
