import React from 'react';

import classes from './ElementAddButton.module.css';
import ActionButton from '../../UI/Buttons/ActionButton';

const ElementAddButton = (props) => (
    <ActionButton
      btnType='Insert'
      clicked={props.added}>{props.label}</ActionButton>

);

export default ElementAddButton;
