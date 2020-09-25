import React from 'react';
import styled, { css } from 'styled-components';
import Calendar from 'react-calendar/dist/entry.nostyle';
import { Body2Styles } from 'Typography';
import Icon from '../Icon';
import { format } from '../utils/dateFns';

const calendarTheme = () => {
  return css`
    background: ${({ theme }) => theme.p};
    color: ${({ theme }) => theme.pc};
  `;
};

const Container = styled.div`
  .react-calendar {
    width: 25.3rem;
    & button {
      border: 0;
      cursor: pointer;
      outline: none;
    }
    &__tile {
      &[disabled] {
        color: ${({ theme }) => theme.ps[400]};
        cursor: default;
        &:hover {
          background: none;
          color: ${({ theme }) => theme.ps[400]} !important;
        }
      }
      ${Body2Styles}
      ${calendarTheme}
      width: 3.6rem;
      height: 3.6rem;
      border-radius: 50%;

      &--active,
      &:hover {
        background: ${({ theme }) => theme.s};
        color: ${({ theme }) => theme.sc} !important;
      }
    }
    &__month-view {
      &__days__day--neighboringMonth {
        color: ${({ theme }) => theme.ps[200]};
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
    &__navigation {
      margin-bottom: 1.6rem;
      &__arrow {
        &[disabled] {
          cursor: default;
          color: ${({ theme }) => theme.ps[400]};
          &:hover {
            transform: scale(1);
          }
        }
        ${calendarTheme};
        transition: transform 0.2s;
        &:hover {
          transform: scale(1.5);
        }
      }
      &__label {
        ${Body2Styles}
        ${calendarTheme}
        cursor: default !important;
        font-weight: 600;
      }
      &__next2-button {
        display: none;
      }
      &__prev2-button {
        display: none;
      }
    }
  }
`;

const DatePicker = (props) => {
  return (
    <Container>
      <Calendar
        formatShortWeekday={(locale, date) => {
          return format(date, 'EEEEEE');
        }}
        calendarType="US"
        showFixedNumberOfWeeks
        nextLabel={<Icon size={1.2} type="arrow-right" />}
        prevLabel={<Icon size={1.2} type="arrow-left" />}
        maxDetail="month"
        minDetail="month"
        {...props}
      />
    </Container>
  );
};

export default DatePicker;
