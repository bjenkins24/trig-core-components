import { makeTextFragment } from '../makeTextFragment';

describe('makeTextFragment()', () => {
  it('makes a text fragment in the url', () => {
    const newUrl = makeTextFragment({
      string:
        '- <mark> Hello, & there my name</mark> cool things happen for <mark>real -</mark> my name _is_ **john**. <mark>Please stop me</mark>',
      url: 'https://google.com/',
    });
    expect(newUrl).toEqual(
      'https://google.com/#:~:text=Hello%2C,name,-cool%20things%20happen%20for&text=cool%20things%20happen%20for-,real,%2D,-my%20name%20is%20john.&text=my%20name%20is%20john.-,Please,me'
    );
  });

  it('keeps fragments short', () => {
    const string = `
_This <mark>Roast</mark> Turkey recipe is a holiday staple! Made with a fresh or frozen and thawed turkey, lots of rich butter, fresh herbs, a hint of bright lemon, and flavorful onion and garlic. It’s easy to prepare and it’s sure to impress family and friends!_

I don’t know what it is about roasting a turkey but it can seem like one of the most intimidating things to prepare and cook for the first time.
   `;

    const newUrl = makeTextFragment({
      string,
      url: 'https://www.cookingclassy.com/roast-turkey-recipe/',
    });

    expect(newUrl).toEqual(
      'https://www.cookingclassy.com/roast-turkey-recipe/#:~:text=This-,Roast,-Turkey%20recipe%20is%20a%20holiday'
    );
  });

  it('replace line breaks with commas', () => {
    const string = `
_This <mark>Roast Turkey 

recipe is a holiday 

staple!</mark> Made with a fresh or frozen and thawed turkey, lots of rich butter, fresh herbs, a hint of bright lemon, and flavorful onion and garlic. It’s easy to prepare and it’s sure to impress family and friends!_
   `;

    const newUrl = makeTextFragment({
      string,
      url: 'https://www.cookingclassy.com/roast-turkey-recipe/',
    });

    expect(newUrl).toEqual(
      'https://www.cookingclassy.com/roast-turkey-recipe/#:~:text=This-,Roast,staple!,-Made%20with%20a%20fresh%20or'
    );
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
