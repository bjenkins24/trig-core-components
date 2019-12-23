const prefix = 'type-';

const terminal = { type: `${prefix}code`, title: 'Terminal Icon' };
const js = { type: `${prefix}code`, title: 'Javascript Icon' };
const docx = { type: `${prefix}doc`, title: 'Microsoft Word Document Icon' };
const xls = { type: `${prefix}xls`, result: 'Microsoft Excel Icon' };
const ppt = { type: `${prefix}ppt`, result: 'Microsoft Powerpoint Icon' };
const youtube = { type: `${prefix}youtube`, title: 'Youtube Video' };

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
  return { type };
};
