const prefix = 'type-';
const mapIconTypes = (type) => {
  switch (type) {
    // Code like stuff
    case 'sh':
    case 'php':
    case 'tpl':
    case 'html':
    case 'css':
    case 'py':
    case 'R':
      return {
        type: `${prefix}code`,
        title: 'Terminal Icon',
      };

    // Javascript
    case 'js':
    case 'jsx':
      return {
        type: `${prefix}code`,
        title: 'Javascript Icon',
      };

    // Microsoft word
    case 'docx':
    case 'docm':
    case 'dot':
    case 'dotx':
    case 'dotm':
    case 'doc':
      return {
        type: `${prefix}doc`,
        title: 'Microsoft Word Document Icon',
      };

    // Microsoft excel
    case 'xla':
    case 'xlsb':
    case 'xlsm':
    case 'xlsx':
    case 'xlt':
    case 'xltm':
    case 'xltx':
    case 'xlw':
    case 'xls':
    case 'csv':
      return {
        type: `${prefix}xls`,
        title: 'Microsoft Excel Icon',
      };

    // Microsoft powerpoint
    case 'ppa':
    case 'ppam':
    case 'pps':
    case 'ppsm':
    case 'ppsx':
    case 'pptx':
    case 'ppt':
      return {
        type: `${prefix}ppt`,
        title: 'Microsoft Powerpoint Icon',
      };

    case 'youtube':
      return {
        type: `${prefix}youtube`,
        title: 'Youtube Video',
      };

    default:
      return { type };
  }
};

export default mapIconTypes;
