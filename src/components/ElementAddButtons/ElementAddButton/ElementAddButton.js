import React from 'react';

import classes from './ElementAddButton.module.css';

const ElementAddButton = (props) => (
  <div className={classes.ElementAddButton}>
    <button className={classes.Label} onClick={props.added}>{props.label}</button>
  </div>
);

export default ElementAddButton;
