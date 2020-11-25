import removeMarkdown from 'remove-markdown';

const truncateOnWords = ({ string, totalWords, type }) => {
  const stringSplit = string.split('%20');
  let breakReduce = false;
  return stringSplit.reduce((accumulator, word, index) => {
    if (breakReduce) {
      return accumulator;
    }
    if (
      (type === 'suffix' && index > totalWords - 1) ||
      (type === 'prefix' && index < stringSplit.length - totalWords)
    ) {
      return accumulator;
    }
    if (word.includes('%0A') && type === 'prefix') {
      const prefixSplit = word
        .split('%0A')
        .join('%20')
        .split('%20');
      return prefixSplit[prefixSplit.length - 1];
    }
    if (word.includes('%0A') && type === 'suffix') {
      breakReduce = true;
      let previous = accumulator;
      /* istanbul ignore next */
      if (accumulator) {
        previous = `${accumulator}%20`;
      }
      return `${previous}${
        word
          .split('%0A')
          .join('%20')
          .split('%20')[0]
      }`;
    }
    if (accumulator) {
      return `${accumulator}%20${word}`;
    }
    return word;
  }, '');
};

const trimSpaces = (string) => {
  let newString = string;
  if (
    newString.substring(0, 3) === '%20' ||
    newString.substring(0, 3) === '%0A'
  ) {
    newString = newString.substring(3);
  }
  if (newString.substring(newString.length - 3) === '%20') {
    newString = newString.slice(0, -3);
  }
  return newString;
};

const mungeString = ({ string, type }) => {
  let newString = string;
  newString = trimSpaces(newString);
  newString = truncateOnWords({ string: newString, totalWords: 5, type });
  return newString;
};

export const makeTextFragment = ({ url, string, tag = 'mark' }) => {
  if (!string) return url;

  const encodedString = encodeURIComponent(string)
    .split('-')
    .join('%2D');

  const splitOpenMark = removeMarkdown(
    // Remove any dashes that are followed by a space - that's markdown for a list that won't be removed
    // because we just encoded it above
    encodedString
      .split('%2D%20')
      .join('')
      .split('**%20')
      .join('')
  ).split(`%3C${tag}%3E`);

  const splitCloseMark = splitOpenMark.map((splitMark) => {
    return splitMark.split(`%3C%2F${tag}%3E`);
  });

  let finalString = '';
  splitCloseMark.forEach((item, itemKey) => {
    if (item.length === 1) return;

    let prefix =
      splitCloseMark[itemKey - 1][splitCloseMark[itemKey - 1].length - 1];
    let [marked, suffix] = item;
    prefix = mungeString({ string: prefix, type: 'prefix' });
    // If there's a line break "%0A" then we should make it the textEnd
    const markedArray = trimSpaces(marked)
      .split('%0A')
      .join('%20')
      .split('%20');
    if (markedArray.length === 1) {
      [marked] = markedArray;
    } else {
      marked = `${markedArray[0]},${markedArray[markedArray.length - 1]}`;
    }

    suffix = mungeString({ string: suffix, type: 'suffix' });

    if (!finalString) {
      finalString = '#:~:text=';
    } else {
      finalString = `${finalString}&text=`;
    }
    if (prefix) {
      finalString = `${finalString}${prefix}-,`;
    }
    finalString = `${finalString}${marked}`;
    if (suffix) {
      finalString = `${finalString},-${suffix}`;
    }
  });

  return `${url}${finalString}`.substr(0, 1999);
};
