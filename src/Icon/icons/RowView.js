import React from 'react';
import IconWrapper from '../IconWrapper';
import propTypes from '../propTypes';

const RowView = ({ title, ...restProps }) => {
  return (
    <IconWrapper title={title} {...restProps}>
      <path
        d="M29.829 21.566c1.203.014 2.17.9 2.17 1.99v2.478C32 27.12 31.029 28 29.83 28H2.199a2.295 2.295 0 0 1-1.553-.567 1.878 1.878 0 0 1-.646-1.4v-2.5c.015-1.09.995-1.967 2.198-1.967zm0 1.5H2.199a.577.577 0 0 0-.402.134.471.471 0 0 0-.169.357v2.501c0 .135.061.264.169.357a.577.577 0 0 0 .401.135h27.63c.3 0 .543-.22.543-.492v-2.501c0-.272-.243-.492-.542-.492zM2.199 12.807h27.63c1.15.013 2.086.825 2.165 1.85l.006.14V17.3c-.014 1.031-.893 1.873-2.01 1.959l-.161.007H2.199c-1.15 0-2.095-.798-2.191-1.819L0 17.3v-2.526c.014-1.04.908-1.886 2.036-1.96l.162-.006h27.63zm27.63 1.499H2.199a.577.577 0 0 0-.402.135.479.479 0 0 0-.161.276l-.008.08V17.3c0 .135.061.264.169.357.086.074.196.12.313.132l.088.002h27.63c.267 0 .489-.173.535-.403l.008-.088v-2.502c0-.271-.243-.491-.542-.491zM2.199 4h27.63c.58 0 1.135.21 1.543.583.362.331.581.767.621 1.229l.007.174v2.482c-.014 1.031-.893 1.873-2.01 1.959l-.161.007H2.199c-1.15 0-2.095-.799-2.191-1.819L0 8.468V5.966c0-.526.232-1.03.646-1.399.367-.328.85-.526 1.36-.561L2.198 4h27.63zm27.63 1.494H2.199a.577.577 0 0 0-.402.135.479.479 0 0 0-.161.277l-.008.08v2.502c0 .134.061.263.169.356.086.074.196.12.313.132l.088.003h27.63c.267 0 .489-.174.535-.403l.008-.088V5.986c0-.272-.243-.492-.542-.492z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconWrapper>
  );
};

RowView.defaultProps = {
  title: 'Row View Icon',
};

RowView.propTypes = propTypes;

export default RowView;
