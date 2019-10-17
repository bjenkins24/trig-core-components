import React from 'react';
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
  if (!newStart || !newEnd || !isBefore(newEnd, newStart))
    return { start: newStart, end: newEnd };

  let totalDaysRange = 0;
  if (currentEnd && currentStart) {
    totalDaysRange = differenceInDays(currentEnd, currentStart);
  }
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

const IconButton = styled.button`
  border: 0;
  background: none;
  cursor: pointer;
  padding: 0 0.2rem;
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
          closePopover();
          const typeMap = {
            start: () => onSelectStart(start),
            end: () => onSelectEnd(end),
          };
          typeMap[type]();
        }}
      />
    );
  };

  const renderEndContent = (type) => {
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
      return <Icon type="calendar" color="ps.200" size={1.6} />;
    }

    return (
      <HorizontalGroup margin={1.6}>
        <span>{format(date, 'MMMM d, yyyy')}</span>
        <IconButton type="button" onClick={clear}>
          <Icon type="close" size={1.2} color="ps.200" />
        </IconButton>
      </HorizontalGroup>
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
            <EndContent>{renderEndContent('start')}</EndContent>
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
            <EndContent>{renderEndContent('end')}</EndContent>
          </ContentContainer>
        </Button>
      </Popover>
    </VerticalGroup>
  );
};

DateRangeField.propTypes = dateRangeFieldTypes;
DateRangeField.defaultProps = defaultProps;

export default DateRangeField;
