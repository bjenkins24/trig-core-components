import { combineAdjacentTags } from 'utils/combineAdjacentTags';

describe('combineAdjacentTags()', () => {
  it('combines correctly', () => {
    const string = `<span>Product</span> <span>Managers</span> <span>are</span> <span>cool</span>. But let's do one by itself later like right <span>here</span>`;

    const result = combineAdjacentTags({ string, tag: 'span' });
    const expected = `<span>Product Managers are cool</span>. But let's do one by itself later like right <span>here</span>`;
    expect(result).toEqual(expected);
  });
});
