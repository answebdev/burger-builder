import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

// Array with which to loop through and build all our build controls and render them
// (of course, we could also just hard code all the controls, but having this array is more convenient):
const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
];

const buildControls = (props) => (
  <div className={classes.BuildControls}>
    {/* Loop through all the controls and render a build control for each of them,
    using the constant ('controls') created above.
    Remember too since we're using MAP, we need a key */}
    {controls.map((ctrl) => (
      <BuildControl key={ctrl.label} label={ctrl.label} />
    ))}
  </div>
);

export default buildControls;
