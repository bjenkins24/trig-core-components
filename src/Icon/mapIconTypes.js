import File from './icons/File';
import TypeCode from './icons/TypeCode';
import TypeDoc from './icons/TypeDoc';
import TypeXls from './icons/TypeXls';
import TypePpt from './icons/TypePpt';
import TypeYoutube from './icons/TypeYoutube';

const terminal = { type: TypeCode, title: 'Terminal Icon' };
const js = { type: TypeCode, title: 'Javascript Icon' };
const docx = { type: TypeDoc, title: 'Microsoft Word Document Icon' };
const xls = { type: TypeXls, title: 'Microsoft Excel Icon' };
const ppt = { type: TypePpt, title: 'Microsoft Powerpoint Icon' };
const youtube = { type: TypeYoutube, title: 'Youtube Video' };

const types = {
  // Code
  sh: terminal,
  php: terminal,
  tpl: terminal,
  html: terminal,
  css: terminal,
  py: terminal,
  R: terminal,
  // Javascript
  js,
  jsx: js,
  // Microsoft word
  docx,
  docm: docx,
  dot: docx,
  dotx: docx,
  dotm: docx,
  doc: docx,
  // Microsoft Excel
  xls,
  xla: xls,
  xlsb: xls,
  xlsm: xls,
  xlsx: xls,
  xlt: xls,
  xltm: xls,
  xltx: xls,
  xlw: xls,
  csv: xls,
  // Microsoft Powerpoint
  ppt,
  ppa: ppt,
  ppam: ppt,
  pps: ppt,
  ppsm: ppt,
  ppsx: ppt,
  pptx: ppt,
  // Youtube
  youtube,
};

export default (type) => {
  if (typeof types[type] !== 'undefined') {
    return types[type];
  }
  return { type: File, title: 'File Icon' };
};
