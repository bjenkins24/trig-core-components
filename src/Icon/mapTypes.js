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
      return `${prefix}doc`;

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
      return `${prefix}xls`;

    // Microsoft powerpoint
    case 'ppa':
    case 'ppam':
    case 'pps':
    case 'ppsm':
    case 'ppsx':
    case 'pptx':
    case 'ppt':
      return `${prefix}ppt`;

    default:
      return type;
  }
};

export default mapTypes;
