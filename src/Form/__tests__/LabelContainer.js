import React from 'react';
import { render } from 'test/utils';
import { axe } from 'jest-axe';
import LabelContainer from 'Form/LabelContainer';

const label = 'My cool label';
const inputId = 'input';
const exampleClass = 'example-class';
const buildLabelContainer = () => {
  return render(
    <LabelContainer
      width={12}
      className={exampleClass}
      Component={(props) => (
        <input type="text" data-testid={inputId} {...props} />
      )}
      label={label}
    />
  );
};

describe('<LabelContainer />', () => {
  it('renders and takes basic props', () => {
    const { getByLabelText, getByTestId, container } = buildLabelContainer();

    expect(getByLabelText(label)).toBeTruthy();
    expect(container.firstChild).toHaveStyleRule('width', '12rem');
    expect(container.firstChild).toHaveClass(exampleClass);
    expect(getByTestId(inputId)).toBeTruthy();
  });

  it('the input is accessible', async () => {
    const { container } = buildLabelContainer();
    const result = await axe(container);
    expect(result).toHaveNoViolations();
  });
});
