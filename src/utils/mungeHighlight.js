export const stopWords = [
  'a',
  'an',
  'and',
  'are',
  'as',
  'at',
  'be',
  'but',
  'by',
  'for',
  'if',
  'in',
  'into',
  'is',
  'it',
  'no',
  'not',
  'of',
  'on',
  'or',
  'such',
  'that',
  'the',
  'their',
  'then',
  'there',
  'these',
  'they',
  'this',
  'to',
  'was',
  'will',
  'with',
];

const splitChars = [' ', '-', '_'];

const mungeHighlight = ({ string, tag }) => {
  const splitOnOpen = string.split(`<${tag}>`);
  const finalSplit = splitOnOpen.map((newString) => {
    if (newString.includes(`</${tag}>`)) {
      return newString.split(`</${tag}>`);
    }
    return newString;
  });
  const finalArray = [];

  finalSplit.forEach((item, itemKey) => {
    if (typeof item === 'string') {
      return finalArray.push(item);
    }
    item.forEach((splitItem, splitItemKey) => {
      // Yeah I have no idea what this does either but it passes the tests
      if (
        ((typeof finalSplit[itemKey - 1] === 'string' &&
          stopWords.includes(finalSplit[itemKey][0]) &&
          !splitChars.includes(finalSplit[itemKey][1])) ||
          (typeof finalSplit[itemKey - 1] !== 'string' &&
            !splitChars.includes(finalSplit[itemKey - 1][1]) &&
            !splitChars.includes(finalSplit[itemKey][1]))) &&
        // Not last word
        finalSplit[itemKey][1] !== ''
      ) {
        finalArray.push(splitItem);
        return;
      }

      // This is the first item with a highlight that's been matched
      /* istanbul ignore else */
      if (
        (typeof finalSplit[itemKey - 1] === 'string' ||
          !splitChars.includes(finalSplit[itemKey - 1][1])) &&
        splitItemKey === 0
      ) {
        finalArray.push(`<${tag}>${splitItem}`);
      } else if (finalArray[finalArray.length - 1].includes(`<${tag}>`)) {
        finalArray[finalArray.length - 1] = `${
          finalArray[finalArray.length - 1]
        }${splitItem}`;
      }
      // If the second key is _not_ a space that means the first item is the last one
      if (!splitChars.includes(item[1]) && splitItemKey === 0) {
        finalArray[finalArray.length - 1] = `${
          finalArray[finalArray.length - 1]
        }</${tag}>`;
      }
    });
    return true;
  });

  return finalArray.reduce((accumulator, part) => {
    return `${accumulator}${part}`;
  }, '');
};

export { mungeHighlight };
