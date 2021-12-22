import React, { useState } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { action } from '@storybook/addon-actions';
import get from 'lodash/get';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, number, text } from '@storybook/addon-knobs';
import { MasonryScroller, usePositioner, useResizeObserver } from 'masonic';
import Card from '../src/Card/index';
import Avatar from '../src/Avatar';
import Icon from '../src/Icon';
import { HorizontalGroup } from '../src/Groups';
import './consoleOverrides';
import themeForProvider from './theme';
import { mockCards, mockCardsLarge } from './mockCards';
import CardLarge from '../src/CardLarge';
import { CardTwitter } from '../src/CardLarge/compositions';
import Tag from '../src/Form/Tag';

/* eslint-disable */
const CardBase = ({ data }) => {
  return (
    <Card
      isLoading={!get(data, 'id', false) || !data.lastAttemptedSync}
      width={251}
      key={data.id}
      dateTime={new Date(data.createdAt)}
      isFavorited={data.isFavorited}
      totalFavorites={data.totalFavorites}
      onClickFavorite={() => null}
      description={data.description}
      openInNewTab
      title={data.title}
      href={data.url}
      type={data.cardType}
      image={data.image}
      imageWidth={data.imageWidth}
      imageHeight={data.imageHeight}
      renderAvatar={() => {
        return (
          <Avatar
            size={1.6}
            firstName={data.user.firstName}
            lastName={data.user.lastName}
            email={data.user.email}
          />
        );
      }}
      navigationList={[
        {
          onClick: () => null,
          text: 'hello',
        },
      ]}
    />
  );
};

const CardRendererLarge = ({ data }) => {
  if (data.isTwitter) {
    return (
      <div>
        <CardTwitter
          href={data.url}
          onClickTrash={() => console.log('trash')}
          onClickFavorite={() => console.log('favorite')}
          totalViews={20}
          totalFavorites={data.totalFavorites}
          isFavorited={data.isFavorited}
          date={data.date}
          avatar={data.avatar}
          tweet={data.content}
          name={data.name}
          handle={data.handle}
        />
        <HorizontalGroup
          margin={0.4}
          css={`
            flex-wrap: wrap;
            & > * {
              margin-top: ${({ theme }) => theme.space[1]}px;
            }
          `}
        >
          <Tag>Product</Tag>
          <Tag isSelected>Product/Market Fit Examples</Tag>
          <Tag>Product</Tag>
          <Tag>Product/Market Fit Examples</Tag>
          <Tag>Product</Tag>
          <Tag>Product/Market Fit Examples</Tag>
          <Tag>Product</Tag>
          <Tag>Product/Market Fit Examples</Tag>
        </HorizontalGroup>
      </div>
    );
  } else {
    return (
      <div>
        <CardLarge
          href={data.url}
          title={data.title}
          onClickTrash={() => console.log('trash')}
          onClickFavorite={() => console.log('favorite')}
          totalViews={20}
          totalFavorites={data.totalFavorites}
          isFavorited={data.isFavorited}
          image={data.image}
          content={data.content}
        />
        <HorizontalGroup
          margin={0.4}
          css={`
            margin-top: ${({ theme }) => theme.space[1]}px;
          `}
        >
          <Tag onRequestRemove={() => console.log('removed')}>Product</Tag>
        </HorizontalGroup>
      </div>
    );
  }
};

// this has to be defined outside of the component or the UI flashes
const CardRenderer = ({ data }) => {
  return <CardBase data={data} />;
};

const Mason = ({ renderer, items, totalWidth, columnWidth, columnGutter }) => {
  const positioner = usePositioner(
    { width: totalWidth, columnWidth, columnGutter },
    // This is our dependencies array. When these dependencies
    // change, the positioner cache will be cleared and the
    // masonry component will reset as a result.
    [items.length]
  );

  const resizeObserver = useResizeObserver(positioner);

  return (
    <MasonryScroller
      // Provides the data for our grid items
      items={items}
      itemHeightEstimate={400}
      itemkey={(data) => data.id}
      positioner={positioner}
      height={900}
      resizeObserver={resizeObserver}
      // Pre-renders 5 windows worth of content
      overscanBy={5}
      // This is the grid item component
      render={renderer}
    />
  );
};

