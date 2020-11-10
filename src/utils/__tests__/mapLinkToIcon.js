import mapLinkToIcon from 'utils/mapLinkToIcon';

test('mapLinkToIcon', () => {
  let link = mapLinkToIcon(
    'https://trello.com/c/uxyrQ6no/8554-when-editing-an-add-on-all-words-after-the-first-word-in-a-multi-word-add-on-name-are-deleted'
  );
  expect(link).toBe('type-trello');

  link = mapLinkToIcon('https://youtu.be/asjdkasldas/asda');
  expect(link).toBe('type-youtube');

  link = mapLinkToIcon('asjdkalsd');
  expect(link).toBe('link');
});
