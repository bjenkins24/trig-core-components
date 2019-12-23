import { percentType } from '../propTypes';

test('propTypes failing percent type', () => {
  const result = percentType({ test: 'hello' }, 'test', 'FakeComponent');
  expect(result).toBeInstanceOf(Error);
});

test('propTypes success percent type', () => {
  const result = percentType({ test: '100%' }, 'test', 'FakeComponent');
  expect(result).toBeTruthy();
});
