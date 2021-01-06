import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import Icon from 'Icon';
import TypeIcon from 'Icon/TypeIcon';
import ListItemContent from 'Lists/ListItemContent';
import ListItem from 'Lists/ListItem';
import Avatar from 'Avatar';
import { format } from 'utils/dateFns';
import { mungeHighlight } from 'utils/mungeHighlight';
import Highlight from 'Highlight';
import { makeTextFragmentFromExcerpt } from 'utils/makeTextFragment';
import PopoverNavigation from 'Popovers/PopoverNavigation';
import Loading from 'Loading';

const CardItemProps = {
  href: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
  content: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  avatarProps: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  dateTime: PropTypes.instanceOf(Date).isRequired,
  favoriteProps: PropTypes.object.isRequired,
  openInNewTab: PropTypes.bool,
  navigationList: PropTypes.array.isRequired,
  isLoading: PropTypes.bool,
};

/* istanbul ignore next */
const defaultProps = {
  href: '',
  onClick: () => null,
  type: '',
  content: '',
  openInNewTab: false,
  isLoading: false,
};

const CardItem = ({
  href,
  isLoading,
  openInNewTab,
  onClick,
  type,
  avatarProps,
  title,
  dateTime,
  content,
  navigationList,
  favoriteProps,
}) => {
  const clickableProps = {};
  /* istanbul ignore next */
  if (openInNewTab) {
    clickableProps.target = '_blank';
    clickableProps.onClick = (event) => onClick(event);
  }
  const mungedContent = useMemo(() => {
    return mungeHighlight({ string: content, tag: 'mark' });
  }, [content]);

  const mungedTitle = useMemo(() => {
    return mungeHighlight({ string: title, tag: 'mark' });
  }, [title]);

  const mungedUrl = useMemo(() => {
    return makeTextFragmentFromExcerpt({ url: href, string: mungedContent });
  }, [href, content]);

  return (
    <ListItem
      openInNewTab
      href={mungedUrl}
      variant={content ? 'withContent' : 'default'}
      onClick={
        /* istanbul ignore next */
        (event) => {
          if (!openInNewTab) {
            event.preventDefault();
          }
          onClick(event);
        }
      }
      description={
        mungedContent ? (
          <Highlight
            string={mungedContent}
            styles={`
              background: rgba(252, 219, 59, 0.32)
            `}
          />
        ) : (
          ''
        )
      }
      renderItem={
        type ? () => <TypeIcon url={href} type={type} size={3.2} /> : false
      }
      renderContent={() => (
        <ListItemContent
          renderItem={() => <Avatar size={4} {...avatarProps} />}
          primary={
            <div
              css={`
                word-break: break-word;
                p {
                  margin: 0;
                }
              `}
            >
              <Highlight
                string={mungedTitle}
                styles={`
                  background: rgba(252, 219, 59, 0.32)
                `}
              />
            </div>
          }
          secondary={`${format(dateTime, 'MMM d, yyyy')} at ${format(
            dateTime,
            'h:mm a'
          )}`}
        />
      )}
      actions={[
        <Icon type="heart" color="s" size={1.6} {...favoriteProps} />,
        !isLoading ? (
          <PopoverNavigation placement="top" navigationList={navigationList}>
            <Icon
              title="More Options"
              type="horizontal-dots"
              color="s"
              size={1.6}
            />
          </PopoverNavigation>
        ) : (
          <Loading size={1.6} title="Syncing Card..." color="ps.200" />
        ),
      ]}
      {...clickableProps}
    />
  );
};

CardItem.propTypes = CardItemProps;
CardItem.defaultProps = defaultProps;

export default CardItem;
