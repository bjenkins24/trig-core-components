import removeMarkdown from 'remove-markdown';

export const makeTextFragment = ({ url, string, tag = 'mark' }) => {
  if (!string) return url;

  const encodedString = encodeURIComponent(string)
    .split('-')
    .join('%2D');

  const splitOpenMark = removeMarkdown(
    // Remove any dashes that are followed by a space - that's markdown for a list that won't be remove
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
    // Trim first space if it exists
    if (prefix.substring(0, 3) === '%20') {
      prefix = prefix.substring(3);
    }
    if (marked.substring(0, 3) === '%20') {
      marked = marked.substring(3);
    }
    if (suffix.substring(0, 3) === '%20') {
      suffix = suffix.substring(3);
    }
    // Trim last space if it exists
    if (prefix.substring(prefix.length - 3) === '%20') {
      prefix = prefix.slice(0, -3);
    }
    if (marked.substring(marked.length - 3) === '%20') {
      marked = marked.slice(0, -3);
    }
    if (suffix.substring(suffix.length - 3) === '%20') {
      suffix = suffix.slice(0, -3);
    }

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
