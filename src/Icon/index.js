import React from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash';
import FileIcon from './FileIcon';
import Aggregate from './icons/Aggregate';
import Alert from './icons/Alert';
import ArrowDown from './icons/ArrowDown';
import ArrowLeft from './icons/ArrowLeft';
import ArrowRight from './icons/ArrowRight';
import ArrowUp from './icons/ArrowUp';
import Avatar from './icons/Avatar';
import Bell from './icons/Bell';
import Bold from './icons/Bold';
import Calendar from './icons/Calendar';
import Cards from './icons/Cards';
import Check from './icons/Check';
import CheckCircle from './icons/CheckCircle';
import Close from './icons/Close';
import Code from './icons/Code';
import Comment from './icons/Comment';
import Deck from './icons/Deck';
import Document from './icons/Document';
import Edit from './icons/Edit';
import Facebook from './icons/Facebook';
import File from './icons/File';
import Followers from './icons/Followers';
import FullScreen from './icons/FullScreen';
import Google from './icons/Google';
import Hamburger from './icons/Hamburger';
import Heart from './icons/Heart';
import HeartFilled from './icons/HeartFilled';
import HorizontalDots from './icons/HorizontalDots';
import Italic from './icons/Italic';
import Link from './icons/Link';
import LinkedIn from './icons/LinkedIn';
import ListOrdered from './icons/ListOrdered';
import ListUnordered from './icons/ListUnordered';
import Loading from './icons/Loading';
import Lock from './icons/Lock';
import NewWindow from './icons/NewWindow';
import NumberOne from './icons/NumberOne';
import NumberTwo from './icons/NumberTwo';
import Open from './icons/Open';
import Organize from './icons/Organize';
import Quote from './icons/Quote';
import RowView from './icons/RowView';
import Search from './icons/Search';
import ThumbnailView from './icons/ThumbnailView';
import Trash from './icons/Trash';
import Twitter from './icons/Twitter';
import TypeCode from './icons/TypeCode';
import TypeDoc from './icons/TypeDoc';
import TypePpt from './icons/TypePpt';
import TypeXls from './icons/TypeXls';
import TypeYoutube from './icons/TypeYoutube';
import Underline from './icons/Underline';

export { FileIcon };

export const iconComponents = {
  aggregate: Aggregate,
  alert: Alert,
  'arrow-down': ArrowDown,
  'arrow-left': ArrowLeft,
  'arrow-right': ArrowRight,
  'arrow-up': ArrowUp,
  avatar: Avatar,
  bell: Bell,
  bold: Bold,
  calendar: Calendar,
  cards: Cards,
  check: Check,
  'check-circle': CheckCircle,
  close: Close,
  code: Code,
  comment: Comment,
  deck: Deck,
  document: Document,
  edit: Edit,
  facebook: Facebook,
  file: File,
  followers: Followers,
  'full-screen': FullScreen,
  google: Google,
  hamburger: Hamburger,
  heart: Heart,
  'heart-filled': HeartFilled,
  'horizontal-dots': HorizontalDots,
  italic: Italic,
  link: Link,
  linkedIn: LinkedIn,
  'list-ordered': ListOrdered,
  'list-unordered': ListUnordered,
  loading: Loading,
  lock: Lock,
  'number-one': NumberOne,
  'number-two': NumberTwo,
  'new-window': NewWindow,
  open: Open,
  organize: Organize,
  quote: Quote,
  'row-view': RowView,
  search: Search,
  twitter: Twitter,
  'thumbnail-view': ThumbnailView,
  trash: Trash,
  'type-code': TypeCode,
  'type-doc': TypeDoc,
  'type-ppt': TypePpt,
  'type-xls': TypeXls,
  'type-youtube': TypeYoutube,
  underline: Underline,
};

const iconTypes = {
  type: PropTypes.oneOf(Object.keys(iconComponents)).isRequired,
};

const Icon = ({ type, ...restProps }) => {
  const IconComponent = get(iconComponents, type, '');
  if (!IconComponent) {
    // eslint-disable-next-line no-console
    console.error(`The icon type you passed: ${type}, does not exist`);
    return false;
  }
  return <IconComponent {...restProps} />;
};

Icon.propTypes = iconTypes;

export default Icon;
