import React from 'react';
import styled from 'styled-components';
import Calendar from 'react-calendar/dist/entry.nostyle';
import { Body2Styles } from '../Typography';
import { format } from '../utils/dateFns';

const Container = styled.div`
  .react-calendar {
    width: 25.3rem;
    & button {
      border: 0;
      cursor: pointer;
      outline: none;
    }
    &__tile {
      ${Body2Styles}
      width: 3.6rem;
      height: 3.6rem;
      &--active {
        background: ${({ theme }) => theme.s};
        border-radius: 50%;
        color: ${({ theme }) => theme.sc};
      }
      &:hover {
        background: ${({ theme }) => theme.ps[100]};
        border-radius: 50%;
      }
    }
    &__month-view {
      &__days__day-neighboringMonth {
        color: ${({ theme }) => theme.ps[100]};
      }
      &__weekdays__weekday {
        ${Body2Styles}
        font-weight: 600;
        text-align: center;
        color: ${({ theme }) => theme.ps[200]};
        & abbr {
          text-decoration: none;
        }
      }
    }
    &__navigation__next2-button {
      display: none;
    }
    &__navigation__prev2-button {
      display: none;
    }
  }
`;

const DatePicker = () => {
  return (
    <Container>
      <Calendar
        formatShortWeekday={(locale, date) => {
          return format(date, 'EEEEE');
        }}
        calendarType="US"
        showFixedNumberOfWeeks
        maxDetail="month"
        minDetail="month"
        nextLabel2
      />
    </Container>
  );
};

export default DatePicker;
