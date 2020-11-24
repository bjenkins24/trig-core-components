import React from 'react';
import { ThemeProvider } from 'styled-components';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';
import ListItemContent from '../src/Lists/ListItemContent';
import List from '../src/Lists/List';
import Avatar from '../src/Avatar';
import './consoleOverrides';
import themeForProvider from './theme';
import CardItem from '../src/Lists/compositions/CardItem';

// eslint-disable-next-line react/prop-types
const StoryListItem = ({ onClick }) => {
  return (
    <CardItem
      onClick={onClick}
      onClickFavorite={action('clicked heart')}
      avatarProps={{ firstName: 'Brian', lastName: 'Jenkins' }}
      cardType="doc"
      title="How To Memorize Music 5 Times Faster"
      onClickMore={action('Clicked more')}
      dateTime={new Date('2020-11-18T04:06:43+0000')}
      href="https://google.com"
    />
  );
};

const string = `November 9, 2015\n
\n
<mark>Product</mark> managers must think beyond organizational silos if they want to be successful. After all, they are paid to deliver a complete customer experience. That means a big part of the job is managing cross-functional relationships with teams like Customer Success.\n
\n
In my consulting work, <mark>I’ve</mark> <mark>helped</mark> <mark>SaaS</mark> <mark>clients</mark> <mark>generate</mark> <mark>millions</mark> of dollars in revenue growth during short time periods using a few simple ideas. One of the major ways that I helped was getting product managers to be cross-functional leaders.\n
\n
I want to focus on the relationship between product management and Customer Success in this article because they have emerged as the new, new sales and support teams in many emerging technology companies.\n
\n
> Great product managers think holistically about their role and product — the entire product. This means that they focus on every customer interaction point and the people who support it. And they do that by working closely with Customer Success.\n
\n
Remember, that every email your system sends and every conversation your team has builds or breaks your brand.\n
\n
Whether you are a product manager helping your Customer Success (CS) team or a CS manager helping your product team, these five ideas can help you improve outcomes in your entire customer lifecycle. And more importantly, it will improve the customer journey.\n
\n
- First Item
\n
- Second Item
\n
<mark>**1)</mark> <mark>Don't</mark> <mark>wait</mark> <mark>to</mark> <mark>engage**</mark> \n
The traditional approach to Customer Success in SaaS subscription businesses has largely been in the post-conversion phase, where CS teams onboard and service new customers. But engaging customers from the start — right when they enter your acquisition channel — is a much better idea.\n
\n
This entry point is when prospects are most likely to be transparent. You can ask them questions, understand their motivations, internalize their needs, and position your product to serve their long-term visions. The product manager must be heavily involved in these early conversations. This is where PMs can create feedback loops with CS to create successful conversions from trial to retained users.\n
\n
**2) Ask a quick question**  \n
Have you ever sent a “quick question” to your new user asking how they learned about your product? This small gesture can give great insights into your acquisition channel strategy. I once worked with a Customer Success team to craft emails asking new users why they downloaded a popular software application.\n
\n
It turned out that our initial assumptions were incorrect. Thousands of users were downloading this software each day for reasons that the CS team and I had not considered. This new understanding empowered our company to change its packaging and pricing strategy. This significantly increased our paid user base — all because we worked with CS to ask the crucial question: “Why?”\n
\n
**3) Remind your users**  \n
So, you got past the hard part of convincing visitors to sign up — but the user hasn’t logged into your product yet. Have you tried sending a gentle reminder? A friendly, “Hey, you signed up, but we haven’t seen you yet” during their free trial period can go a long way. This is another simple method that my CS team and I tried. And the results were brilliant — we improved user activation by nearly 5% per client. If you have 1,000 sign-ups per day, that’s 50 extra activations per day.\n
\n
**4) Intercept before it is too late**  \n
Intercepting users based on their specific interactions within the product is another powerful customer success idea. Your goal is to offer real-time help within the app — not wait for a ticket to appear in your support queue. I learned how powerful this tactic can be while working with a former client.\n
\n
Generating reports within the product was an important job for their customers. However, not every user was getting there due to technical hurdles to complete report generation. So, we set up an appropriate in-app message for this page visit. Each customer who arrived at the URL was given a concierge-level service with a special in-app message. Each customer left feeling helped and happy, even as the product development team worked to automate and improve the report generation process.\n
\n
**5) Segment users by churn risk**  \n
We found a great use case in reminding users of their impending subscription expiration and urging them to renew. But that is fairly standard messaging using traditional sales and marketing automation tools. Standard marketing and subscription automation tools lack integration and insights from actual product usage data. So, we monitored product usage and then customized our messages for churn and win-back emails based on this usage data.\n
\n
Customize your messaging wherever possible. For example, the message you send to a customer who recently stopped their subscription should differ from a message to someone who has not logged in for months. Once we started personalizing these messages, our win-back rates shot up.\n
\n
Every subscription counts, of course, but the smarter thing is to track declining product usage. Bonus points if you automate proactive communication so you can better understand the reasons for declining product usage.\n
\n
> As a general rule, almost every message that emerges from a growth experiment is a chance to engage your product’s target users.\n
\n
Hacking your message subject lines to improve your open rates is easy (just Google “cold email subject lines”). But engagement is critical and measured by a different yardstick. Response rates and message goals depend on the quality of the story.\n
\n
Consider each feature release message and onboarding tip as your chance to tell a story. I have consistently found that messages with story angles have much stronger customer outcomes than bullet lists of features or functions.\n
\n
I hope you will work alongside Customer Success to incorporate these simple tips and measure their impact. They will go a long way toward increasing customer engagement and success at every stage.\n
\n
*This is a guest post by Prabhakar Gopalan. If you are looking to be a great product manager or owner, create brilliant strategy, and build visual product roadmaps — start a free trial of* *Aha!*\n
\n
Prabhakar Gopalan is Principal at PG Consulting, an Austin-based firm advising CEOs at VC &amp; PE-funded companies with strategies that yield growth in dramatically short timeframes. His clients range from B2B SaaS businesses that started with less than 10 customers to B2C businesses with millions of users. Visit pgconsulting.com.\n
\n
Follow him on Twitter at @pgopalan
`;

