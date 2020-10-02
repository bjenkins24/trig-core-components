import React from 'react';
import { render } from 'test/utils';
import user from '@testing-library/user-event';
import { TabsDefault } from 'Tabs/compositions/TabsDefault';
import { TabsNavigation } from 'Tabs/compositions';
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
    <TabsDefault
      variant={dark ? 'dark' : 'light'}
      tabs={[{ text: firstTabContent }, { text: secondTabContent }]}
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

  it('renders navigation', async () => {
    const { getByText, getAllByRole, getByTestId, rerender } = render(
      <TabsNavigation
        tabs={[{ text: firstTabContent }, { text: secondTabContent }]}
        tabPanels={[firstTabPanelContent, secondTabPanelContent]}
      />
    );
    const tabs = getAllByRole('tab');
    // Navigation has some extra padding on the left
    expect(tabs[0]).toHaveStyleRule('padding', '0 16px');
    const firstTab = getByText(firstTabContent);
    const firstTabPanel = getByText(firstTabPanelContent);
    expect(firstTab).toBeInTheDocument();
    expect(firstTabPanel).toBeInTheDocument();

    rerender(
      <TabsNavigation
        defaultTab={-1}
        tabs={[{ text: firstTabContent }, { text: secondTabContent }]}
        tabPanels={[firstTabPanelContent, secondTabPanelContent]}
      />
    );

    expect(getByTestId(/select-bar/i)).toHaveStyleRule('opacity: 0');

    rerender(
      <TabsNavigation
        variant="light"
        tabs={[{ text: firstTabContent }, { text: secondTabContent }]}
        tabPanels={[firstTabPanelContent, secondTabPanelContent]}
        size="lg"
      />
    );
    expect(getByTestId(/select-bar/i)).toHaveStyleRule(
      `background: ${theme.colors.s}`
    );
    expect(tabs[0]).toHaveStyleRule('padding', '0 32px');
  });
});
