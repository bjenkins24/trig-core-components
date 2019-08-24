const prefix = 'type-';
const mapTypes = (type) => {
  switch (type) {
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

    default:
      return { type };
  }
};

export default mapTypes;
