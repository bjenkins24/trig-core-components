import { mungeHighlight, stopWords } from 'utils/mungeHighlight';

describe('mungeHighlight()', () => {
  it('combines correctly', () => {
    const string = `My Cool test <mark>Product</mark> middle words <mark>Managers</mark> <mark>are</mark> <mark>cool</mark>. But <mark>full</mark>-<mark>text</mark> a <mark>card</mark>_<mark>id</mark> do one by <mark>a</mark> itself <mark>a</mark> <mark>later</mark> like right <mark>here</mark>`;

    const result = mungeHighlight({ string, tag: 'mark' });
    const expected = `My Cool test <mark>Product</mark> middle words <mark>Managers are cool</mark>. But <mark>full-text</mark> a <mark>card_id</mark> do one by a itself <mark>a later</mark> like right <mark>here</mark>`;

    expect(result).toEqual(expected);
  });

  it('avoids lonely stop words', () => {
    stopWords.forEach(function(word) {
      const testString = `Hello <mark>${word}</mark> name`;
      expect(mungeHighlight({ string: testString, tag: 'mark' })).toEqual(
        `Hello ${word} name`
      );
    });
  });
});
