import React from 'react';
import { render } from 'test/utils';
import { Tabs } from 'Tabs/compositions';
import user from '@testing-library/user-event';
import theme from '../../../stories/theme';

beforeAll(() => {
  jest.spyOn(console, 'error').mockImplementation(() => {});
});

const firstTabContent = 'Tab 1';
const secondTabContent = 'Tab 2';
const firstTabPanelContent = 'First Tab';
const secondTabPanelContent = 'Second Tab';

const TabComponent = ({ dark = false }) => {
  return (
    <Tabs
      variant={dark ? 'dark' : 'light'}
      tabs={[firstTabContent, secondTabContent]}
      tabPanels={[firstTabPanelContent, secondTabPanelContent]}
    />
  );
};

describe('<Tabs />', () => {
  it('renders light mode correctly', async () => {
    const { getByText } = render(<TabComponent />);
    const firstTab = getByText(firstTabContent);
    const secondTab = getByText(secondTabContent);
    expect(firstTab).toBeInTheDocument();
    expect(firstTab).toHaveStyleRule('color', theme.s);
    expect(secondTab).toHaveStyleRule('color', theme.p);

    user.click(getByText(secondTabContent));

    expect(firstTab).toHaveStyleRule('color', theme.p);
    expect(secondTab).toHaveStyleRule('color', theme.s);
  });

  it('renders dark mode correctly', async () => {
    const { getByText } = render(<TabComponent dark />);
    const firstTab = getByText(firstTabContent);
    const secondTab = getByText(secondTabContent);
    expect(firstTab).toBeInTheDocument();
    expect(firstTab).toHaveStyleRule('color', theme.pc);
    expect(secondTab).toHaveStyleRule('color', theme.ps[200]);

    user.click(getByText(secondTabContent));

    expect(firstTab).toHaveStyleRule('color', theme.ps[200]);
    expect(secondTab).toHaveStyleRule('color', theme.pc);
  });
});
