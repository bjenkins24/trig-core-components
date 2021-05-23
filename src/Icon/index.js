import React from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash';
import Aggregate from './icons/Aggregate';
import Alert from './icons/Alert';
import AnimatedCheck from './icons/AnimatedCheck';
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
import Collection from './icons/Collection';
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
import Play from './icons/Play';
import Plus from './icons/Plus';
import Quote from './icons/Quote';
import RowView from './icons/RowView';
import Search from './icons/Search';
import Send from './icons/Send';
import Tags from './icons/Tags';
import ThumbnailView from './icons/ThumbnailView';
import Trash from './icons/Trash';
import Twitter from './icons/Twitter';
import TypeAirtable from './icons/TypeAirtable';
import TypeAmazon from './icons/TypeAmazon';
import TypeAmplitude from './icons/TypeAmplitude';
import TypeAsana from './icons/TypeAsana';
import TypeBasecamp from './icons/TypeBasecamp';
import TypeBitbucket from './icons/TypeBitbucket';
import TypeClubhouse from './icons/TypeClubhouse';
import TypeCode from './icons/TypeCode';
import TypeConfluence from './icons/TypeConfluence';
import TypeExcel from './icons/TypeExcel';
import TypeFacebook from './icons/TypeFacebook';
import TypeFigma from './icons/TypeFigma';
import TypeGithub from './icons/TypeGithub';
import TypeGmail from './icons/TypeGmail';
import TypeGoogleDoc from './icons/TypeGoogleDoc';
import TypeGoogleForm from './icons/TypeGoogleForm';
import TypeGoogleSheet from './icons/TypeGoogleSheet';
import TypeGoogleSlide from './icons/TypeGoogleSlide';
import TypeInstagram from './icons/TypeInstagram';
import TypeJira from './icons/TypeJira';
import TypeNotion from './icons/TypeNotion';
import TypePowerpoint from './icons/TypePowerpoint';
import TypeQuora from './icons/TypeQuora';
import TypeReddit from './icons/TypeReddit';
import TypeStackOverflow from './icons/TypeStackOverflow';
import TypeTrello from './icons/TypeTrello';
import TypeTwitter from './icons/TypeTwitter';
import TypeTypeform from './icons/TypeTypeform';
import TypeWord from './icons/TypeWord';
import TypeYoutube from './icons/TypeYoutube';
import Underline from './icons/Underline';
import World from './icons/World';

export const iconComponents = {
  aggregate: Aggregate,
  alert: Alert,
  'animated-check': AnimatedCheck,
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
  collection: Collection,
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
  'linked-in': LinkedIn,
  'list-ordered': ListOrdered,
  'list-unordered': ListUnordered,
  loading: Loading,
  lock: Lock,
  'new-window': NewWindow,
  'number-one': NumberOne,
  'number-two': NumberTwo,
  open: Open,
  organize: Organize,
  play: Play,
  plus: Plus,
  quote: Quote,
  'row-view': RowView,
  search: Search,
  send: Send,
  tags: Tags,
  twitter: Twitter,
  'type-airtable': TypeAirtable,
  'type-amazon': TypeAmazon,
  'type-amplitude': TypeAmplitude,
  'type-asana': TypeAsana,
  'type-basecamp': TypeBasecamp,
  'type-bitbucket': TypeBitbucket,
  'type-clubhouse': TypeClubhouse,
  'type-code': TypeCode,
  'type-confluence': TypeConfluence,
  'type-excel': TypeExcel,
  'type-facebook': TypeFacebook,
  'type-figma': TypeFigma,
  'type-github': TypeGithub,
  'type-gmail': TypeGmail,
  'type-google-doc': TypeGoogleDoc,
  'type-google-form': TypeGoogleForm,
  'type-google-sheet': TypeGoogleSheet,
  'type-google-slide': TypeGoogleSlide,
  'type-instagram': TypeInstagram,
  'type-jira': TypeJira,
  'type-notion': TypeNotion,
  'type-powerpoint': TypePowerpoint,
  'type-quora': TypeQuora,
  'type-reddit': TypeReddit,
  'type-stack-overflow': TypeStackOverflow,
  'type-trello': TypeTrello,
  'type-twitter': TypeTwitter,
  'type-typeform': TypeTypeform,
  'type-word': TypeWord,
  'type-youtube': TypeYoutube,
  'thumbnail-view': ThumbnailView,
  trash: Trash,
  underline: Underline,
  world: World,
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
