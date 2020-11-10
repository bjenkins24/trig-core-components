import File from './icons/File';
import TypeCode from './icons/TypeCode';
import TypeWord from './icons/TypeWord';
import TypeExcel from './icons/TypeExcel';
import TypePowerpoint from './icons/TypePowerpoint';
import Link from './icons/Link';
import TypeGoogleDoc from './icons/TypeGoogleDoc';
import TypeGoogleForm from './icons/TypeGoogleForm';
import TypeGoogleSheet from './icons/TypeGoogleSheet';
import TypeGoogleSlide from './icons/TypeGoogleSlide';

const terminal = { type: TypeCode, title: 'Terminal Icon' };
const js = { type: TypeCode, title: 'Javascript Icon' };
const docx = { type: TypeWord, title: 'Microsoft Word Document Icon' };
const xls = { type: TypeExcel, title: 'Microsoft Excel Icon' };
const ppt = { type: TypePowerpoint, title: 'Microsoft Powerpoint Icon' };

const types = {
  // General Links
  link: {
    type: Link,
    title: 'Link Icon',
    string: 'link',
  },
  // Specific Links
  'application/vnd.google-apps.document': {
    type: TypeGoogleDoc,
    title: 'Google Doc Icon',
  },
  'application/vnd.google-apps.form': {
    type: TypeGoogleForm,
    title: 'Google Form Icon',
  },
  'application/vnd.google-apps.presentation': {
    type: TypeGoogleSlide,
    title: 'Google Slide Icon',
  },
  'application/vnd.google-apps.spreadsheet': {
    type: TypeGoogleSheet,
    title: 'Google Sheet Icon',
  },
  // Code
  'application/x-bsh': terminal,
  'application/x-sh': terminal,
  'application/x-shar': terminal,
  'text/x-script.sh': terminal,
  // Javascript
  'application/x-javascript': js,
  'application/javascript': js,
  'application/ecmascript': js,
  'text/javascript': js,
  'text/ecmascript': js,
  // Microsoft word
  'application/msword': docx,
  // Microsoft Excel
  'application/excel': xls,
  'application/vnd.ms-excel': xls,
  'application/x-msexcel': xls,
  'application/x-excel': xls,
  'text/csv': xls,
  // Microsoft Powerpoint
  'application/mspowerpoint': ppt,
  'application/powerpoint': ppt,
  'application/vnd.ms-powerpoint': ppt,
  'application/x-mspowerpoint': ppt,
};

export default (type) => {
  if (typeof types[type] !== 'undefined') {
    return types[type];
  }
  return { type: File, title: 'File Icon' };
};
