import { mungeHighlight, stopWords } from 'utils/mungeHighlight';

describe('mungeHighlight()', () => {
  it('combines correctly', () => {
    const string = `My Cool test <mark>Product</mark> _middle words_ <mark>Managers</mark> <mark>are</mark> <mark>cool</mark>. But <mark>full</mark>-<mark>text</mark> a <mark>card</mark>_<mark>id</mark> do one by <mark>a</mark> itself <mark>a</mark> <mark>later</mark> like right <mark>here</mark>`;

    const result = mungeHighlight({ string, tag: 'mark' });
    const expected = `My Cool test <mark>Product</mark> _middle words_ <mark>Managers are cool</mark>. But <mark>full-text</mark> a <mark>card_id</mark> do one by a itself <mark>a later</mark> like right <mark>here</mark>`;

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

  it('returns empty string if empty', () => {
    const results = mungeHighlight({ string: '', tag: 'mark' });
    expect(results).toEqual('');
  });

  it('works with multiple duplicate words', () => {
    const string = `<mark>Data</mark>** Decision Area The goal of the <mark>Data</mark> Decision Area is to help you define your overall <mark>Data</mark> Strategy. In a nutshell, you need to decide how <mark>data</mark> should flow through the stack to fulfill the user’s needs.`;

    const result = mungeHighlight({ string, tag: 'mark' });
    const expected = `<mark>Data</mark>** Decision Area The goal of the <mark>Data</mark> Decision Area is to help you define your overall <mark>Data</mark> Strategy. In a nutshell, you need to decide how <mark>data</mark> should flow through the stack to fulfill the user’s needs.`;

    expect(result).toEqual(expected);
  });

  it('works with double stop words', () => {
    const string = `<mark>Hello</mark> <mark>there</mark> my name <mark>is</mark> <mark>a</mark> cool one <mark>is</mark> <mark>a</mark> <mark>cool</mark> one.`;

    const result = mungeHighlight({ string, tag: 'mark' });
    const expected = `<mark>Hello there</mark> my name is a cool one <mark>is a cool</mark> one.`;

    expect(result).toEqual(expected);
  });
});
