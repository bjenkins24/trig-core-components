import { makeTextFragment } from '../makeTextFragment';

describe('makeTextFragment()', () => {
  it('makes a text fragment in the url', () => {
    const newUrl = makeTextFragment({
      string:
        '- <mark>Hello, & there my name</mark> cool things happen for <mark>real -</mark> my name _is_ **john**. <mark>Please stop me</mark>',
      url: 'https://google.com/',
    });
    expect(newUrl).toEqual(
      'https://google.com/#:~:text=Hello%2C%20%26%20there%20my%20name,-cool%20things%20happen%20for&text=cool%20things%20happen%20for-,real%20%2D,-my%20name%20is%20john.&text=my%20name%20is%20john.-,Please%20stop%20me'
    );
  });

  it('truncates urls correctly', () => {
    // This string is too long and should get truncated like below
    const string =
      '<mark>I am testing a url with 2049 characters it shouldnt be so long I am testing a url with 2049 characters it shouldnt be so long I am testing a url with 2049 characters it shouldnt be so long I am testing a url with 2049 characters it shouldnt be so long I am testing a url with 2049 characters it shouldnt be so long I am testing a url with 2049 characters it shouldnt be so long I am testing a url with 2049 characters it shouldnt be so long I am testing a url with 2049 characters it shouldnt be so long I am testing a url with 2049 characters it shouldnt be so long I am testing a url with 2049 characters it shouldnt be so long I am testing a url with 2049 characters it shouldnt be so long I am testing a url with 2049 characters it shouldnt be so long I am testing a url with 2049 characters it shouldnt be so long I am testing a url with 2049 characters it shouldnt be so long I am testing a url with 2049 characters it shouldnt be so long I am testing a url with 2049 characters it shouldnt be so longI am testing a url with 2049 characters it shouldnt be so long I am testing a url with 2049 characters it shouldnt be so long I am testing a url with 2049 characters it shouldnt be so long I am testing a url with 2049 characters it shouldnt be so long I am testing a url with 2049 characters it shouldnt be so long I am testing a url with 2049 characters it shouldnt be so long I am testing a url with 2049 characters it shouldnt be so long I am testing a url with 2049 characters it shouldnt be so long I am testing a url with 2049 characters it shouldnt be so long I am testing a url with 2049 characters it shouldnt be so long I am testing a url with 2049 characters it shouldnt be so long I am testing a url with 2049 characters it shouldnt be so long I am testing a url with 2049 characters it shouldnt be so long </mark>';

    const newUrl = makeTextFragment({
      string,
      url: 'https://google.com/',
    });

    const expectedTruncatedUrl =
      'https://google.com/#:~:text=I%20am%20testing%20a%20url%20with%202049%20characters%20it%20shouldnt%20be%20so%20long%20I%20am%20testing%20a%20url%20with%202049%20characters%20it%20shouldnt%20be%20so%20long%20I%20am%20testing%20a%20url%20with%202049%20characters%20it%20shouldnt%20be%20so%20long%20I%20am%20testing%20a%20url%20with%202049%20characters%20it%20shouldnt%20be%20so%20long%20I%20am%20testing%20a%20url%20with%202049%20characters%20it%20shouldnt%20be%20so%20long%20I%20am%20testing%20a%20url%20with%202049%20characters%20it%20shouldnt%20be%20so%20long%20I%20am%20testing%20a%20url%20with%202049%20characters%20it%20shouldnt%20be%20so%20long%20I%20am%20testing%20a%20url%20with%202049%20characters%20it%20shouldnt%20be%20so%20long%20I%20am%20testing%20a%20url%20with%202049%20characters%20it%20shouldnt%20be%20so%20long%20I%20am%20testing%20a%20url%20with%202049%20characters%20it%20shouldnt%20be%20so%20long%20I%20am%20testing%20a%20url%20with%202049%20characters%20it%20shouldnt%20be%20so%20long%20I%20am%20testing%20a%20url%20with%202049%20characters%20it%20shouldnt%20be%20so%20long%20I%20am%20testing%20a%20url%20with%202049%20characters%20it%20shouldnt%20be%20so%20long%20I%20am%20testing%20a%20url%20with%202049%20characters%20it%20shouldnt%20be%20so%20long%20I%20am%20testing%20a%20url%20with%202049%20characters%20it%20shouldnt%20be%20so%20long%20I%20am%20testing%20a%20url%20with%202049%20characters%20it%20shouldnt%20be%20so%20longI%20am%20testing%20a%20url%20with%202049%20characters%20it%20shouldnt%20be%20so%20long%20I%20am%20testing%20a%20url%20with%202049%20characters%20it%20shouldnt%20be%20so%20long%20I%20am%20testing%20a%20url%20with%202049%20characters%20it%20shouldnt%20be%20so%20long%20I%20am%20testing%20a%20url%20with%202049%20characters%20it%20shouldnt%20be%20so%20long%20I%20am%20testing%20a%20url%20with%202049%20characters%20it%20shouldnt%20be%20so%20long%20I%20am%20testing%20a%20url%20with%202049%20characters%20it%20shouldnt%20be%20so%20long%20I%20am%20testing';

    expect(newUrl).toEqual(expectedTruncatedUrl);
  });

  it('returns the url if empty string', () => {
    const url = 'https://google.com';
    const newUrl = makeTextFragment({
      string: '',
      url,
    });
    expect(newUrl).toEqual(url);
  });
});
