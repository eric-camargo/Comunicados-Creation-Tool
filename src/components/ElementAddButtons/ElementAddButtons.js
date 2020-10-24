import React from 'react';

import classes from './ElementAddButtons.module.css';
import ElementAddButton from './ElementAddButton/ElementAddButton';
import * as ElementLabels from '../../constants/ElementLabels';
import * as ElementTypes from '../../constants/ElementTypes';

const controls = [
  { label: ElementLabels.TITLE, type: ElementTypes.TITLE },
  { label: ElementLabels.SUBTITLE, type: ElementTypes.SUBTITLE },
  { label: ElementLabels.TEXT, type: ElementTypes.TEXT },
  { label: ElementLabels.SEPARATOR, type: ElementTypes.SEPARATOR },
  { label: ElementLabels.PHOTO, type: ElementTypes.PHOTO },
  { label: ElementLabels.VIDEO, type: ElementTypes.VIDEO },
  { label: ElementLabels.AUDIO, type: ElementTypes.AUDIO },
  { label: ElementLabels.GALLERY, type: ElementTypes.GALLERY },
  { label: ElementLabels.CONNECTION, type: ElementTypes.CONNECTION },
  { label: ElementLabels.LINK, type: ElementTypes.LINK },
  { label: ElementLabels.RESOURCE, type: ElementTypes.RESOURCE },
  { label: ElementLabels.CUSTOM, type: ElementTypes.CUSTOM }
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
