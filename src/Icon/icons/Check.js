import React from 'react';
import IconWrapper from '../IconWrapper';
import propTypes from '../propTypes';

const Check = ({ title, ...restProps }) => {
  return (
    <IconWrapper title={title} {...restProps}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18.395 22.106l.803 3.51a2.88 2.88 0 012.799 2.879 2.884 2.884 0 01-2.886 2.885 2.884 2.884 0 01-2.888-2.885c0-1.048.564-1.955 1.399-2.46l.16-.09-.805-3.512c.492-.056.964-.17 1.418-.327zM19.1 26.8a1.75 1.75 0 100 3.5 1.75 1.75 0 000-3.5zm-9.325-9.527c.083.385.203.756.35 1.113l.117.265-4.487 1.502c.005.066.02.127.02.194a2.888 2.888 0 11-2.889-2.887c.944 0 1.78.456 2.308 1.158l.108.154 4.473-1.499zM2.9 18.6a1.75 1.75 0 100 3.5 1.75 1.75 0 000-3.5zm13.325-7.671a4.95 4.95 0 110 9.901 4.95 4.95 0 010-9.901zm12.89 3.336a2.885 2.885 0 110 5.772 2.88 2.88 0 01-2.812-2.264l-.032-.171-3.593-.355c.094-.442.145-.9.145-1.368l-.004-.08 3.594.356a2.884 2.884 0 012.702-1.89zm.015 1.135a1.75 1.75 0 100 3.5 1.75 1.75 0 000-3.5zM7.494 4.744a2.886 2.886 0 012.887 2.886c0 .432-.103.836-.275 1.202l-.092.18 1.947 1.84a6.51 6.51 0 00-.816.829l-.18.23-1.944-1.838a2.866 2.866 0 01-1.527.445 2.888 2.888 0 110-5.774zM23.577.62a2.886 2.886 0 110 5.774c-.208 0-.409-.03-.604-.075l-.192-.05-2.587 4.352a6.475 6.475 0 00-.984-.618l-.263-.127 2.579-4.34A2.885 2.885 0 0123.576.62zM7.5 5.85a1.75 1.75 0 100 3.5 1.75 1.75 0 000-3.5zM23.6 1.7a1.75 1.75 0 100 3.5 1.75 1.75 0 000-3.5z"
      />
    </IconWrapper>
  );
};

Check.defaultProps = {
  title: 'Check Icon',
};

Check.propTypes = propTypes;

export default Check;
