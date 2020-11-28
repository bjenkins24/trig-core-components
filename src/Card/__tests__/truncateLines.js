import { truncateLines, truncateBreakpoints } from 'Card/truncateLines';

describe('truncate lines', () => {
  it('truncate lines at breakpoints', () => {
    let result = truncateLines({
      actualImageHeight: 240,
      description: '',
    });
    // If no description it will just return the default lines
    expect(result).toEqual(7);

    truncateBreakpoints.forEach((breakpoint) => {
      result = truncateLines({
        actualImageHeight: breakpoint.start,
        description: 'My cool description',
      });
      expect(result).toEqual(breakpoint.totalLines);
      result = truncateLines({
        actualImageHeight: breakpoint.start,
        description: 'My cool description',
      });
      expect(result).toEqual(breakpoint.totalLines);
    });
  });
});
