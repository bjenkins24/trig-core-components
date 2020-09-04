import React, { ReactNode } from 'react';
import { HorizontalGroup } from '../Groups';
import { VariantType } from './types';

interface TabListProps {
  variant?: VariantType;
  children: ReactNode[];
}

const TabList = ({
  variant = 'dark',
  children,
  ...restProps
}: TabListProps) => {
  return (
    <HorizontalGroup role="tablist" {...restProps}>
      {React.Children.map(children, (child, i) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            tabIndex: i,
            variant,
          });
        }
      })}
    </HorizontalGroup>
  );
};

export default TabList;
