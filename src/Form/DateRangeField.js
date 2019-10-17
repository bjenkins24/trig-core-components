import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { VerticalGroup } from '../Groups';
import { Body2 } from '../Typography';
import Popover from '../Popover';
import DatePicker from './DatePicker';
import { format, subMonths } from '../utils/dateFns';

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

const dateRangeFieldTypes = {
  defaultStartDate: PropTypes.instanceOf(Date),
  defaultEndDate: PropTypes.instanceOf(Date),
};

const defaultProps = {
  defaultStartDate: subMonths(new Date(), 1),
  defaultEndDate: new Date(),
};

const DateRangeField = ({ defaultStartDate, defaultEndDate }) => {
  const [startDate, setStartDate] = useState(defaultStartDate);
  const [endDate, setEndDate] = useState(defaultEndDate);

  return (
    <VerticalGroup>
      <Popover
        renderPopover={({ closePopover }) => (
          <DatePicker
            onChange={(date) => {
              setStartDate(date);
              closePopover();
            }}
          />
        )}
      >
        <Button>
          <ContentContainer>
            <Body2 color="ps.200">Starting</Body2>
            <EndContent>{format(startDate, 'MMMM d, yyyy')}</EndContent>
          </ContentContainer>
        </Button>
      </Popover>
      <Popover
        renderPopover={({ closePopover }) => (
          <DatePicker
            onChange={(date) => {
              setEndDate(date);
              closePopover();
            }}
          />
        )}
      >
        <Button>
          <ContentContainer>
            <Body2 color="ps.200">Ending</Body2>
            <EndContent>{format(endDate, 'MMMM d, yyyy')}</EndContent>
          </ContentContainer>
        </Button>
      </Popover>
    </VerticalGroup>
  );
};

DateRangeField.propTypes = dateRangeFieldTypes;
DateRangeField.defaultProps = defaultProps;

export default DateRangeField;
