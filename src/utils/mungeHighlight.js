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

const splitChars = [' ', '-', '_', '/'];

const mungeHighlight = ({ string, tag }) => {
  if (!string) return string;
  const splitOnOpen = string.split(`<${tag}>`);
  const finalSplit = splitOnOpen.map((newString) => {
    if (newString.includes(`</${tag}>`)) {
      return newString.split(`</${tag}>`);
    }
    return newString;
  });
  const finalArray = [];

  let markIsOpen = true;
  finalSplit.forEach((item, itemKey) => {
    if (typeof item === 'string') {
      return finalArray.push(item);
    }
    item.forEach((splitItem, splitItemKey) => {
      // Mutltiple stop words next to each other
      let isOnlyStopWord = false;
      for (let i = itemKey; i < finalSplit.length; i += 1) {
        if (!stopWords.includes(finalSplit[i][0])) {
          isOnlyStopWord = false;
          break;
        } else if (!markIsOpen) {
          isOnlyStopWord = true;
        }
        // Stop looking for end of mark
        if (!splitChars.includes(finalSplit[i][1]) || finalSplit[i][1] === '') {
          break;
        }
      }

      // Yeah I have no idea what this does either but it passes the tests
      if (
        // If the current item key is followed ONLY by stop words we just want to
        // push it through
        isOnlyStopWord ||
        (((typeof finalSplit[itemKey - 1] === 'string' &&
          stopWords.includes(finalSplit[itemKey][0]) &&
          !splitChars.includes(finalSplit[itemKey][1])) ||
          (typeof finalSplit[itemKey - 1] !== 'string' &&
            // Last array second value is NOT a split char
            !splitChars.includes(finalSplit[itemKey - 1][1]) &&
            // this array second value is NOT a split char
            !splitChars.includes(finalSplit[itemKey][1]) &&
            stopWords.includes(finalSplit[itemKey][0]))) &&
          // Not last word
          finalSplit[itemKey][1] !== '')
      ) {
        finalArray.push(splitItem);
        return;
      }

      /* istanbul ignore next */
      if (finalSplit[itemKey - 1][1])
        if (
          typeof finalSplit[itemKey - 1] === 'string' &&
          stopWords.includes(finalSplit[itemKey][0])
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
        markIsOpen = true;
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
        markIsOpen = false;
      }
    });
    return true;
  });

  return finalArray.reduce((accumulator, part) => {
    return `${accumulator}${part}`;
  }, '');
};

export { mungeHighlight };
