/** @jsx jsx */
import { jsx, Flex } from 'theme-ui';

interface GroupProps {
  margin?: number;
  padding?: number;
  children: JSX.Element[];
}

const HorizontalGroup = ({ margin, padding, ...restProps }: GroupProps) => {
  return (
    <Flex
      sx={{
        alignItems: 'center',
        '> *:not(:last-child)': {
          marginRight: (theme) => (margin ? `${theme.space[margin]}px` : 0),
          paddingRight: (theme) => (padding ? `${theme.space[padding]}px` : 0),
        },
      }}
      {...restProps}
    />
  );
};

const VerticalGroup = ({ margin, padding, ...restProps }: GroupProps) => {
  return (
    <Flex
      sx={{
        flexDirection: 'column',
        '> *:not(:last-child)': {
          marginBottom: (theme) => (margin ? `${theme.space[margin]}px` : 0),
          paddingBottom: (theme) => (padding ? `${theme.space[padding]}px` : 0),
        },
      }}
      {...restProps}
    />
  );
};

export { HorizontalGroup, VerticalGroup };
