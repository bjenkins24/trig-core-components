import * as Buttons from './Buttons';
import * as Typography from './Typography';
import * as Groups from './Groups';
import * as AllTabs from './Tabs';
import * as Lists from './Lists';
import * as FormComponents from './Form';
import * as Toast from './Toast';

export const { Button, ButtonSelect, ButtonToggle, Fab } = Buttons;
export const { Notification, toast, ToastContainer } = Toast;
export const { HorizontalGroup, VerticalGroup } = Groups;
export const { Tabs, TabList, Tab, TabPanel } = AllTabs;
export const { List, ListItem, ListItemContent } = Lists;
export const {
  Checkbox,
  CheckboxForm,
  DatePicker,
  DateRangeField,
  Field,
  Fieldset,
  Form,
  Label,
  Legend,
  SelectField,
  SelectTagField,
  StringField,
  StringFieldForm,
  StringFieldWithButton,
  StringFieldWithButtonForm,
  Tag,
  TextField,
  TextFieldForm,
} = FormComponents;

export const {
  HugeStyles,
  HugeComponent,
  Huge,
  Heading1Styles,
  Heading1Component,
  Heading1,
  Heading2Styles,
  Heading2Component,
  Heading2,
  Heading3Styles,
  Heading3Component,
  Heading3,
  Heading4Styles,
  Heading4Component,
  Heading4,
  BodyBiggestStyles,
  BodyBiggest,
  BodyBigStyles,
  BodyBig,
  Body1Styles,
  Body1Component,
  Body1,
  Body2Styles,
  Body2Component,
  Body2,
  Body3Styles,
  Body3Component,
  Body3,
  TinyTextStyles,
  TinyTextComponent,
  TinyText,
} = Typography;

export { default as Image } from './Image';
export { default as Logo } from './Logo';
export { default as Avatar } from './Avatar';
export { default as Carousel } from './Carousel';
export { default as Deck } from './Deck';
export { default as Icon } from './Icon';
export { default as Loading } from './Loading';
export { default as Modal } from './Modal';
export { default as ModalHeader } from './Modal/ModalHeader';
export { default as Popover } from './Popover';
export { default as Separator } from './Separator';
export { default as Uploader } from './Uploader';
