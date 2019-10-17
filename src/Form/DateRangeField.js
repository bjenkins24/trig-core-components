import React from 'react';
import styled from 'styled-components';
import { VerticalGroup } from '../Groups';
import { Body2 } from '../Typography';
import Popover from '../Popover';
import DatePicker from './DatePicker';

const Button = styled.button.attrs({
  type: 'button',
})`
  cursor: pointer;
  outline: none;
  border: 0.1rem solid ${({ theme }) => theme.ps[100]};
  background: ${({ theme }) => theme.b};
  padding: 0.8rem 1.6rem;
  &:first-child {
    border-radius: ${({ theme }) => `${theme.br} ${theme.br} 0 0`};
  }
  &:nth-child(2) {
    border-top: 0;
  }
  &:last-child {
    border-radius: ${({ theme }) => `0 0 ${theme.br} ${theme.br}`};
  }
`;

const ContentContainer = styled.div`
  display: flex;
`;

const EndContent = styled(Body2)`
  margin-left: auto;
`;

const DateRangeField = () => {
  return (
    <VerticalGroup>
      <Popover renderPopover={() => <DatePicker />}>
        <Button>
          <ContentContainer>
            <Body2 color="ps.200">Starting</Body2>
            <EndContent>January 2, 2019</EndContent>
          </ContentContainer>
        </Button>
      </Popover>
      <Popover renderPopover={() => <DatePicker />}>
        <Button>
          <ContentContainer>
            <Body2 color="ps.200">Ending</Body2>
            <EndContent>March 15, 2019</EndContent>
          </ContentContainer>
        </Button>
      </Popover>
    </VerticalGroup>
  );
};

export default DateRangeField;
