import React, { useState } from 'react';
import { render } from 'test/utils';
import user from '@testing-library/user-event';
import DateRangeField from 'Form/DateRangeField';

const DateRangeFieldWrapper = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (
    <div>
      <DateRangeField
        startDate={startDate}
        endDate={endDate}
        onSelectStart={(date) => setStartDate(date)}
        onSelectEnd={(date) => setEndDate(date)}
        clearStart={() => setStartDate(null)}
        clearEnd={() => setEndDate(null)}
      />
    </div>
  );
};

const selectDate = ({ type, date, getByTestId, getAllByText }) => {
  const button = getByTestId(`dateRangeField__${type}`);
  user.click(button);
  user.click(getAllByText(date)[0]);
};

describe('<DateRangeField />', () => {
  it('renders with basic props', () => {
    const { getAllByTitle, getByText } = render(<DateRangeFieldWrapper />);

    expect(getByText(/starting/i)).toBeInTheDocument();
    expect(getByText(/ending/i)).toBeInTheDocument();
    expect(getAllByTitle(/select date/i)[0]).toBeInTheDocument();
  });

  it('add and move start and end dates', () => {
    const {
      getByText,
      queryByText,
      getByTitle,
      getAllByText,
      getByTestId,
    } = render(<DateRangeFieldWrapper />);
    selectDate({ type: 'start', date: '1', getByTestId, getAllByText });
    expect(getByText(/november 1, 2000/i)).toBeInTheDocument();

    selectDate({ type: 'end', date: '20', getByTestId, getAllByText });
    expect(getByText(/november 20, 2000/i)).toBeInTheDocument();

    user.click(getByTitle(/remove start date/i));
    expect(queryByText(/november 1, 2000/i)).toBeNull();

    user.click(getByTitle(/remove end date/i));
    expect(queryByText(/november 20, 2000/i)).toBeNull();
  });

  it('removes dates if not possible', () => {
    const { queryByText, getAllByText, getByTestId, rerender } = render(
      <DateRangeFieldWrapper />
    );
    selectDate({ type: 'start', date: '20', getByTestId, getAllByText });
    selectDate({ type: 'end', date: '10', getByTestId, getAllByText });
    expect(queryByText(/november 20, 2000/i)).toBeNull();

    rerender(<DateRangeFieldWrapper />);
    selectDate({ type: 'end', date: '9', getByTestId, getAllByText });
    selectDate({ type: 'start', date: '10', getByTestId, getAllByText });
    expect(queryByText(/november 9, 2000/i)).toBeNull();
  });

  it('adjust by date duration if two dates are already selected', () => {
    const { getByText, getAllByText, getByTestId, rerender } = render(
      <DateRangeFieldWrapper />
    );
    selectDate({
      type: 'start',
      date: '18',
      getByTestId,
      getAllByText,
    });
    selectDate({
      type: 'end',
      date: '20',
      getByTestId,
      getAllByText,
    });
    selectDate({
      type: 'start',
      date: '21',
      getByTestId,
      getAllByText,
    });
    // Should move end by two to keep same date duration
    expect(getByText(/november 23, 2000/i)).toBeInTheDocument();

    rerender(<DateRangeFieldWrapper />);
    selectDate({
      type: 'start',
      date: '18',
      getByTestId,
      getAllByText,
    });
    selectDate({
      type: 'end',
      date: '20',
      getByTestId,
      getAllByText,
    });
    selectDate({
      type: 'end',
      date: '15',
      getByTestId,
      getAllByText,
    });
    // Should move end by two to keep same date duration
    expect(getByText(/november 13, 2000/i)).toBeInTheDocument();
  });
});
