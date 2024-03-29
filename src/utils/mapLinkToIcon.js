const mapLinkToIcon = (url) => {
  let host = '';
  try {
    host = new URL(url).hostname;
  } catch (error) {
    // If it's not a valid url it will fall through to 'link'
  }
  if (url.includes('docs.google') && url.includes('document')) {
    return 'type-google-doc';
  }
  if (url.includes('docs.google') && url.includes('spreadsheets')) {
    return 'type-google-sheet';
  }
  if (url.includes('docs.google') && url.includes('presentation')) {
    return 'type-google-slide';
  }
  if (url.includes('docs.google') && url.includes('forms')) {
    return 'type-google-form';
  }
  if (url.includes('mail.google')) {
    return 'type-gmail';
  }
  if (host.includes('amazon')) {
    return 'type-amazon';
  }
  if (host.includes('amplitude')) {
    return 'type-amplitude';
  }
  if (host.includes('airtable')) {
    return 'type-airtable';
  }
  if (host.includes('asana')) {
    return 'type-asana';
  }
  if (url.includes('basecamp')) {
    return 'type-basecamp';
  }
  if (host.includes('bitbucket')) {
    return 'type-bitbucket';
  }
  if (url.includes('clubhouse.io')) {
    return 'type-clubhouse';
  }
  if (host.includes('confluence')) {
    return 'type-confluence';
  }
  if (host.includes('facebook')) {
    return 'type-facebook';
  }
  if (host.includes('figma')) {
    return 'type-figma';
  }
  if (url.includes('github.com')) {
    return 'type-github';
  }
  if (host.includes('instagram')) {
    return 'type-instagram';
  }
  if (host.includes('jira')) {
    return 'type-jira';
  }
  if (host.includes('linkedin')) {
    return 'linked-in';
  }
  if (host.includes('notion')) {
    return 'type-notion';
  }
  if (host.includes('quora.com')) {
    return 'type-quora';
  }
  if (host.includes('stackoverflow.com')) {
    return 'type-stack-overflow';
  }
  if (host.includes('reddit.com')) {
    return 'type-reddit';
  }
  if (host.includes('trello')) {
    return 'type-trello';
  }
  if (host.includes('twitter')) {
    return 'type-twitter';
  }
  if (host.includes('typeform')) {
    return 'type-typeform';
  }
  if (host.includes('youtube') || host.includes('youtu.be')) {
    return 'type-youtube';
  }
  return 'link';
};

export default mapLinkToIcon;