const CreateCard = () => {
  const imageHeight = 150;
  const [isFavorited, setIsFavorited] = useState(false);
  return (
    <Card
      id={1}
      width={251}
      href={text('href', 'https://trello.com')}
      onClick={action('clicked')}
      onClickFavorite={() => setIsFavorited(!isFavorited)}
      title={text('title', 'Why AI is Going to Take Your Job')}
      dateTime={new Date()}
      description="We’ll take care of customer support for you — faster responses, smaller backlogs, and happier customers. We help growing companies provide great customer support. Support for all all the time"
      renderAvatar={() => (
        <Avatar
          size={1.6}
          firstName={text('firstName', 'Brian')}
          lastName={text('lastName', 'Jenkins')}
        />
      )}
      showTotalFavorites={false}
      imageWidth={251}
      imageHeight={imageHeight}
      image={text('image', `https://picsum.photos/251/${imageHeight}`)}
      type={select(
        'type',
        {
          link: 'link',
          googleDoc: 'application/vnd.google-apps.document',
          word: 'application/msword',
        },
        'link'
      )}
      totalFavorites={number('totalFavorites', 10)}
      isFavorited={isFavorited}
      totalComments={number('totalComments', 45)}
      navigationList={[
        {
          onClick: () => null,
          item: (
            <HorizontalGroup margin={1.6}>
              <Icon type="new-window" size={1.6} />
              <span>Open in New Window</span>
            </HorizontalGroup>
          ),
        },
        {
          onClick: () => null,
          item: (
            <HorizontalGroup margin={1.6}>
              <Icon type="edit" size={1.6} />
              <span>Edit Card</span>
            </HorizontalGroup>
          ),
        },
        {
          onClick: () => null,
          item: (
            <HorizontalGroup margin={1.6}>
              <Icon type="lock" size={1.6} />
              <span>Share</span>
            </HorizontalGroup>
          ),
        },
        {
          onClick: () => null,
          item: (
            <HorizontalGroup margin={1.6}>
              <Icon type="trash" size={1.6} />
              <span>Remove From Trig</span>
            </HorizontalGroup>
          ),
        },
      ]}
    />
  );
};

const Global = createGlobalStyle`
  body {
    background: #F5F5F5;
  }
`;

storiesOf('Cards', module)
  .addDecorator((story) => (
    <ThemeProvider theme={themeForProvider}>{story()}</ThemeProvider>
  ))
  .addDecorator(withKnobs)

  .add('Thumbnail', () => <CreateCard />)
  .add('Large', () => {
    return (
      <>
        <Global />
        <CardLarge
          image="https://picsum.photos/800/800"
          href="https://trytrig.com"
          totalFavorites={0}
          isFavorited={true}
          canFavorite={false}
          onClickFavorite={() => alert('clicked favorite')}
          onClickTrash={() => alert('clicked trash')}
          totalViews={23}
        />
      </>
    );
  })
  .add('Large Twitter', () => {
    const content =
      '<span>Social login on </span><div><span><span class="card__link">@treendly</span></span></div><span> was a win. Now experimenting with selling right in the onboarding process. At this price point, a Treendly sub is just an impulse buy so it makes sense </span><img alt="Raising hands" src="https://abs-0.twimg.com/emoji/v2/svg/1f64c.svg" title="Raising hands"><span> </span><span><span class="card__link">#buildinpublic</span></span>';
    // const content2 =
    //   '<span>I need to improve the positioning of </span><div><span><span class="card__link">@MDX_one</span><span class="card__link">@MDX_one</span></span></div><span> better.<br /><br />How does "A notion-based alternative to Ghost" sound?<br /><br />It\'s not just another Notion website builder. <br/> <br/> </span> <div><span class="card__link">@MDX_one</span></div> <span> is a blogging platform where creators can truly own their content and publish content effortlessly.</span>';

    return (
      <>
        <Global />
        <CardTwitter
          href="https://trytrig.com"
          totalFavorites={0}
          isFavorited={true}
          onClickFavorite={() => alert('clicked favorite')}
          onClickTrash={() => alert('clicked trash')}
          totalViews={23}
          avatar="https://pbs.twimg.com/profile_images/1435987121559330816/Nk1N53gB_x96.jpg"
          name="Simon Barker"
          handle="@allthecode_"
          date="2021-10-13T16:34:58.000000Z"
          content={content}
          // reply={{
          //   name: 'Brian Jenkins',
          //   handle: '@brian',
          //   avatar:
          //     'https://pbs.twimg.com/profile_images/1318383841581686784/-e5Lwjgc_normal.jpg',
          //   replyingTo: 'Replying to @pbteja1998 and @MDX_one',
          //   content:
          //     'i never thought of it as a blogging engine Exploding head will start recommending it as well now FireFire',
          //   date: 'Oct 30',
          // }}
          // link={{
          //   href: 'producthunt.com',
          //   imageSrc:
          //     'https://pbs.twimg.com/card_img/1458691292058484742/Wqckzdxa?format=jpg&name=medium',
          //   title:
          //     'Personal.ai - Remember everything with your own personal AI | Product Hunt',
          //   description:
          //     'We forget 80% of the information we experience every day. Speak, write or upload insights, information and experiences into your personal AI so you can recall your memories exactly when you need them.',
          // }}
          images={[
            'https://pbs.twimg.com/media/FBl9MEyUcAIx5Ep?format=jpg&name=medium',
            'https://pbs.twimg.com/media/FCXiUUjXMAMq2WH?format=jpg&name=900x900',
            'https://pbs.twimg.com/media/FCXiVEjXoAERStM?format=jpg&name=small',
          ]}
        >
          cool twitter stuff here
        </CardTwitter>
      </>
    );
  })
  .add('Masonry Example Thumbnails', () => {
    return (
      <Mason
        renderer={CardRenderer}
        items={get(mockCards, 'data', [])}
        totalWidth={780}
        width={251}
        columnGutter={6}
      />
    );
  })
  .add('Masonry Example Large', () => {
    return (
      <div
        css={`
          width: 100%;
          height: 100%;
          background: #f5f5f5;
        `}
      >
        <Mason
          renderer={CardRendererLarge}
          items={get(mockCardsLarge, 'data', [])}
          totalWidth={1280}
          columnWidth={615}
          columnGutter={16}
        />
      </div>
    );
  });
