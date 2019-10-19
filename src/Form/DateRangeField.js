import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { VerticalGroup, HorizontalGroup } from '../Groups';
import { Body2 } from '../Typography';
import Icon from '../Icon';
import Popover from '../Popover';
import DatePicker from './DatePicker';
import { format, addDays, differenceInDays, isBefore } from '../utils/dateFns';

/**
 * Make sure the start and end date and start and end time sync correctly, so users can't do
 * things like set the end date before the start date
 */
const syncStartEnd = ({ field, value, currentStart, currentEnd }) => {
  let newStart = field === 'start' ? value : currentStart;
  let newEnd = field === 'end' ? value : currentEnd;

  if (!isBefore(newEnd, newStart)) return { start: newStart, end: newEnd };

  const totalDaysRange = differenceInDays(currentEnd, currentStart);
  const fieldMap = {
    start: () => {
      newEnd = addDays(newStart, totalDaysRange);
      if (currentEnd && !currentStart) newEnd = null;
      return {
        start: newStart,
        end: newEnd,
      };
    },
    end: () => {
      newStart = addDays(newEnd, totalDaysRange * -1);
      if (currentStart && !currentEnd) newStart = null;
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
  &:hover .DateRangeField__Button__Label,
  &:hover .DateRangeField__CalendarIcon svg {
    color: ${({ theme }) => theme.ps[300]};
  }
`;

const ContentContainer = styled.div`
  display: flex;
`;

const IconButton = styled.button`
  border: 0;
  background: none;
  cursor: pointer;
  padding: 0.6rem;
  margin: -0.4rem;
  outline: none;
  &:hover,
  &:active,
  &:focus {
    svg {
      color: ${({ theme }) => theme.p};
    }
  }
`;

const EndContent = styled(Body2)`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

const dateRangeFieldTypes = {
  startDate: PropTypes.instanceOf(Date),
  endDate: PropTypes.instanceOf(Date),
  clearStart: PropTypes.func,
  clearEnd: PropTypes.func,
  onSelectStart: PropTypes.func,
  onSelectEnd: PropTypes.func,
};

const defaultProps = {
  startDate: null,
  endDate: null,
  clearStart: () => null,
  clearEnd: () => null,
  onSelectStart: () => null,
  onSelectEnd: () => null,
};

const DateRangeField = ({
  startDate,
  endDate,
  onSelectStart,
  onSelectEnd,
  clearStart,
  clearEnd,
}) => {
  const calendarRefStart = useRef(null);
  const calendarRefEnd = useRef(null);

  // eslint-disable-next-line react/prop-types
  const renderDatePicker = ({ closePopover, type }) => {
    const typeMap = {
      start: {
        date: startDate,
        activeStartDate: !startDate && endDate ? endDate : new Date(),
      },
      end: {
        date: endDate,
        activeStartDate: !endDate && startDate ? startDate : new Date(),
      },
    };

    return (
      <DatePicker
        activeStartDate={typeMap[type].activeStartDate}
        value={typeMap[type].date}
        onChange={(date) => {
          const { start, end } = syncStartEnd({
            field: type,
            value: date,
            currentStart: startDate,
            currentEnd: endDate,
          });
          closePopover();
          onSelectStart(start);
          onSelectEnd(end);
        }}
        maxDate={new Date()}
      />
    );
  };

  // eslint-disable-next-line react/prop-types
  const renderEndContent = ({ type, calendarRef }) => {
    const typeMap = {
      start: {
        date: startDate,
        clear: clearStart,
      },
      end: {
        date: endDate,
        clear: clearEnd,
      },
    };
    const { date, clear } = typeMap[type];
    if (!date) {
      return (
        <Icon
          title="Select date"
          type="calendar"
          color="ps.200"
          size={1.6}
          className="DateRangeField__CalendarIcon"
        />
      );
    }

    return (
      <HorizontalGroup margin={1.6}>
        <span>{format(date, 'MMMM d, yyyy')}</span>
        <IconButton type="button" onClick={clear} ref={calendarRef}>
          <Icon type="close" size={1.2} color="ps.200" />
        </IconButton>
      </HorizontalGroup>
    );
  };

  return (
    <VerticalGroup>
      <Popover
        preventClickRef={calendarRefStart}
        renderPopover={({ closePopover }) =>
          renderDatePicker({ closePopover, type: 'start' })
        }
      >
        <Button hasDate={!!startDate}>
          <ContentContainer>
            <Body2 color="ps.200" className="DateRangeField__Button__Label">
              Starting
            </Body2>
            <EndContent>
              {renderEndContent({
                type: 'start',
                calendarRef: calendarRefStart,
              })}
            </EndContent>
          </ContentContainer>
        </Button>
      </Popover>
      <Popover
        preventClickRef={calendarRefEnd}
        renderPopover={({ closePopover }) =>
          renderDatePicker({ closePopover, type: 'end' })
        }
      >
        <Button hasDate={!!endDate}>
          <ContentContainer>
            <Body2 color="ps.200" className="DateRangeField__Button__Label">
              Ending
            </Body2>
            <EndContent>
              {renderEndContent({ type: 'end', calendarRef: calendarRefEnd })}
            </EndContent>
          </ContentContainer>
        </Button>
      </Popover>
    </VerticalGroup>
  );
};

DateRangeField.propTypes = dateRangeFieldTypes;
DateRangeField.defaultProps = defaultProps;

export default DateRangeField;
