import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { VerticalGroup } from '../Groups';
import { Body2 } from '../Typography';
import Popover from '../Popover';
import DatePicker from './DatePicker';
import {
  format,
  subMonths,
  addDays,
  differenceInDays,
  isBefore,
} from '../utils/dateFns';

/**
 * Make sure the start and end date and start and end time sync correctly, so users can't do
 * things like set the end date before the start date
 *
 * @param field
 * @param value
 * @param subField
 * @param values
 * @returns {*}
 */
const syncStartEnd = ({ field, value, currentStart, currentEnd }) => {
  let newStart = field === 'start' ? value : currentStart;
  let newEnd = field === 'end' ? value : currentEnd;
  if (!isBefore(newEnd, newStart)) return { start: newStart, end: newEnd };

  const totalDaysRange = differenceInDays(currentEnd, currentStart);
  const fieldMap = {
    start: () => {
      newEnd = addDays(newStart, totalDaysRange);
      return {
        start: newStart,
        end: newEnd,
      };
    },
    end: () => {
      newStart = addDays(newEnd, totalDaysRange * -1);
      return {
        start: newStart,
        end: newEnd,
      };
    },
  };

  return fieldMap[field]();
};

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
  onSelectStart: PropTypes.func,
  onSelectEnd: PropTypes.func,
};

const defaultProps = {
  defaultStartDate: subMonths(new Date(), 1),
  defaultEndDate: new Date(),
  onSelectStart: () => null,
  onSelectEnd: () => null,
};

const DateRangeField = ({
  defaultStartDate,
  defaultEndDate,
  onSelectStart,
  onSelectEnd,
}) => {
  const [startDate, setStartDate] = useState(defaultStartDate);
  const [endDate, setEndDate] = useState(defaultEndDate);

  const getCorrectDate = (type) => {
    const typeMap = {
      start: startDate,
      end: endDate,
    };
    return typeMap[type];
  };

  // eslint-disable-next-line react/prop-types
  const renderDatePicker = ({ closePopover, type }) => {
    return (
      <DatePicker
        value={getCorrectDate(type)}
        onChange={(date) => {
          const { start, end } = syncStartEnd({
            field: type,
            value: date,
            currentStart: startDate,
            currentEnd: endDate,
          });
          setStartDate(start);
          setEndDate(end);
          closePopover();
          const typeMap = {
            start: onSelectStart,
            end: onSelectEnd,
          };
          typeMap[type]();
        }}
      />
    );
  };

  return (
    <VerticalGroup>
      <Popover
        renderPopover={({ closePopover }) =>
          renderDatePicker({ closePopover, type: 'start' })
        }
      >
        <Button>
          <ContentContainer>
            <Body2 color="ps.200">Starting</Body2>
            <EndContent>{format(startDate, 'MMMM d, yyyy')}</EndContent>
          </ContentContainer>
        </Button>
      </Popover>
      <Popover
        renderPopover={({ closePopover }) =>
          renderDatePicker({ closePopover, type: 'end' })
        }
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
