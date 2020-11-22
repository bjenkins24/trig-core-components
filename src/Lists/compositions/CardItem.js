import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'Icon';
import TypeIcon from 'Icon/TypeIcon';
import ListItemContent from 'Lists/ListItemContent';
import ListItem from 'Lists/ListItem';
import Avatar from 'Avatar';
import { format } from 'utils/dateFns';

const CardItemProps = {
  href: PropTypes.string,
  onClick: PropTypes.func,
  cardType: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  avatarProps: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  dateTime: PropTypes.instanceOf(Date).isRequired,
  moreProps: PropTypes.object.isRequired,
  favoriteProps: PropTypes.object.isRequired,
  openInNewTab: PropTypes.bool,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

/* istanbul ignore next */
const defaultProps = {
  href: '',
  onClick: null,
  content: '',
  openInNewTab: false,
};

const CardItem = ({
  id,
  href,
  openInNewTab,
  onClick,
  cardType,
  avatarProps,
  title,
  dateTime,
  content,
  moreProps,
  favoriteProps,
}) => {
  const clickableProps = {};
  /* istanbul ignore next */
  if (openInNewTab) {
    clickableProps.target = '_blank';
    clickableProps.onClick = () => onClick(id);
  }

  return (
    <ListItem
      href={href}
      variant={content ? 'withContent' : 'default'}
      onClick={
        /* istanbul ignore next */
        (e) => {
          e.preventDefault();
          onClick(id);
        }
      }
      description={content}
      renderItem={() => <TypeIcon type={cardType} size={content ? 3.2 : 2.4} />}
      renderContent={() => (
        <ListItemContent
          renderItem={() => <Avatar size={4} {...avatarProps} />}
          primary={title}
          secondary={`${format(dateTime, 'MMM d, yyyy')} at ${format(
            dateTime,
            'h:mm a'
          )}`}
        />
      )}
      actions={[
        <Icon type="heart" color="s" size={1.6} {...favoriteProps} />,
        // <Icon
        //   type="comment"
        //   color="s"
        //   size={1.6}
        //   count={}
        //   onClick={action('clicked comment')}
        // />,
        <Icon type="horizontal-dots" color="s" size={1.6} {...moreProps} />,
      ]}
      {...clickableProps}
    />
  );
};

CardItem.propTypes = CardItemProps;
CardItem.defaultProps = defaultProps;

export default CardItem;
