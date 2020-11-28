const defaultLines = 7;

export const truncateBreakpoints = [
  { start: 222, end: 100000, totalLines: defaultLines },
  { start: 198, end: 221, totalLines: 6 },
  { start: 167, end: 197, totalLines: 5 },
  { start: 136, end: 166, totalLines: 4 },
  { start: 115, end: 135, totalLines: 3 },
  { start: 0, end: 114, totalLines: 0 },
];

export const truncateLines = ({ actualImageHeight, description }) => {
  if (!description) return defaultLines;

  return truncateBreakpoints.reduce((accumulator, breakpoint) => {
    if (
      actualImageHeight >= breakpoint.start &&
      actualImageHeight <= breakpoint.end
    ) {
      return breakpoint.totalLines;
    }
    return accumulator;
  }, JSON.parse(JSON.stringify(defaultLines)));
};