storiesOf('Lists', module)
  .addDecorator((story) => (
    <ThemeProvider theme={themeForProvider}>{story()}</ThemeProvider>
  ))
  .addDecorator(withKnobs)
  .add('List', () => (
    <List
      css={`
        width: 62rem;
      `}
    >
      <StoryListItem onClick={action('clicked first story')} key={1} />
      <StoryListItem onClick={action('clicked second story')} key={2} />
      <StoryListItem onClick={action('clicked third story')} key={3} />
      <StoryListItem onClick={action('clicked fourth story')} key={4} />
    </List>
  ))
  .add('List Item', () => (
    <div
      css={`
        width: 62rem;
      `}
    >
      <StoryListItem />
    </div>
  ))
  .add('List Item Content', () => (
    <div
      css={`
        width: 62rem;
      `}
    >
      <ListItemContent
        renderItem={() => (
          <Avatar firstName="Brian" lastName="Jenkins" size={4} />
        )}
        primary={text('primary', 'How To Memorize Music 5 Times Faster')}
        secondary={text('secondary', 'Oct 27, 2018 at 5:35pm')}
      />
    </div>
  ))
  .add('Search Results', () => (
    <div
      css={`
        width: 62rem;
        list-style-type: none;
      `}
    >
      <CardItem
        openInNewTab
        content={string}
        onClickFavorite={action('clicked heart')}
        avatarProps={{ firstName: 'Brian', lastName: 'Jenkins' }}
        cardType="link"
        title="How To Memorize Music 5 <mark>Times</mark> Faster"
        onClickMore={action('Clicked more')}
        dateTime={new Date('2020-11-18T04:06:43+0000')}
        href="https://www.aha.io/blog/product-managers-customer-success-teams-happy"
      />
    </div>
  ));
