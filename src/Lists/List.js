import React from 'react';
import styled from 'styled-components';

const Container = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  & > li:not(:last-child) a,
  & > li:not(:last-child) {
    border-bottom: 0;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
  & > li:not(:first-child) a,
  & > li:not(:first-child) {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
  & > li:first-child a,
  & > li:first-child {
    border-top-left-radius: ${({ theme }) => theme.br};
    border-top-right-radius: ${({ theme }) => theme.br};
  }
  & > li:first-child > div:first-child a,
  & > li:first-child > div:first-child {
    border-top-left-radius: ${({ theme }) => theme.br};
  }
  & > li:last-child a,
  & > li:last-child {
    border-bottom-left-radius: ${({ theme }) => theme.br};
    border-bottom-right-radius: ${({ theme }) => theme.br};
  }
  & > li:last-child > div:first-child a,
  & > li:last-child > div:first-child {
    border-bottom-left-radius: ${({ theme }) => theme.br};
  }
`;

const List = (props) => {
  return <Container {...props} />;
};

export default List;
