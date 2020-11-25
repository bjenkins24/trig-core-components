import {
  makeTextFragmentFromMarks,
  makeTextFragmentFromExcerpt,
} from '../makeTextFragment';

describe('makeTextFragmentFromMarks()', () => {
  it('makes a text fragment in the url', () => {
    const newUrl = makeTextFragmentFromMarks({
      string: `- <mark> Hello, & there my name</mark> this is my long suffix and prefix it's more than a bunch of words <mark>real -</mark> Suffix to real.

I am <mark>on a different</mark> line and should not be matched for a suffix to the last mark <mark>Please stop me</mark>`,
      url: 'https://google.com/',
    });
    expect(newUrl).toEqual(
      'https://google.com/#:~:text=Hello%2C,name,-this%20is%20my%20long%20suffix&text=than%20a%20bunch%20of%20words-,real,%2D,-Suffix%20to%20real.&text=I%20am-,on,different,-line%20and%20should%20not%20be&text=suffix%20to%20the%20last%20mark-,Please,me'
    );
  });

  it('keeps fragments short', () => {
    const string = `
_This <mark>Roast</mark> Turkey recipe is a holiday staple! Made with a fresh or frozen and thawed turkey, lots of rich butter, fresh herbs, a hint of bright lemon, and flavorful onion and garlic. It’s easy to prepare and it’s sure to impress family and friends!_

I don’t know what it is about roasting a turkey but it can seem like one of the most intimidating things to prepare and cook for the first time.
   `;

    const newUrl = makeTextFragmentFromMarks({
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

    const newUrl = makeTextFragmentFromMarks({
      string,
      url: 'https://www.cookingclassy.com/roast-turkey-recipe/',
    });

    expect(newUrl).toEqual(
      'https://www.cookingclassy.com/roast-turkey-recipe/#:~:text=This-,Roast,staple!,-Made%20with%20a%20fresh%20or'
    );
  });

  it('returns the url if empty string', () => {
    const url = 'https://google.com';
    const newUrl = makeTextFragmentFromMarks({
      string: '',
      url,
    });
    expect(newUrl).toEqual(url);
  });
});

describe('makeTextFragmentFromExcerpt', () => {
  it('returns the correct excerpt', () => {
    const string = `- <mark> Hello, & there my name</mark> this is my long suffix and prefix it's more than a bunch of words <mark>real -</mark> Suffix to real.

I am <mark>on a different</mark> line and should not be matched for a suffix to the last mark <mark>Please 

stop me</mark>`;
    const url = 'https://google.com';
    const newUrl = makeTextFragmentFromExcerpt({ url, string });

    expect(newUrl).toEqual(
      `${url}#:~:text=Hello%2C%20%26%20there%20my%20name,last%20mark%20Please%20stop%20me`
    );
  });
});
