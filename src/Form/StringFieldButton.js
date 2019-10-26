import React from 'react';
import StringField from './StringField';
import Button from '../Buttons';

const StringFieldButton = (props) => {
  return (
    <div>
      <StringField {...props} />
      <Button size="lg">Add</Button>
    </div>
  );
};

export default StringFieldButton;
