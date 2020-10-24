import React from 'react';

import classes from './ElementAddButtons.module.css';
import ElementAddButton from './ElementAddButton/ElementAddButton';

const controls = [
  { label: 'Title', type: 'title' },
  { label: 'Subtitle', type: 'subtitle' },
  { label: 'Text', type: 'text' },
  { label: 'Separator', type: 'separator' },
  { label: 'Photo', type: 'photo' },
  { label: 'Video', type: 'video' },
  { label: 'Audio', type: 'audio' },
  { label: 'Gallery', type: 'gallery' },
  { label: 'Connection', type: 'connection' },
  { label: 'External Link', type: 'link' },
  { label: 'Resource', type: 'resource' },
  { label: 'Custom Field', type: 'custom' }
];


const ElementAddButtons = (props) => (
  <div className={classes.ElementAddButtons}>
    {controls.map(ctrl => (
      <ElementAddButton
        key={ctrl.label}
        label={ctrl.label}
        added={() => props.elementAdded(ctrl.type)} />
    ))}
  </div>
);

export default ElementAddButtons;
