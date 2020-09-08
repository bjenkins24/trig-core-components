import React from 'react';
import { render } from 'test/utils';
import { HorizontalGroup, VerticalGroup } from 'Groups';

describe('<HorizontalGroup />', () => {
  it('renders and matches padding snapshot', () => {
    const { container } = render(
      <HorizontalGroup padding={2}>
        <div>hello</div>
        <div>hello</div>
      </HorizontalGroup>
    );
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        padding: 8px;
      }

      .c0 > *:not(:last-child) {
        padding-right: 2rem;
      }

      <div
        class="c0"
      />
    `);
  });

  it('renders and matches margin snapshot', () => {
    const { container } = render(
      <HorizontalGroup margin={2}>
        <div>Hello</div>
        <div>Hello</div>
      </HorizontalGroup>
    );
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        margin: 8px;
      }

      .c0 > *:not(:last-child) {
        margin-right: 2rem;
      }

      <div
        class="c0"
      />
    `);
  });
});

describe('<VerticalGroup />', () => {
  it('matches padding snapshot', () => {
    const { container } = render(
      <VerticalGroup padding={2}>
        <div>hello</div>
        <div>hello</div>
      </VerticalGroup>
    );
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        padding: 8px;
      }

      .c0 > *:not(:last-child) {
        padding-bottom: 2rem;
      }

      <div
        class="c0"
      />
    `);
  });

  it('matches margin snapshot', () => {
    const { container } = render(
      <VerticalGroup margin={2}>
        <div>Heloo</div>
        <div>hello</div>
      </VerticalGroup>
    );
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        margin: 8px;
      }

      .c0 > *:not(:last-child) {
        margin-bottom: 2rem;
      }

      <div
        class="c0"
      />
    `);
  });
});
