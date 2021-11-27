import { readableDate } from '../dateFns';

describe('readableDate()', () => {
  it('converts a string correctly', () => {
    const result = readableDate('2021-10-13T16:34:58.000000Z');
    expect(result).toEqual('Oct 13');
  });
  it('converts a date object correctly', () => {
    const result = readableDate(new Date('2021-10-13T16:34:58.000000Z'));
    expect(result).toEqual('Oct 13');
  });
  it('converts minutes correctly', () => {
    const now = new Date();
    const date = now.setMinutes(now.getMinutes() - 10);
    const result = readableDate(date);
    expect(result).toEqual('10m');
  });
  it('converts seconds correctly', () => {
    const now = new Date();
    const date = now.setSeconds(now.getSeconds() - 35);
    const result = readableDate(date);
    expect(result).toEqual('1m');
  });
  it('converts hours correctly', () => {
    const now = new Date();
    const date = now.setHours(now.getHours() - 17);
    const result = readableDate(date);
    expect(result).toEqual('17h');
  });
  it('converts days correctly', () => {
    const now = new Date();
    const date = now.setHours(now.getHours() - 25);
    const result = readableDate(date);
    expect(result).not.toEqual('25h');
  });
});
