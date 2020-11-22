const combineAdjacentTags = ({ string, tag }) => {
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
      // This is the first item with a highlight that's been matched
      /* istanbul ignore else */
      if (
        (typeof finalSplit[itemKey - 1] === 'string' ||
          finalSplit[itemKey - 1][1] !== ' ') &&
        splitItemKey === 0
      ) {
        finalArray.push(`<${tag}>${splitItem}`);
      } else if (finalArray[finalArray.length - 1].includes(`<${tag}>`)) {
        finalArray[finalArray.length - 1] = `${
          finalArray[finalArray.length - 1]
        }${splitItem}`;
      }
      // If the second key is _not_ a space that means the first item is the last one
      if (item[1] !== ' ' && splitItemKey === 0) {
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

export { combineAdjacentTags };
