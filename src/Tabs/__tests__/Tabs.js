import React from 'react';
import { render } from 'test/utils';
import { Tabs, TabList, TabPanel, Tab } from 'Tabs';
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
    <Tabs>
      <TabList dark={dark}>
        <Tab>{firstTabContent}</Tab>
        <Tab>{secondTabContent}</Tab>
      </TabList>
      <TabPanel>{firstTabPanelContent}</TabPanel>
      <TabPanel>{secondTabPanelContent}</TabPanel>
    </Tabs>
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
    // For passing `dark` to dom node - we ignore this in the app
    // So let's ignore it in the tests. If it get's called more than once,
    // though, we should know
    expect(console.error).toHaveBeenCalledTimes(1);
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
    // For passing `dark` to dom node - we ignore this in the app
    // So let's ignore it in the tests. If it get's called more than once,
    // though, we should know
    expect(console.error).toHaveBeenCalledTimes(1);
  });
});
