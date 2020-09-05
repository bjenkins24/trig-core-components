import React from 'react';

export type AsType = React.ElementType | keyof JSX.IntrinsicElements;

import { CSSProp } from 'styled-components';

declare module 'react' {
  interface Attributes {
    css?: CSSProp;
  }
}

declare namespace jest {
  interface Matchers<R> {
    toHaveStyleRule: import("jest-styled-components").jest.Matchers<R>["toHaveStyleRule"]
  }
}