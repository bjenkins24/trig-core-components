import React, { useState } from 'react';
import { render } from 'test/utils';
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

describe('<DateRangeField />', () => {
  it('renders with basic props', () => {
    const { getAllByTitle, getByText } = render(<DateRangeFieldWrapper />);

    expect(getByText(/starting/i)).toBeInTheDocument();
    expect(getByText(/ending/i)).toBeInTheDocument();
    expect(getAllByTitle(/select date/i)).toBeTruthy();
  });
});
