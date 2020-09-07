/** @jsx jsx */
import { jsx } from 'theme-ui';

export interface HamburgerProps {
  color?: string;
  isOpen?: boolean;
}

export const Hamburger = ({
  color = 'pc',
  isOpen = false,
  ...restProps
}: HamburgerProps) => {
  const barStyles = {
    width: '35px',
    height: '3px',
    backgroundColor: color,
    transition: '0.2s',
    borderRadius: 1,
  };

  return (
    <div
      sx={{
        display: 'inline-block',
        cursor: 'pointer',
        '& > *:not(:last-child)': {
          marginBottom: (theme) => `${theme.space[2]}px`,
        },
      }}
      {...restProps}
    >
      <div
        sx={{
          ...barStyles,
          transform: isOpen
            ? 'rotate(-45deg) translate(-0.8rem, 0.6rem)'
            : 'none',
        }}
      />
      <div
        sx={{
          ...barStyles,
          opacity: isOpen ? '0' : '1',
        }}
        data-testid="hamburger__bar2"
      />
      <div
        sx={{
          ...barStyles,
          transform: isOpen
            ? 'rotate(45deg) translate(-0.9rem, -0.8rem)'
            : 'none',
        }}
      />
    </div>
  );
};
